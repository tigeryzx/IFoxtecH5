<template>
    <div>
        <group-title>客户管理</group-title>
        <grid :cols="3">
            <grid-item label="申领审批" link="/customerApply">
                <x-icon slot="icon" type="checkmark-circled" size="35"></x-icon>
            </grid-item>

            <grid-item label="共享客户" link="/customer/share">
                <x-icon slot="icon" type="person-stalker" size="35"></x-icon>
            </grid-item>
            <grid-item label="所有客户" link="/customer/all">
                <x-icon slot="icon" type="ios-people" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能占位">
                <x-icon slot="icon" type="ios-search-strong" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能占位">
                <x-icon slot="icon" type="ios-heart" size="35"></x-icon>
            </grid-item>
            <grid-item label="功能占位">
                <x-icon slot="icon" type="ios-help" size="35"></x-icon>
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