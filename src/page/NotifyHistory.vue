<template>
    <div>
        <scroller-datalist @on-pulldown-loading="refresh" @on-pullup-loading="loadMore" ref="datalist">
            <div>
                <panel v-for="group in groups" :key="group.id" :header="group.name" :list="group.list" :type="type"></panel>
            </div>
        </scroller-datalist>
    </div>
</template>
<script>
    import { Panel } from 'vux'
    import ScrollerDatalist from '../components/ScrollerDatalist'
    import api from '../api'

    export default {
        components: {
            Panel,
            ScrollerDatalist
        },
        data() {
            return {
                type: "4",
                maxLoadTime: 3,
                loadTime: 0,
                groups: []
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");

            api.getNotify().then(res => {
                next(vm => {
                    vm.setGroupsData(res.data.result);
                });
            });
        },
        methods: {
            refresh() {
                this.loadTime = 0;
                this.groups.splice(0, this.groups.length);
                this.setGroupsData();
            },
            loadMore() {
                this.fillGroupsData(this.groups[1]);
            },
            setGroupsData(data) {
                var groups = [];
                groups.push({ name: '最近一周的消息', list: [] });
                groups.push({ name: '一周之前的消息', list: [] });

                var group = groups[0];
                for (var y = 0; y < 5; y++) {
                    group.list.push({
                        title: '消息标题' + y,
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        meta: {
                            source: '通知人:管理员',
                            date: '2018-01-01 09:00'
                        }
                    });
                }

                group = groups[1];
                group.list = data;

                this.groups = groups;
            },
            fillGroupsData(group) {

                if (this.loadTime >= this.maxLoadTime) {
                    // 没有更多数据时禁用拉上刷新
                    this.$refs.datalist.setNoMoreState(true);
                    return;
                }

                api.getNotify().then(res => {
                    var data = res.data.result;
                    for (var i = 0; i < data.length; i++) {
                        group.list.push(data[i]);
                    }
                    this.loadTime++;
                });
            }
        }
    }
</script>