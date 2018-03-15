<template>
    <div>
        <group title="联系人信息">
            <cell title="姓名" value="李小红"></cell>
            <cell title="职位" value="主管"></cell>
            <cell title="手机" value="13528541258">
                <a href="tel://13528541258">13528541258</a>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-telephone"></x-icon>
            </cell>
            <cell title="固话">
                <a href="tel://0760-88521458">0760-88521458</a>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-telephone"></x-icon>
            </cell>
            <cell title="邮箱">
                <a href="mailto:nekomail@qq.com">nekomail@qq.com</a>
                <x-icon class="fox-cell-icon" slot="icon" type="android-mail" ></x-icon>
            </cell>
            <cell title="微信" value="wx075685"></cell>
            <cell title="QQ" value="137378589"></cell>
            <cell title="备注" value="此客户并不友善"></cell>
        </group>
    </div>
</template>
<script>
    import { Group, Cell } from 'vux'
    export default {
        components: {
            Group,
            Cell
        }
    }
</script>