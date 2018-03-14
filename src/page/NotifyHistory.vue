<template>
    <div>
        <panel v-for="group in groups" :key="group.id" :header="group.name" :list="group.list" :type="type"></panel>
    </div>
</template>
<script>
    import { Panel } from 'vux'
    export default {
        components: {
            Panel
        },
        data() {
            return {
                type: "4",
                groups: []
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next(vm => vm.setGroupsData());
        },
        methods: {
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
            }
        }
    }
</script>