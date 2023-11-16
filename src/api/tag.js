import request from '@/utils/request'

export const GetTag = (data) => {
    return request({
        url: "/api/Tag/GetTag",
        method: "post",
        data,
    });
};
