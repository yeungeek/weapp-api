class recorderManager {
    /**
     * 开始录音
     * @param {Object} options 
     * <pre><code>
     *  duration            Number   (选填)指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
     *  sampleRate          Number   (选填)采样率，有效值 8000/16000/44100
     *  numberOfChannels    Number	 (选填)录音通道数，有效值 1/2
     *  encodeBitRate	    Number	 (选填)编码码率，有效值见下表格
     *  format	            String	 (选填)音频格式，有效值 aac/mp3
     *  frameSize	        Number	 (选填)指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
     * </code></pre>
     */
    static start(options) { }

    /**
     * 暂停录音
     */
    static pause() { }
    /**
     * 继续录音
     */
    static resume() { }
    /**
     * 停止录音
     */
    static stop() { }

    /**
     * 录音开始事件
     * @param {Function} callback 
     */
    static onStart(callback) { }

    /**
     * 录音暂停事件
     * @param {Function} callback 
     */
    static onPause(callback) { }

    /**
     * 录音停止事件，会回调文件地址
     * @param {Function} callback 
     * <pre><code>
     *  tempFilePath   String   录音文件的临时路径
     * </code></pre>
     */
    static onStop(callback) { }

    /**
     * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
     * @param {Function} callback 
     * <pre><code>
     *  frameBuffer   ArrayBuffer   录音分片结果数据
     *  isLastFrame   Boolean       当前帧是否正常录音结束前的最后一帧
     * </code></pre>
     */
    static onFrameRecorded(callback) { }

    /**
     * 录音错误事件, 会回调错误信息
     * @param {Function} callback 
     * <pre><code>
     *  errMsg   String   错误信息
     * </code></pre>
     */
    static onError(callback) { }
}