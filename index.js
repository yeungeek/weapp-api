import './page'

class wx {
    /**
     * @param {String} url                                  (必须)开发者服务器接口地址
     * @param {Object|String|ArrayBuffer} data              (选填)请求的参数
     * @param {Object} header                               (选填)设置请求的 header，header 中不能设置 Referer
     * @param {String} method                               (选填)默认值:GET（需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     * @param {String} dataType                             (选填)默认值:json 如果设为json，会尝试对返回的数据做一次JSON.parse
     * @param {String} responseType                         (选填)默认值:text 设置响应的数据类型。合法值：text、arraybuffer, 1.7.0版本
     * @param {Function(data,statusCode,header)} success    (选填)收到开发者服务成功返回的回调函数 
     * @param {Function} fail                               (选填)接口调用失败的回调函数
     * @param {Function} complete                           (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @description https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
     */
    static request({ url, data, header, method, dataType, responseType, success, fail, complete }) { }
}