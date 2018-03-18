import ResourceStore from './resources'

export default {
    getCustomer(payload) {
        return ResourceStore.post('http://localhost:3651/api/customer', payload);
    },
    getContactsInfo(payload) {
        return ResourceStore.get('http://localhost:3651/api/contacts/' + payload);
    },
}