<template>
    <tabbar style="position:fixed;">
        <tabbar-item link="/home">
            <x-icon slot="icon" type="ios-home-outline" size="30"></x-icon>
            <x-icon slot="icon-active" type="ios-home" size="30"></x-icon>
            <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item show-dot link="/customer">
            <x-icon slot="icon" type="ios-list-outline" size="30"></x-icon>
            <x-icon slot="icon-active" type="ios-list" size="30"></x-icon>
            <span slot="label">客户</span>
        </tabbar-item>
        <tabbar-item>
            <x-icon slot="icon" type="ios-albums-outline" size="30"></x-icon>
            <x-icon slot="icon-active" type="ios-albums" size="30"></x-icon>
            <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/account">
            <x-icon slot="icon" type="ios-person-outline" size="30"></x-icon>
            <x-icon slot="icon-active" type="ios-person" size="30"></x-icon>
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
    .vux-x-icon {
        fill: rgb(130, 185, 78);
        display: block;
    }

    .cell-x-icon {
        display: block;
        fill: green;
    }
</style>