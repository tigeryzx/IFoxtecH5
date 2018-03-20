<template>
    <div>
        <group>
            <cell title="黄小明" :inline-desc="'账号名：'+ loginName"></cell>
        </group>
        <group>
            <cell title="功能菜单1" is-link>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-heart"></x-icon>
            </cell>
        </group>
        <group>
            <cell title="功能菜单2" is-link>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-cart"></x-icon>
            </cell>
            <cell title="功能菜单3" is-link>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-star"></x-icon>
            </cell>
        </group>
        <group>
            <cell title="退出登录" is-link @click.native="logout">
                <x-icon class="fox-cell-icon" slot="icon" type="arrow-right-a"></x-icon>
            </cell>
        </group>
        <main-tabbar>
        </main-tabbar>
    </div>
</template>
<script>
    import { Group, Cell, cookie } from 'vux'
    import MainTabbar from '../components/MainTabbar'
    export default {
        components: {
            Group,
            Cell,
            MainTabbar
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                var username = cookie.get('userName');
                if (username)
                    vm.loginName = username;
            });
        },
        data() {
            return {
                loginName: ''
            }
        },
        methods: {
            logout() {
                cookie.remove('userName');
                this.$router.push('/');
            }
        }
    }
</script>