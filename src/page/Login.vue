<template>
    <div>
        <div class="logo-warp" >
            <img class="logo" src="../assets/vux_logo.png" />
        </div>
        <group>
            <x-input placeholder="请输入用户名" :required="true" v-model="username"></x-input>
            <x-input placeholder="请输入密码" :required="true" type="password" v-model="password"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="login" action-type="button">登录</x-button>
        </box>
    </div>
</template>
<script>
    import { Group, XInput, XButton, Box } from 'vux'
    export default{
        components: {
            Group,
            XInput,
            XButton,
            Box
        },
        data () {
            return {
                username:'',
                password:''
            }
        },
        methods: {
            login(){
                console.log(this.username + "||" + this.password);
                if(this.username && this.password)
                    this.$router.push('/home');
            }
        }
    }
</script>
<style>
    .logo-warp{
        text-align:center;
    }
    .logo{
        width:50%;height:50%;
    }
</style>