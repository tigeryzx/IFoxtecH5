<template>
    <div>
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top
            top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>

        <group v-for="cg in customerGroups" :key="cg.id" :title="cg.name">
            <cell v-for="customer in cg.customers" :key="customer.id" :title="customer.name" link="/customerInfo" :inline-desc="customer.contact +' '+ customer.phone"></cell>
        </group>

    </div>
</template>
<script>
    import { Search, XHeader, Group, Cell } from 'vux'

    export default {
        components: {
            Search,
            Group,
            Cell
        },
        data() {
            return {
                results: [],
                value: 'test',
                customerGroups: []
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next(vm => vm.setCustomerGroupData());
        },
        // 路由改变前，组件就已经渲染完了
        // 逻辑稍稍不同
        beforeRouteUpdate(to, from, next) {
            console.log("beforeRouteUpdate");
            next(vm => vm.setCustomerGroupData());
        },
        methods: {
            resultClick(item) {
                // 显示
                this.$vux.alert.show({
                    title: '提示',
                    content: '你选中值' + JSON.stringify(item),
                    onShow() {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide() {
                        console.log('Plugin: I\'m hiding')
                    }
                });
            },
            getResult(val) {
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            onSubmit() {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    text: '提交查询'
                })
            },
            onFocus() {
                console.log('on focus')
            },
            onCancel() {
                console.log('on cancel')
            },
            setCustomerGroupData() {
                console.log("getData");
                var customerGroups = [];
                for (var i = 1; i < 10; i++) {
                    var customerGroup = { name: '组别' + i, customers: [] };
                    for (var y = 1; y < 6; y++) {
                        customerGroup.customers.push({ name: '客户名称' + y, phone: '13528542568', contact: '联系人' + y });
                    }
                    customerGroups.push(customerGroup);
                }
                this.customerGroups = customerGroups;
            }
        }
    }

    function getResult(val) {
        let rs = []
        for (let i = 0; i < 20; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }
</script>