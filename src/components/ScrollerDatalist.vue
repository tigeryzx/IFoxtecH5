<template>
    <div>
        <scroller :height="height" :pulldown-config="pulldownConfig" :pullup-config="pullupConfig" lock-x scrollbar-y use-pulldown
            use-pullup @on-pulldown-loading="refresh" @on-pullup-loading="loadMore" ref="scroller">
            <div>
                <slot></slot>
                <divider v-show="isNoMore">已经没有啦!</divider>
            </div>
        </scroller>
    </div>
</template>
<script>
    import { Scroller, Divider } from 'vux'
    export default {
        name: 'ScrollerDatalist',
        props: {
            height: {
                type: String,
                default: '-46'
            }
        },
        components: {
            Scroller,
            Divider
        },
        data() {
            return {
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
                isNoMore: false
            }
        },
        methods: {
            refresh() {
                setTimeout(() => {
                    this.$emit('on-pulldown-loading');
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
                    this.$emit('on-pullup-loading');
                    setTimeout(() => {
                        this.$refs.scroller.donePullup()
                    }, 10)
                }, 2000)
            },
            setNoMoreState(value) {
                if (value === true)
                    this.$refs.scroller.disablePullup();
                this.isNoMore = value;
            }
        }
    }
</script>