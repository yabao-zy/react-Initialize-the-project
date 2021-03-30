

import axios from "axios";
// import MD5 from 'react-native-md5'
import urlList from './url'
let httpobj = {}  //http对象
axios.defaults.timeout = 100000;

axios.defaults.baseURL = ` http://127.0.0.1:3000`;

/**
 * http request 拦截器
 */

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODE5Mng2dXo2amtrN2pmb215anR4Y3JmemVmM3B3Iiwic2Vzc2lvbl9pZCI6IjgxOTJmNTlxM2NuamppOHJ4ZW53YTdwNjdvemE4ZSIsInBsYXRmb3JtIjoiY2N0aXBfdGVsZWdyYW1fYXBwIiwicm9sZXMiOiIiLCJwcm9wcyI6eyJib3RJZCI6IjE2ODc5MDYwOTMifSwiZXhwIjoxNjE3ODcwNzQzLCJpYXQiOjE2MTUyNzg3NDN9.Xz9sanaSqnqEFY7IJvnGMfRQUUR2DC2n7edY7SazPy0'
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type": "application/json",
            'token': 'Authorization=' + token,
        };
        // config.headers.Cookie = token
        let Timestamp = new Date().getTime()
        config.headers['X-ABC-Ai'] = 'mobile'
        config.headers['X-ABC-Timestamp'] = Timestamp
        // config.headers['X-ABC-Sign'] = EN_MD5(config.url, Timestamp)

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        if (response.data.errCode === 2) {
            console.log("过期");
        }
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
    }
);

// GET方法封装
async function getAxios(url:string, params:object)  {
    let data = await axios.get(url, { params })
    return data.data
}
// POST方法封装
async function postAxios(url, params) {
    let data = await axios.post(url,  params )
    return data.data

}

// DELETE方法封装
async function deleteAxios(url, params) {
    let data = await axios.get(url+'/'+params)
    return data.data

}
/**
 *  请求头加密方法 
 * @param {*} path  路径  
 * @param {*} Timestamp 时间戳
 * @returns 返回字符串
 */
// function EN_MD5(path = '', Timestamp) {
//     let Ai = 'mobile'
//     let key = 'sjye8bx1234hd'
//     let md5Word = `X-ABC-Ai=${Ai}&X-ABC-Timestamp=${Timestamp}&path=${path}&key=${key}`
//     md5Word = MD5.hex_md5(md5Word)
//     return md5Word
// }

for (let i in urlList) {
    httpobj[i] = async function (parmes,) {
        if (urlList[i][0] == 'POST') {
            return await postAxios(urlList[i][1], parmes)
        }
        if (urlList[i][0] == 'GET') {
            return await getAxios(urlList[i][1], parmes)
        }
        if (urlList[i][0] == 'DELETE') {
            return await deleteAxios(urlList[i][1], parmes)
        }
    }
}
module.exports = httpobj

