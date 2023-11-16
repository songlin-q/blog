import instance from './index'

const request = ({ method, url, data, config }) => {
    //把大写转换成小写
    method = method.toLowerCase();
    if (method == "post") {
        return instance.post(url, data, { ...config });
    } else if (method == "get") {
        return instance.get(url, {
            params: data,
            ...config,
        });
    } else if (method == "delete") {
        return instance.delete(url, {
            params: data,
            ...config,
        });
    } else if (method == "put") {
        return instance.put(url, data, { ...config });
    } else {
        console.error("未知的方法：" + method);
        return false;
    }
};
export default request;