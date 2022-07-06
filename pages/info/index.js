// pages/info/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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
                    url: 'http://localhost:9090/user/username/'+res.data.username, 
                    data:{},
                    success (res) {
                      if(res.statusCode!=200){
                        wx.showToast({
                          title: res.data,
                          icon: 'error',
                          duration: 2000
                        })
                        
                      }else{
                        console.log(res.data.data)
                         _this.setData({
                             nickname:res.data.data.nickname,
                             email:res.data.data.email,
                             phone:res.data.data.phone,
                             address:res.data.data.address,

  
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
          // var t2 = "formData.time";
          //   this.setData({
          //     [t2]: 22222,
          //   })
  
  
  
          // console.log(
  
          //   this.data.inputVal,
          //   this.data.inputVal1,
          //   this.data.inputVal2
          // ); // true "boy" "itclanCoder" 30 "123"
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