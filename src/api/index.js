import ResourceStore from './resources'

export default {
    getCustomer(payload) {
        return ResourceStore.get('http://localhost:3651/api/customer', payload);
    },
    getContacts(payload) {
        return ResourceStore.get('http://localhost:3651/api/contacts', payload);
    },
    getContactsInfo(payload) {
        return ResourceStore.get('http://localhost:3651/api/contacts/' + payload);
    },
    getNotify(payload) {
        return ResourceStore.get('http://localhost:3651/api/Notify', payload);
    },
}