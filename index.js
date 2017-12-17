import './page'

class wx {
    /**
     * 发起网络请求
     * @param {String} url                                  (必须)开发者服务器接口地址 
     * @param {Object|String|ArrayBuffer} data              (选填)请求的参数
     * @param {Object} header                               (选填)设置请求的 header，header 中不能设置 Referer
     * @param {String} method                               (选填)默认值:GET（需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     * @param {String} dataType                             (选填)默认值:json 如果设为json，会尝试对返回的数据做一次JSON.parse
     * @param {String} responseType                         (选填)默认值:text 设置响应的数据类型。合法值：text、arraybuffer, 1.7.0版本
     * @param {Function} success                            (选填)收到开发者服务成功返回的回调函数 
     * @param {Function} fail                               (选填)接口调用失败的回调函数
     * @param {Function} complete                           (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
     */
    static request(url, data, header, method, dataType, responseType, success, fail, complete) { }

    /**
     * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data
     * @param {String} url              (必填)开发者服务器 url 
     * @param {String} filePath         (必填)要上传文件资源的路径
     * @param {String} name             (必填)文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     * @param {Object} header           (选填)HTTP 请求 Header, header 中不能设置 Referer
     * @param {Object} formData         (选填)HTTP 请求中其他额外的 form data
     * @param {Function} success        (选填)接口调用成功的回调函数
     * @param {Function} fail           (选填)接口调用失败的回调函数
     * @param {Function} complete       (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxuploadfileobject
     */
    static uploadFile(url, filePath, name, header, formData, success, fail, complete) { }

    /**
     * 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径
     * @param {String} url              (必填)下载资源的 url
     * @param {Object} header           (选填)HTTP 请求 Header, header 中不能设置 Referer
     * @param {Function} success        (选填)下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     * @param {Function} fail           (选填)接口调用失败的回调函数
     * @param {Function} complete       (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxdownloadfileobject
     */
    static downloadFile(url, header, success, fail, complete) { }

    /**
     * 创建一个 WebSocket 连接
     * 基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.7.0 及以后，支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask
     * @param {String} url              (必填)开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
     * @param {Object} header           (选填)HTTP 请求 Header, header 中不能设置 Referer
     * @param {String} method           (选填)默认是GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     * @param {StringArray} protocols   (选填)子协议数组
     * @param {Function} success        (选填)接口调用成功的回调函数    
     * @param {Function} fail           (选填)接口调用失败的回调函数    
     * @param {Function} complete       (选填)接口调用结束的回调函数（调用成功、失败都会执行）   
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxconnectsocketobjec
     */
    static connectSocket(url, header, method, protocols, success, fail, complete) { }

    /**
     * 监听WebSocket连接打开事件
     * @param {Function} CALLBACK 
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketopencallback
     * @example
     * <pre><code>
     * wx.connectSocket({
     *  url: 'test.php'
     * })
     * wx.onSocketOpen(function(res) {
     *  console.log('WebSocket连接已打开！')
     * })
     * </code></pre>
     */
    static onSocketOpen(CALLBACK) { }

    /**
     * 监听WebSocket错误。
     * @param {Function} CALLBACK 
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxclosesocket
     */
    static onSocketError(CALLBACK) { }

    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送
     * @param {String|ArrayBuffer} data     (必填)需要发送的内容
     * @param {Function} success            (选填)接口调用成功的回调函数                
     * @param {Function} fail               (选填)接口调用失败的回调函数    
     * @param {Function} complete           (选填)接口调用结束的回调函数（调用成功、失败都会执行）   
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxsendsocketmessageobject
     */
    static sendSocketMessage(data, success, fail, complete) { }

    /**
     * 监听WebSocket接受到服务器的消息事件。
     * @param {Function} CALLBACK 
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketmessagecallback
     */
    static onSocketMessage(CALLBACK) { }

    /**
     * 关闭 WebSocket 连接。
     * @param {Number} code         (选填)一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     * @param {String} reason       (选填)一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     * @param {Function} success    (选填)接口调用成功的回调函数                
     * @param {Function} fail       (选填)接口调用失败的回调函数    
     * @param {Function} complete   (选填)接口调用结束的回调函数（调用成功、失败都会执行）   
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxclosesocket
     */
    static closeSocket(code, reason, success, fail, complete) { }

    /**
     * 监听WebSocket关闭。
     * 基础库 1.7.0 开始支持 返回值
     * @param {Function} CALLBACK 
     * @returns SocketTask
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketclosecallback
     */
    static onSocketClose(CALLBACK) { }

    /**
     * 从本地相册选择图片或使用相机拍照
     * 注：文件的临时路径，在小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 wx.saveFile，在小程序下次启动时才能访问得到
     * @param {Number} count                (选填)最多可以选择的图片张数，默认9
     * @param {StringArray} sizeType        (选填)original 原图，compressed 压缩图，默认二者都有
     * @param {StringArray} sourceType      (选填)album 从相册选图，camera 使用相机，默认二者都有
     * @param {*} success                   (必填)接口调用成功的回调函数                
     * @param {*} fail                      (选填)接口调用失败的回调函数    
     * @param {*} complete                  (选填)接口调用结束的回调函数（调用成功、失败都会执行）   
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxchooseimageobject
     * @example
     * <pre><code>
     * wx.chooseImage({
     *   count: 1, // 默认9
     *   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
     *   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
     *   success: function (res) {
     *     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
     *     var tempFilePaths = res.tempFilePaths
     *   }
     * })
     * </code></pre>
     */
    static chooseImage(count, sizeType, sourceType, success, fail, complete) { }

    /**
     * 预览图片
     * @param {String} current      (选填)当前显示图片的链接，不填则默认为 urls 的第一张
     * @param {StringArray} urls    (必填)需要预览的图片链接列表
     * @param {*} success           (选填)接口调用成功的回调函数                
     * @param {*} fail              (选填)接口调用失败的回调函数    
     * @param {*} complete          (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxpreviewimageobject
     */
    static previewImage(current, urls, success, fail, complete) { }

    /**
     * 获取图片信息
     * @param {String} src          (必填)图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     * @param {*} success           (选填)接口调用成功的回调函数                
     * @param {*} fail              (选填)接口调用失败的回调函数    
     * @param {*} complete          (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxgetimageinfoobject
     */
    static getImageInfo(src, success, fail, complete) { }

    /**
     * 保存图片到系统相册。需要用户授权 scope.writePhotosAlbum
     * 基础库 1.2.0 开始支持
     * @param {String} filePath     (必填)图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
     * @param {*} success           (选填)接口调用成功的回调函数                
     * @param {*} fail              (选填)接口调用失败的回调函数    
     * @param {*} complete          (选填)接口调用结束的回调函数（调用成功、失败都会执行）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxsaveimagetophotosalbumobject
     */
    static saveImageToPhotosAlbum(filePath, success, fail, complete) { }

    
}