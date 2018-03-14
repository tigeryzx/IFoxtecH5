<template>
    <div>
        <panel header="最近一周的消息" :footer="footer" :list="list" :type="type"></panel>
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
                list: [{
                    title: '消息标题1',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    meta: {
                        source: '通知人:黄小明',
                        date: '2018-01-02 18:06'
                    }
                }, {
                    title: '消息标题2',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    meta: {
                        source: '通知人:黄小明',
                        date: '2018-01-01 09:00'
                    }
                }],
                footer: {
                    title: '查看历史消息',
                    url: '/notifyHistory'
                }
            }
        }
    }
</script>