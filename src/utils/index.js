import axios from 'axios';

import router from '../router';

//基本路径
const baseUrl = 'https://blog.qscmd.cn:4343'

//创建实例
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30 * 1000,//一分钟的超时
})

let loading;
//正在请求的次数
let requesCount = 0
//显示loading
const showLoading = () => {

}

//隐藏加载
const hideloading = () => {

}

//请求拦截器
instance.interceptors.request.use((config) => {
    showLoading();
    if (config.method === "POST") {
        config.data = JSON.stringify(config.data)
    }
    return config
}, (error) => {
    //请求错误
    Promise.reject(error)
}
)

//响应拦截器
instance.interceptors.response.use((response) => {
    hideloading();
    if (response.data.code == 404) {
        ElMessage.error(response.data.msg)
        router.push("/src/view/404/404.vue")
    }
    //响应成功
    else return response.data

}, (error) => {
    let message = ""
    if (error.response && error.response.status) {
        const status = error.response.status;
        switch (status) {
            case 400:
                message = "请求错误";
                break;
            case 401:
                message = "请求错误";
                break;
            case 404:
                message = "请求地址出错";
                break;
            case 408:
                message = "请求超时";
                break;
            case 500:
                message = "服务器内部错误!";
                break;
            case 501:
                message = "服务未实现!";
                break;
            case 502:
                message = "网关错误!";
                break;
            case 503:
                message = "服务不可用!";
                break;
            case 504:
                message = "网关超时!";
                break;
            case 505:
                message = "HTTP版本不受支持";
                break;
            default:
                message = "请求失败";
        }
        ElMessage.error(message);
        return Promise.reject(error)
    }
    return Promise.reject(error)
});

export default instance;