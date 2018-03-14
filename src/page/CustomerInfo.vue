<template>
    <div>
        <tab style="width:100%;position:absolute;left:0;top:0;z-index:100;margin-top:46px;">
            <tab-item selected @on-item-click="onItemClick">客户</tab-item>
            <tab-item @on-item-click="onItemClick">联系人</tab-item>
        </tab>
        <div style="margin-top:46px;" v-show="index==0">
            <group title="基础信息">
                <cell title="客户编号" value="MY"></cell>
                <cell title="客户名称" value="铭阳电器"></cell>
                <cell title="重要级别" value="★★★"></cell>
                <cell title="所在行业" value="IT"></cell>
                <cell title="详细地址" value="中山市中山百货 5楼 360室"></cell>

                <cell title="更多..." is-link :border-intent="false" :arrow-direction="showMoreBaseInfo ? 'up' : 'down'" @click.native="showMoreBaseInfo = !showMoreBaseInfo">
                    <x-icon slot="icon" type="android-list" size="25" class="customerInfo-icon"></x-icon>
                </cell>
                <template v-if="showMoreBaseInfo">
                    <cell title="所属城市" value="中山市"></cell>
                    <cell title="客户性质" value="普通客户"></cell>
                    <cell title="注册资本" value="100万"></cell>
                    <cell title="注册时间" value="2015-02-01"></cell>
                    <cell title="主营产品" value="洗衣机"></cell>
                    <cell title="企业网站" value="www.ym.com"></cell>
                    <cell title="客户来源" value="第三方"></cell>
                    <cell title="客户渠道" value="渠道一"></cell>
                    <cell title="佣金账户" value="YJ001252"></cell>
                    <cell title="建档时间" value="2018-02-23"></cell>
                </template>
            </group>
            <group title="主联系人">
                <cell title="联系人" value="黄小明"></cell>
                <cell title="联系电话">
                    <x-icon class="customerInfo-icon" slot="icon" type="ios-telephone"></x-icon>
                    <a href="tel://13528541258">13528541258</a>
                </cell>
                <cell title="职务" value="经理"></cell>

                <cell title="更多..." is-link :border-intent="false" :arrow-direction="showMoreContactInfo ? 'up' : 'down'" @click.native="showMoreContactInfo = !showMoreContactInfo">
                    <x-icon slot="icon" type="android-list" size="25" class="customerInfo-icon"></x-icon>
                </cell>
                <template v-if="showMoreContactInfo">
                    <cell title="微信" value="wx00125"></cell>
                    <cell title="QQ" value="135256965"></cell>
                </template>
            </group>
        </div>
        <div style="margin-top:46px;" v-show="index==1">
            <card style="padding:10px;" v-for="ct in contacts" :key="ct.id" :footer="{title: '详细信息',link:'/contactsInfo'}">
                <div style="font-size:20px;" slot="header">
                    {{ct.contactName}} {{ct.position}}
                </div>
                <div slot="content">
                    <group>
                        <cell title="手机">
                            <a :href="'tel://'+ct.mobile">{{ct.mobile}}</a>
                            <x-icon class="customerInfo-icon" slot="icon" type="ios-telephone"></x-icon>
                        </cell>
                        <cell title="固话">
                            <a :href="'tel://'+ct.telephone">{{ct.telephone}}</a>
                            <x-icon class="customerInfo-icon" slot="icon" type="ios-telephone"></x-icon>
                        </cell>
                    </group>
                </div>
            </card>
        </div>
    </div>
</template>
<script>
    import { Group, Cell, Tab, TabItem, Card } from 'vux'
    export default {
        components: {
            Group,
            Cell,
            Tab,
            TabItem,
            Card
        },
        data() {
            return {
                index: 0,
                showMoreBaseInfo: false,
                showMoreContactInfo: false,
                contacts: []
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next(vm => vm.setContactData());
        },
        methods: {
            onItemClick(index) {
                console.log('on item click:', index);
                this.index = index;
            },
            setContactData() {
                var contacts = [];
                for (var i = 0; i < 5; i++) {
                    contacts.push({
                        contactName: '张长云' + i,
                        position: '主管' + i,
                        mobile: '13528541258',
                        telephone: '0760-88521458'
                    });
                }
                this.contacts = contacts;
            },
            callPhone(phone) {
                console.log("call.." + phone);
                window.location.href = 'tel://' + phone;
            }
        }
    }
</script>
<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .customerInfo-icon {
        margin-right: 5px;
    }

    .customerInfo-more {
        font-size: 20px;
    }
</style>