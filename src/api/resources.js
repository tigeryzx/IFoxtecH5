import axios from 'axios'

// http://blog.csdn.net/fantian001/article/details/70193938?locationNum=5&fps=1

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const ResourceStore = axios.create({
    baseURL: 'http://localhost:3651/api/',
    timeout: 5000
})

//添加一个请求拦截器
ResourceStore.interceptors.request.use(function (config) {
    //在请求发送之前做一些事
    return config;
}, function (error) {
    //当出现请求错误时做一些事
    return Promise.reject(error);
});

//添加一个返回拦截器
ResourceStore.interceptors.response.use(function (response) {
    //对返回的数据进行一些处理
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default ResourceStore