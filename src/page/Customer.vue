<template>
    <div>
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top
            top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>

        <scroller-datalist height="-150" @on-pulldown-loading="refresh" @on-pullup-loading="loadMore" ref="datalist">
            <div>
                <group v-for="cg in customerGroups" :key="cg.id" :title="cg.name">
                    <cell v-for="customer in cg.customers" :key="customer.id" :title="customer.name" link="/customerInfo" :inline-desc="customer.contact +' '+ customer.phone"></cell>
                </group>
            </div>
        </scroller-datalist>
    </div>
</template>
<script>
    import { Search, XHeader, Group, Cell } from 'vux'
    import ScrollerDatalist from '../components/ScrollerDatalist'

    export default {
        components: {
            Search,
            Group,
            Cell,
            ScrollerDatalist
        },
        data() {
            return {
                results: [],
                value: 'test',
                customerGroups: [],
                maxLoadTime: 3,
                loadTime: 0
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
            refresh() {
                this.loadTime = 0;
                this.customerGroups.splice(0, this.customerGroups.length);
                this.fillCustomerGroupData(this.customerGroups);
            },
            loadMore() {
                this.fillCustomerGroupData(this.customerGroups);
            },
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
                this.fillCustomerGroupData(this.customerGroups);
            },
            fillCustomerGroupData(customerGroups) {

                if (this.loadTime >= this.maxLoadTime) {
                    // 没有更多数据时禁用拉上刷新
                    this.$refs.datalist.setNoMoreState(true);
                    return;
                }

                var startIndex = customerGroups.length;
                var endIndex = customerGroups.length + 3;
                for (var i = startIndex; i < endIndex; i++) {
                    var customerGroup = { name: '组别' + i, customers: [] };
                    for (var y = 1; y < 3; y++) {
                        customerGroup.customers.push({ name: '客户名称' + y, phone: '13528542568', contact: '联系人' + y });
                    }
                    customerGroups.push(customerGroup);
                }

                this.loadTime++;
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