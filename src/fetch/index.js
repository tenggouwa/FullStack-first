import axios from 'axios'
import api from './api'

// 公共参数配置
const instance = axios.create({
    baseURL: window.baseURL,
    timeout: 10000,
    headers: {
        'content-type': 'application/json'
    },
})
// 返回结果公共处理
instance.interceptors.response.use((res) => {
    if (!res) {
        return Promise.reject(res)
    }
    return res.data
}, error => Promise.reject(error))

// 创建单个请求
function createApi(config) {
    return (data) => {
        if (config.method === 'get') {
            return instance({
                ...config,
                params: {
                    ...data,
                }
            })
        }
        return instance({
            ...config,
            data: {
                ...data
            }
        })
    }
}
const apis = {}

Object.entries(api).forEach((item) => {
    apis[item[0]] = createApi(item[1])
})

export default apis
