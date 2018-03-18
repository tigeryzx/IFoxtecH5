<template>
    <div>
        <group title="联系人信息">
            <cell title="姓名" :value="customerInfo.name"></cell>
            <cell title="职位" :value="customerInfo.position"></cell>
            <cell title="手机">
                <a :href="'tel://'+customerInfo.phone">{{customerInfo.phone}}</a>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-telephone"></x-icon>
            </cell>
            <cell title="固话">
                <a :href="'tel://' + customerInfo.tel">{{customerInfo.tel}}</a>
                <x-icon class="fox-cell-icon" slot="icon" type="ios-telephone"></x-icon>
            </cell>
            <cell title="邮箱">
                <a :href="'mailto:'+customerInfo.email">{{customerInfo.email}}</a>
                <x-icon class="fox-cell-icon" slot="icon" type="android-mail"></x-icon>
            </cell>
            <cell title="微信" :value="customerInfo.wexin"></cell>
            <cell title="QQ" :value="customerInfo.qq"></cell>
            <cell title="备注" :value="customerInfo.remark"></cell>
        </group>
    </div>
</template>
<script>
    import { Group, Cell } from 'vux'
    import api from '../api'

    export default {
        components: {
            Group,
            Cell
        },
        beforeRouteEnter(to, from, next) {
            api.getContactsInfo('123').then(res => {
                next(vm => {
                    vm.customerInfo = res.data;
                });
            });
        },
        data() {
            return {
                customerInfo: {
                    name: '',
                    position: '',
                    phone: '',
                    tel: '',
                    email: '',
                    wexin: '',
                    qq: '',
                    remark: ''
                }
            }
        }
    }
</script>