// pages/webtask/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"ws://localhost:9090/imserver/zhang",
        msg:'',
        msgs:[]
    },

    urlInput(e){
        let url = e.detail.value;
        this.setData({
            url:url
        
        });
    }, 
    msgInput(e){
        let msg = e.detail.value;
        this.setData({
            msg:msg
        
        });
    },         

    connectSocket(){
        const _this = this;
       let socketTask = wx.connectSocket({
          url: _this.data.url
        });
        
        socketTask.onOpen(function(){
            console.log("socket连接成功！");
            _this.setData({
                msgs:[..._this.data.msgs,"连接成功"]
            })
        });

        socketTask.onMessage(function(res){
            console.log("接收到消息：",res);
            
            _this.setData({
                msgs:[..._this.data.msgs,"接收到消息"+res.data]
            })

        })
        
        _this.setData({
            socketTask : socketTask
        })
    },

    

    // sendMsg(){
    //     const _this = this;
    //     let msg = _this.data.msg;
    //     _this.data.socketTask.send({
    //         data: msg,
    //         success:function(){
    //             _this.setData({
    //                 msgs:[..._this.data.msgs,"发送消息："+ msg]

    //             });
    //         }


    //     })

    // },
    sendMsg(){
        const _this = this;
        let msg = {from: "zhang", to: "admin", text: _this.data.msg};
        _this.data.socketTask.send({
            data: JSON.stringify(msg),
            success:function(){
                _this.setData({
                    msgs:[..._this.data.msgs,"发送消息："+ _this.data.msg]

                });
            }


        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})