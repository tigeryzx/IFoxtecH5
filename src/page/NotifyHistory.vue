<template>
    <div>
        <scroller height="-46" :pulldown-config="pulldownConfig" :pullup-config="pullupConfig" lock-x scrollbar-y use-pulldown use-pullup
            @on-pulldown-loading="refresh" @on-pullup-loading="loadMore" ref="scroller">
            <div>
                <panel v-for="group in groups" :key="group.id" :header="group.name" :list="group.list" :type="type"></panel>
                <divider v-show="isNoMore">已经没有啦!</divider>
            </div>
        </scroller>
    </div>
</template>
<script>
    import { Panel, Scroller, Divider } from 'vux'
    export default {
        components: {
            Panel,
            Scroller,
            Divider
        },
        data() {
            return {
                type: "4",
                pullupConfig: {
                    content: '上拉加载更多',
                    downContent: '释放后加载',
                    upContent: '上拉加载更多',
                    loadingContent: '加载中...'
                },
                pulldownConfig: {
                    content: '下拉刷新',
                    downContent: '下拉刷新',
                    upContent: '释放后刷新',
                    loadingContent: '刷新中...',
                },
                isNoMore: false,
                maxLoadTime: 3,
                loadTime: 0,
                groups: []
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next(vm => vm.setGroupsData());
        },
        methods: {
            refresh() {
                setTimeout(() => {
                    this.loadTime = 0;
                    this.groups.splice(0, this.groups.length);
                    this.setGroupsData();
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.$refs.scroller.donePulldown();
                            this.$refs.scroller.enablePullup();
                            this.isNoMore = false;
                        }, 10)
                    })
                }, 2000)
            },
            loadMore() {
                setTimeout(() => {
                    this.fillGroupsData(this.groups[1]);
                    setTimeout(() => {
                        this.$refs.scroller.donePullup()
                    }, 10)
                }, 2000)
            },
            setGroupsData() {
                var groups = [];
                groups.push({ name: '最近一周的消息', list: [] });
                groups.push({ name: '一周之前的消息', list: [] });

                for (var i = 0; i < groups.length; i++) {
                    var group = groups[i];
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

                }
                this.groups = groups;
            },
            fillGroupsData(group) {

                if (this.loadTime >= this.maxLoadTime) {
                    // 没有更多数据时禁用拉上刷新
                    this.$refs.scroller.disablePullup();
                    this.isNoMore = true;
                    return;
                }

                var startIndex = group.list.length;
                var endIndex = group.list.length + 3;

                for (var y = startIndex; y < endIndex; y++) {
                    group.list.push({
                        title: '消息标题' + y,
                        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                        meta: {
                            source: '通知人:管理员',
                            date: '2018-01-01 09:00'
                        }
                    });
                }

                this.loadTime++;
            }
        }
    }
</script>