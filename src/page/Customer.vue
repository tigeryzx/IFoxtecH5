<template>
    <div>
        <x-header :left-options="{showBack: false}">客户</x-header>
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top
            top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>

        <group v-for="cg in customerGroups" :key="cg.id" :title="cg.name">
            <cell title="客户名称1" inline-desc="13525425658"></cell>
            <cell title="客户名称2" inline-desc="13525425658"></cell>
        </group>

        <main-tabbar></main-tabbar>
    </div>
</template>
<script>
    import { Search, XHeader, Group, Cell } from 'vux'
    import MainTabbar from '../components/MainTabbar'
    export default {
        components: {
            Search,
            XHeader,
            MainTabbar,
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
        route: {
            data: function(transition) {
                console.log("getData");
                var customerGroups = [];
                for (var i = 1; i < 10; i++) {
                    var customerGroup = { name: '组别' + i, customers: [] };
                    for (var y = 1; y < 6; y++) {
                        customerGroup.customers.push({ name: '客户名称' + y, phone: '13528542568' });
                    }
                    customerGroups.push(customerGroup);
                }
                transition.next({ customerGroups: customerGroups });
            },
            waitForData: true
        },
        methods: {
            resultClick(item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
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