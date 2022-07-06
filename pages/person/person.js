// pages/personal/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
        nickname:'',
        username:'',
        token:'',
        user:{}
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       
        // let _this=this
        // console.log(this.data.list)
        // console.log(this.data.list.data.data.token)
        
        // this.setData({
        //     username:this.data.list.data.data.username,
        //     token:this.data.list.data.data.token
        // })
        // console.log(_this.data.list.data.data.username)
        // wx.request({
        //     url: 'http://localhost:9090/user/username/'+this.data.list.data.data.username,
        //     method:'GET',
        //     data:{},
        //     header: {
        //         'content-type': 'application/json' ,
        //         'token':this.data.list.data.data.token// 默认值
        //     },
        //     success:function(res){
        //         console.log(res)
        //         _this.setData({
        //           user: res.data,
        //         })
  
        //     }
        //   })

    },
   
    fun1: function () {
        wx.clearStorage()
        console.log("11111")
        wx.redirectTo({
            url: '../login/index'
          })

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
        let _this = this
        
        
        if(typeof this.getTabBar == "function" && this.getTabBar()){
            this.getTabBar().setData({
                selected:2
            })
        }
    
        wx.getStorage({
            key:'res',
            success(res){
                 
                  _this.setData({
                      username:res.data.username,
                      nickname:res.data.nickname,
                      list:res.data,
                      token:res.data.token

                     
                  })
                  
                // console.log(token),
                // console.log(nickname),
                // console.log(username)

            }
            


        })

        // if(typeof res.data == 'undefined'){
        //     wx.redirectTo({
        //         url: '../login/index'
        //       })
        // }
      

       


       

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