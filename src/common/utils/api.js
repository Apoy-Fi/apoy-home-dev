import axios from "axios"
import dayjs from "dayjs";
import aes from "./aes";

axios.defaults.timeout = 30000 //全局超时时间

const RETRY = 5
const RETRY_DELAY = 300

/**
 * 请求拦截
 * 设置自定义请求头字段
 */
axios.interceptors.request.use(config => {

    //随机数范围
    const m = 65
    const n = 45

    const now = dayjs().valueOf()
    const random = Math.floor(Math.random() * (m - n) + n)
    const address = '0x0000000000000000000000000000000000000000'

    //范围内随机数|地址|随机数|时间戳|随机数
    let str = random + '|' + address + '|' + random + '|' + now + '|' + random
    let key = aes.encrypt(process.env.VUE_APP_API_PASSWD, str)

    config.headers["key"] = key;

    return config;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

// axios.interceptors.response.use(null, (error) => {
//     let config = error.config;

//     config.retry = RETRY;
//     config.retryDelay = RETRY_DELAY;

//     if (!config || !config.retry) return Promise.reject(error);

//     config.__retryCount = config.__retryCount || 0;

//     if (config.__retryCount >= config.retry) {
//         return Promise.reject(error);
//     }
//     config.__retryCount += 1;

//     let backoff = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, config.retryDelay || 1);
//     });
    
//     return backoff.then(function () {
//         return axios(config);
//     });
// })

export default axios