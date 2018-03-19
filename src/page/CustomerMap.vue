<template>
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="VMVSnEiWRf76Nmi2uKE8YcSw">
        <bm-geolocation @locationSuccess="locationSuccess" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-marker :position="{lng: 113.413436, lat:22.542274}" @click="infoWindowOpen">
            <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">详细地址：xxxxx</bm-info-window>
            <bm-label content="客户A" :labelStyle="{color: 'red', fontSize : '15px'}" :offset="{width: -35, height: 30}" />
        </bm-marker>
    </baidu-map>
</template>
<script>
    import { BaiduMap, BmLabel, BmMarker, BmInfoWindow, BmGeolocation } from 'vue-baidu-map'
    export default {
        components: {
            BaiduMap,
            BmLabel,
            BmMarker,
            BmInfoWindow,
            BmGeolocation
        },
        data() {
            return {
                center: '中山市',
                zoom: 13,
                show: false
            }
        },
        methods: {
            handler({ BMap, map }) {
                // 初始化行为
            },
            infoWindowClose() {
                this.show = false
            },
            infoWindowOpen() {
                this.show = true
            },
            locationSuccess({ point, AddressComponent, marker }) {
                console.log(point);
            }
        }
    }
</script>
<style>
    .bm-view {
        width: 100%;
        height: 92%;
        position: absolute;
    }
</style>