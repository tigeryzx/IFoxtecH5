import ResourceStore from './resources'

export default {
    getCustomer(payload) {
        return ResourceStore.post('/customer', payload);
    }
}