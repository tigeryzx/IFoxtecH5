<template>
  <div id="app" style="height:100%;">
    <loading v-model="isLoading"></loading>

    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header :transition="headerTransition" slot="header" v-show="title!=null" :title="title" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :left-options="{showBack: canBack}"></x-header>
      <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
      <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="viewTransition" :css="!!direction">
        <router-view class="router-view"></router-view>
      </transition>
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
        isLoading: state => state.loading.isLoading,
        direction: state => state.direction
      }),
      headerTransition() {
        if (!this.direction) return ''
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left';
      },
      title() {
        if (this.$route.meta && this.$route.meta.title)
          return this.$route.meta.title;
        return null;
      },
      showTabbar() {
        if (this.$route.meta)
          return this.$route.meta.showTabbar != undefined ? this.$route.meta.showTabbar : true;
        return true;
      },
      canBack() {
        if (this.$route.meta)
          return this.$route.meta.canBack != undefined ? this.$route.meta.canBack : false;
        return true;
      },
      viewTransition() {
        console.log(this.direction);

        if (!this.direction)
          return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';
  @import './styles/main.less';

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

  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .menu-title {
    color: #888;
  }
</style>