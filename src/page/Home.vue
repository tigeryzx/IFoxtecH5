<template>
    <div>
        <x-header :left-options="{showBack: false}">所有功能</x-header>
        <group-title>这是一段描述信息</group-title>
        <grid :cols="3">
            <grid-item label="功能">
                <x-icon slot="icon" type="ios-search-strong" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能">
                <x-icon slot="icon" type="ios-help" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能">
                <x-icon slot="icon" type="ios-heart" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能">
                <x-icon slot="icon" type="ios-heart" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能">
                <x-icon slot="icon" type="ios-help" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能">
                <x-icon slot="icon" type="ios-search-strong" size="35"></x-icon>
            </grid-item>
        </grid>

        <tabbar>
            <tabbar-item>
                <x-icon slot="icon" type="ios-plus-outline" size="30"></x-icon>
                <span slot="label">Wechat</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <x-icon slot="icon" type="ios-plus-outline" size="30"></x-icon>
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item selected link="/component/demo">
                <x-icon slot="icon" type="ios-plus-outline" size="30"></x-icon>
                <span slot="label">Explore</span>
            </tabbar-item>
            <tabbar-item badge="2">
                <x-icon slot="icon" type="ios-star" size="30"></x-icon>
                <span slot="label">News</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
    import { Grid, GridItem, GroupTitle, Icon, XHeader, Tabbar, TabbarItem } from 'vux'
    export default {
        components: {
            Grid,
            GridItem,
            GroupTitle,
            Icon,
            XHeader,
            Tabbar,
            TabbarItem
        }
    }
</script>
<style>
    .vux-x-icon {
        fill: rgb(130, 185, 78);
    }

    .cell-x-icon {
        display: block;
        fill: green;
    }
</style>