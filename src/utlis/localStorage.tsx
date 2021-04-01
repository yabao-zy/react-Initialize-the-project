export function getKey(key: string): any {  //获取本地储存
    return new Promise((res, rej) => {
        let data
        try {
            data = localStorage.getItem(key)
            data = JSON.parse(data)
            res(data)
        } catch (error) {
            res('erro:缓存不是可用的数据类型')
        }
    })
}

export function setKey(key: string, value: any) {  //设置本地缓存
    let data
    try {
        data = JSON.stringify(value)
        localStorage.setItem(key, data)
        return data
    } catch (error) {
        console.log(error);
        return console.log('erro：错误的缓存设置类型');

    }
    localStorage.setItem(key, value)
}