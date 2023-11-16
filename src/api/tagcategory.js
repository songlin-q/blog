import request from '@/utils/request'
//获取主页分类
export const GetCategory = (data) => {
    return request({
        url: "/api/WebCategory/GetCategoryFun",
        method: "post",
        data,
    });
};
