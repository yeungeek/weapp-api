/**
 * 基础库 1.7.0 开始支持
 * WebSocket 任务，可通过 wx.connectSocket() 接口创建返回。
 * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/socket-task.html
 */
class SocketTask {

    /**
     * 通过 WebSocket 连接发送数据。
     * @param {String|ArrayBuffer} data     (必填)需要发送的内容
     * @param {Function} success            (选填)接口调用成功的回调函数                
     * @param {Function} fail               (选填)接口调用失败的回调函数    
     * @param {Function} complete           (选填)接口调用结束的回调函数（调用成功、失败都会执行） 
     */
    static send(data, success, fail, complete) { }

    /**
     * 关闭 WebSocket 连接。
     * @param {Number} code         (选填)一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     * @param {String} reason       (选填)一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     * @param {Function} success    (选填)接口调用成功的回调函数                
     * @param {Function} fail       (选填)接口调用失败的回调函数    
     * @param {Function} complete   (选填)接口调用结束的回调函数（调用成功、失败都会执行）   
     */
    static close(code, reason, success, fail, complete) { }

    /**
     * 监听 WebSocket 连接打开事件。
     * @param {Function} CALLBACK 
     */
    static onOpen(CALLBACK) { }

    /**
     * 监听 WebSocket 连接关闭事件。
     * @param {Function} CALLBACK 
     */
    static onClose(CALLBACK) { }

    /**
     * 监听 WebSocket 错误
     * @param {Function} CALLBACK 
     */
    static onError(CALLBACK) { }

    /**
     * 监听WebSocket接受到服务器的消息事件。
     * @param {Function} CALLBACK 
     */
    static onMessage(CALLBACK) { }
}