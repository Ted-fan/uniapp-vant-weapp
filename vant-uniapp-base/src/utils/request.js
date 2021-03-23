// 封装微信请求
export function request({ url, method, data }) {
    const operationId = uni.getStorageSync('operationId');
    let httpHeaders = {
        "Content-Type": "application/json"
    }
    // 登录后在请求头中加用户Id
    if(operationId){
        httpHeaders['operationId'] = operationId
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: method,
            data: data,
            header: httpHeaders,
            success: function(res) {
                if (res.data) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            },
            fail: function(err) {
                reject(err)
            }
        })
    })
}

export default { request }
