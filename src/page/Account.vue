<template>
    <div>
        <x-header :left-options="{showBack: false}">我</x-header>
        <group>
            <cell title="黄小明" inline-desc="账号名：hxm"></cell>
        </group>
        <group>
            <cell title="功能1" is-link>
                <x-icon style="display:block;margin-right:5px;color:red;" slot="icon" type="ios-heart" size="20"></x-icon>
            </cell>
        </group>
        <group>
            <cell title="功能2" is-link>
                <x-icon style="display:block;margin-right:5px;color:blue;" slot="icon" type="ios-plus-outline" size="20"></x-icon>
            </cell>
            <cell title="功能3" is-link>
                <x-icon style="display:block;margin-right:5px;color:yellow;" slot="icon" type="ios-star" size="20"></x-icon>
            </cell>
        </group>
        <main-tabbar>

        </main-tabbar>
    </div>
</template>
<script>
    import { Group, Cell, XHeader } from 'vux'
    import MainTabbar from '../components/MainTabbar'
    export default {
        components: {
            Group,
            Cell,
            XHeader,
            MainTabbar
        }
    }
</script>
<style>
</style>