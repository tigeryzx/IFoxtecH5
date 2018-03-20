<template>
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="VMVSnEiWRf76Nmi2uKE8YcSw">
        <bm-geolocation @locationSuccess="locationSuccess" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-marker :position="{lng: 113.413436, lat:22.542274}" @click="infoWindowOpen">
            <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">详细地址：xxxxx</bm-info-window>
            <bm-label content="客户A" :labelStyle="{color: 'red', fontSize : '15px'}" :offset="{width: -35, height: 30}" />
        </bm-marker>
        <bm-control :offset="{width: '10px', height: '10px'}">
            <bm-auto-complete v-model="keyword" :location="center" :sugStyle="{zIndex: 1}">
                <input class="searchBox" type="text" style="width:300px;" placeholder="请输入地名关键字" />
            </bm-auto-complete>
        </bm-control>
        <bm-local-search :keyword="keyword" :autoViewport="true" :selectFirstResult="true" :panel="false" :auto-viewport="true"></bm-local-search>
    </baidu-map>
</template>
<script>
    import {
        BaiduMap, BmLabel, BmMarker,
        BmInfoWindow, BmGeolocation, BmControl,
        BmAutoComplete, BmLocalSearch
    } from 'vue-baidu-map'
    export default {
        components: {
            BaiduMap,
            BmLabel,
            BmMarker,
            BmInfoWindow,
            BmGeolocation,
            BmControl,
            BmAutoComplete,
            BmLocalSearch
        },
        data() {
            return {
                center: '中山市',
                zoom: 13,
                show: false,
                keyword: ''
            }
        },
        methods: {
            handler({ BMap, map }) {
                // 初始化行为
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
                            offset: new BMap.Size(10, 25), // 指定定位位置  
                            imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移  
                        });
                        var mk = new BMap.Marker(r.point, { icon: myIcon });
                        map.addOverlay(mk);
                        map.panTo(r.point);
                    }
                    else {
                        alert('failed' + this.getStatus());
                    }
                }, { enableHighAccuracy: true })
                //关于状态码
                //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
                //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
                //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
                //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
                //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
                //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
                //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
                //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
                //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
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

    .searchBox {
        margin: 5px;
        box-sizing: border-box;
        border: 1px solid #36c;
        box-shadow: inset 0 0 2px silver;
        background: #fff;
        height: 2rem;
        line-height: 2rem;
        padding-left: 3px;
    }
</style>