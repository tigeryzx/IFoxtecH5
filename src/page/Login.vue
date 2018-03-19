<template>
    <div>
        <div class="bg"></div>
        <div class="logo-warp">
            <img class="logo" src="../assets/vux_logo.png" />
        </div>
        <group class="inputbg">
            <x-input placeholder="请输入用户名" :required="true" v-model="username"></x-input>
            <x-input placeholder="请输入密码" :required="true" type="password" v-model="password"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="login" action-type="button">登录</x-button>
        </box>
        <div class="footer">
            ©2017-2018 Fox, Inc. All rights reserved. 
        </div>
    </div>
</template>
<script>
    import { Group, XInput, XButton, Box } from 'vux'
    export default {
        components: {
            Group,
            XInput,
            XButton,
            Box
        },
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log(this.username + "||" + this.password);
                if (this.username && this.password)
                    this.$router.push('/home');
            }
        }
    }
</script>
<style lang="less" scoped>
    .logo-warp {
        text-align: center;
    }

    .logo {
        width: 50%;
        height: 50%;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -100;
        background-image: url('../assets/loginbg_370x667.jpg');
        background-size: 100% 100%;
        -moz-background-size:100% 100%;
        background-attachment: fixed;
    }

    .inputbg{
        opacity: 0.7;
    }
    .footer{
        font-size: 12px;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
        opacity: 0.7;
    }
</style>