<template>
  <div id="app" style="height:100%;">
    <loading v-model="isLoading"></loading>

    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header" v-show="title!=null" :title="title" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :left-options="{showBack: false}"></x-header>
      <router-view class="router-view"></router-view>
      <main-tabbar slot="bottom" v-show="showTabbar"></main-tabbar>
    </view-box>

  </div>
</template>

<script>
  import { Loading, ViewBox, XHeader } from 'vux'
  import { mapState } from 'Vuex'
  import MainTabbar from './components/MainTabbar'

  export default {
    name: 'app',
    components: {
      Loading,
      ViewBox,
      XHeader,
      MainTabbar
    },
    computed: {
      ...mapState({
        isLoading: state => state.loading.isLoading
      }),
      title() {
        if (this.$route.meta && this.$route.meta.title)
          return this.$route.meta.title;
        return null;
      },
      showTabbar() {
        if (this.$route.meta)
          return this.$route.meta.showTabbar != undefined ? this.$route.meta.showTabbar : true;
        return true;
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';

  body {
    background-color: #fbf9fe;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .router-view {
    width: 100%;
    top: 46px;
  }
</style>