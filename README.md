# 更新日志
## 2017.12.07 基础库更新（1.7.0）
* `A` 新增 组件 `<camera />` 开发工具上的调试支持 
* `U` 更新 API `WebSocket` 支持创建多条 WebSocket 连接 
* `U` 更新 API `wx.request` 支持发送和接收 ArrayBuffer 类型的数据 
* `U` 更新 API `wx.createCanvasContext` 的 draw 接口，回调通知渲染完成 
* `U` 更新 API `wx.canvasToTempFilePath` 支持设置输出图片格式与质量参数 
* `U` 更新 API `wx.createInnerAudioContext` 去掉切到前台时恢复播放的策略
* `U` 更新 组件 `<slider />` 增加 bindchanging 事件 
* `U` 更新 组件 `<progress />` 增加 active-mode 属性 
* `U` 更新 组件 `<video />` 在 timeupdate 事件回调中新增返回 duration 参数 
* `U` 更新 组件 `<video />` 新增 direction 参数，支持全屏时设置画面方向 
* `U` 更新 组件 `<scroll-view />` 优化 scrolltoupper 与 scrolltolower 事件的触发频率
* `U` 更新 组件 `<cover-view />` 优化在安卓下的渲染性能
* `F` 修复 API `wx.createInnerAudioContext` 接口返回参数的时间单位不正确的问题
* `F` 修复 API `wx.hideLoading` 会把 wx.showToast 给隐藏掉的问题
* `F` 修复 API `wx.hideLoading` 一调用立即消失的问题 
* `F` 修复 API `wx.canvasToTempFilePath` 在 `<canvas />` 不可见时导出失败以及导致crash的问题 
* `F` 修复 API `wx.uploadFile` 文件格式的问题 
* `F` 修复 API `wx.getRecorderManager` 在 iOS 下设置最大时长10分钟失效的问题
* `F` 修复 API `wx.getRecorderManager` 在安卓下小程序退到后台时，将默认行为从停止录音调整为暂停录音
* `F` 修复 组件 `<input />` disabled 时字体样式无效的问题 
* `F` 修复 组件 `<navigator />` 快速点击时会新开两个页面的问题
* `F` 修复 组件 `<cover-view />` 在 iOS 下圆角半径的问题 
* `F` 修复 组件 `<cover-view />` 设置 text-align: center 在安卓上下也会居中的问题
* `F` 修复 组件 `<cover-image />` 总是显示在 `<cover-view />` 之上的问题
* `F` 修复 组件 `<audio /> `在播放结束的时候没有恢复背景音乐的问题
* `F` 修复 组件 `<picker />` 偶现需要点击两次才能收起的问题
* `F` 修复 组件 `<image />` mode 从 widthFix 改成其他值时高度没更新的问题
* `F` 修复 组件 `<scroll-view />` 滚动时出现闪动的问题
* `F` 修复 组件 `<video />` 在全屏后拉起系统控制面板时退出全屏的问题
* `F` 修复 trace 面板无法连接设备的问题
