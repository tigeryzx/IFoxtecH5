<template>
    <div>
        <div v-for="ct in listGroup">
            <form-preview header-label="客户" :key="ct.id" :header-value="ct.name" :body-items="ct.list" :footer-buttons="buttons1" :name="ct.customerId"></form-preview>
            <br>
        </div>
    </div>
</template>
<script>
    import { FormPreview } from 'vux'
    export default {
        components: {
            FormPreview
        },
        data() {
            return {
                listGroup: [],
                buttons1: [{
                    style: 'warn',
                    text: '驳回',
                    onButtonClick: (customerId) => {
                        var _this = this;
                        this.$vux.confirm.show({
                            title: '提示',
                            content: '确认[驳回]吗？',
                            onConfirm() {
                                _this.$vux.toast.show({
                                    type: 'text',
                                    text: `驳回 ${customerId}`
                                });
                            }
                        });
                    }
                }, {
                    style: 'default',
                    text: '详情',
                    onButtonClick: (customerId) => {
                        this.$router.push({ path: '/customerInfo', params: { customerId: customerId } });
                    }
                }, {
                    style: 'primary',
                    text: '通过',
                    onButtonClick: (customerId) => {
                        var _this = this;
                        this.$vux.confirm.show({
                            title: '提示',
                            content: '确认[通过]吗？',
                            onConfirm() {
                                _this.$vux.toast.show({
                                    type: 'text',
                                    text: `通过 ${customerId}`
                                });
                            }
                        });
                    }
                }]
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next(vm => vm.setData());
        },
        methods: {
            setData() {
                var waitApplyCustomer = [];
                for (var i = 0; i < 6; i++) {
                    waitApplyCustomer.push({
                        customerId: i,
                        applyUserName: '黄小明',
                        name: '铭阳电器' + i,
                        customerType: '普通客户',
                        customerNo: 'MY001',
                        level: '★★★'
                    });
                }

                function getName(key) {
                    var store = {
                        name: '客户',
                        applyUserName: '申领人',
                        customerType: '客户性质',
                        customerNo: '客户编号',
                        level: '重要级别'
                    };
                    return store[key];
                }

                for (var i = 0; i < waitApplyCustomer.length; i++) {
                    var customer = waitApplyCustomer[i];
                    var ct = {
                        name: customer.name,
                        customerId: customer.customerId,
                        list: []
                    };

                    for (var key in customer) {
                        ct.list.push({
                            label: getName(key),
                            value: customer[key]
                        });
                    }
                    this.listGroup.push(ct);
                }
            }
        }
    }
</script>