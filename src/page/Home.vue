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

        <main-tabbar></main-tabbar>
    </div>
</template>
<script>
    import { Grid, GridItem, GroupTitle, XHeader } from 'vux'
    import MainTabbar from '../components/MainTabbar'
    export default {
        components: {
            Grid,
            GridItem,
            GroupTitle,
            XHeader,
            MainTabbar
        }
    }
</script>
<style>

</style>