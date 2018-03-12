<template>
    <tabbar style="position:fixed;">
        <tabbar-item>
            <x-icon slot="icon" type="ios-plus-outline" size="30"></x-icon>
            <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item show-dot>
            <x-icon slot="icon" type="ios-plus-outline" size="30"></x-icon>
            <span slot="label">信息</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
            <x-icon slot="icon" type="ios-plus-outline" size="30"></x-icon>
            <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/account">
            <x-icon slot="icon" type="ios-star" size="30"></x-icon>
            <span slot="label">我</span>
        </tabbar-item>
    </tabbar>
</template>
<script>
    import { Tabbar, TabbarItem } from 'vux'
    export default {
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>
<style>
</style>