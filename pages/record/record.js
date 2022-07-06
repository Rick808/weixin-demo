// pages/record/record.js
Page({
    

    /**
     * 页面的初始数据
     */
    data: {
        theme:'light',
        token:'',
        nickname:'',
        list:[]

    },
    turnindex: function () {
      console.log('11111')
      wx.reLaunch({
          url: '/pages/index/index',
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
        let _this=this

        wx.getStorage({
            key:'res',
            success(res){
                wx.request({
                    method:'GET',
                    header:{"Content-Type": "application/json",
                            "token":res.data.token
                },
                    url: 'http://localhost:9090/disease/page', 
                    data:{
                      pageNum:1,
                      pageSize:10,
                      name:res.data.nickname
                      
                    },
                    success (res) {
                      if(res.statusCode!=200){
                        wx.showToast({
                          title: res.data,
                          icon: 'error',
                          duration: 2000
                        })
                        
                      }else{
                        console.log(res.data.data.records)
                        _this.setData({
                            list:res.data.data.records

                        })
                        
                        //  wx.setStorage({
                        //    key:"res",
                        //    data:res.data.data
            
                        //  })
                        //  wx.switchTab({
                        //      url: '../person/person'
                        //  });
                      //   wx.setStorage({
                      //     key:"zxToken",
                      //     data:res.data
                      //   })
                      //  _this.getInfo(res.data)
                      }
                    }
                  })
                 
                //   _this.setData({
                    
                     
                //       nickname:res.data.nickname,
                //       token:res.data.token

                     
                //   })
                  
                
                // console.log(nickname),
                // console.log(username)

            }
            


        })

        

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