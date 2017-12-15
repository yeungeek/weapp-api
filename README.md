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
## 更新概述 2017.10.13
* 新增相机组件，支持自定义拍照及录像界面
* 录音功能优化，支持更多格式和操作方式，支持自定义录音时长、采样率码* 率，支持边录边传
* 小程序内音频播放功能升级，支持更多格式和操作方式
* video、map及canvas功能持续优化，cover-view支持简单的动画效果
* onLaunch 及 onShow 时部分跳转小程序场景增加返回 * referrerInfo.appId
## 基础库更新 (1.6.0)
* `A` 新增 API `checkIsSoterEnrolledInDevice`  判断设备是否录入指纹等生物信息的接口 
* `A` 新增 API `getRecorderManager` 获取全局唯一的录音管理器 
* `A` 新增 API `createInnerAudioContext` 创建并返回内部 audio 上下文 innerAudioContext 对象 
* `A` 新增 组件 `<camera />` 相机组件 
* `U` 更新 API `startRecord` 增加 duration 参数用于设置最长录音时间 
* `U` 更新 API `chooseVideo` 增加 compressed 参数，用于设置是否压缩用户选择的视频 
* `U` 更新 组件 `<map /> `polyline 支持 arrowIconPath 参数，用于更换箭头图标 
* `U` 更新 组件 `<map /> `marker 的 label 参数增加样式设置 
* `U` 更新 组件 `<map /> `新增渲染更新完成事件 bindupdated 
* `U` 更新 组件 `<video />` 支持 pageGesture 属性，控制非全屏模式下是否开启声音和亮度手势 
* `U` 更新 组件 `<video />` 在 bindfullscreenchange 的 detail 中返回横竖屏信息 
* `U` 更新 组件 `<video /> `支持 initial-time 属性用于指定初始化播放的位置 
* `U` 更新 组件 `<canvas />` 支持 clip 方法实现剪切 
* `U` 更新 组件 `<canvas /> `支持 setLineDash 方法实现设置虚线样式 
* `U` 更新 组件 `<cover-view />` 支持动画 
* `U` 更新 组件 `<cover-image />` iconPath 支持网络图片 
* `U` 更新 组件 `<textarea />` 支持 show-confirm-bar，用于设置是否显示键盘上方带有「完成」按钮那一栏 
* `U` 更新 组件 `<textarea />` 支持在 bindblur 回调中返回 cursor，收起键盘时返回光标位置 
* `U` 更新 组件 `<swiper />` 性能优化，支持隐藏当前页、前后页之外的页面，避免复杂页面切换卡顿
* `U` 更新 框架 `referrerInfo.appId onLaunch `及 `onShow` 时部分跳转小程序场景增加返回 referrerInfo.appId 
* `U` 更新 调试 `vConsole WXML `面板支持显示 Computed Styles
* `F` 修复 API `openDocument` 在 iOS 下打开带密码的 PDF 文件时无法输入密码的问题
* `F` 修复 API `openDocument` 在 iOS 下打开 Excel 无法切换 tab 的问题
* `F` 修复 API `authorize scope` 为数组时，三端回调行为不一致问题
* `F` 修复 API `showActionSheet cancel` 时会同时回调 success 和 fail 问题
* `F` 修复 API `getSystemInfo` 在开发者工具上未返回 brand 字段的问题
* `F` 修复 API `chooseInvoiceTitle` 在开发者工具上未返回 invoiceTitleInfo 字段的问题
* `F` 修复 API `pageScrollTo` 在开发者工具上失效问题
* `F` 修复 API `startPullDownRefresh` 在开发者工具上失效问题
* `F` 修复 API `getFileInfo `在开发者工具上只回调 complete 问题
* `F` 修复 API `startBluetoothDevicesDiscovery` 在开发者工具上返回值和真机不一致问题
* `F` 修复 API `onBluetoothDeviceFound` 在开发者工具 devices 错误返回二维数组问题
* `F` 修复 API `playBackgroundAudio` 在 iOS 下失败报 fail no current music，但音乐正常播放问题
* `F` 修复 API `request `被 abort 后仍然占据并发数问题
* `F` 修复 API `createAnimation backgroundColor `无法使用渐变背景色问题
* `F` 修复 API `setNavigationBarColor` 在 iOS 下会导致导航栏 title 和按钮变成透明问题
* `F` 修复 组件 `<image /> ` 在 devtools 提示 404 但不影响显示问题
* `F` 修复 组件 `<map />` 在初始化时在各端事件派发不一致问题
* `F` 修复 组件 `<map />` markers 的 callout 没有限制 borderRadius 取值范围问题
* `F` 修复 组件 `<map /> `markers 的 title 和 callout 在各端表现不一致问题
* `F` 修复 组件 `<map />` 在 Android 下 marker 的 callout 下方无三角形问题
* `F` 修复 组件 `<input />` 在开发者工具上，bindinput 派发的事件对象 timestamp 不为 timeStamp 的问题
* `F` 修复 组件 `<canvas />` longtap 事件在工具上触发类型为 binglongtap 的问题，应为 longtap
* `F` 修复 组件 `<video />` 在 iOS 下在全屏播放时会出现一部分下一个视频的内容的问题
* `F` 修复 组件 `<video />` 在开发者工具点击播放后 controls 无法进行控制问题
* `F` 修复 组件 `<input />` 在 Android 下输入汉字时，bindinput 会带上当前正在输入的英文字母问题
* `F` 修复 组件 `<textarea />` 在 Android 下使用 setData 设置 value，auto-height 失效问题
* `F` 修复 组件 `<picker /> `在 Android 下省市区选择器缺少中山市、东莞市地域信息
* `F` 修复 组件 `<picker />` 在 Android 下 year 小于 1970 不生效问题
* `F` 修复 组件 `<textarea />` 两个 textarea 连续切换未触发第一个 textarea 的 blur 问题
* `F` 修复 组件 `<swiper /> `只展示其中一部分的 bug 
* `F` 修复 框架 iOS8 下 Promise 不会执行 resolve 的问题