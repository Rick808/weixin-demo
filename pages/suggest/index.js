// pages/suggest/index.js
Page({

    data: {
        orderNote: '',//订单备注

        
        inputVal: "",
      
      },  
    handleInputChange(event) {
        console.log(event);
        const inputVal = event.detail.value;
        this.setData({
          inputVal: inputVal,
        });
      },
      go: function () {
        wx.navigateTo({
            url: '../next/index',
          })
    },

      
    bindTextAreaBlur: function(e) {
	  this.setData({
	  inputVal:e.detail.value
    }) 
    console.log(this.data.inputVal)
    }, 
    suggest: function(){
       
        
              wx.navigateTo({
                  url: '../next/index'
              });
                // _this.setData({
                //   resultlist: res.data
                // })
  


    },
    searchMovie: function (e) {
      let _this=this
      console.log(e.detail.value)
      wx.request({
        url: 'http://localhost:8802/get_user',
        method:'GET',
        data:{
            kw:e.detail.value
        },
        success (res) {
         
            console.log(res.data)
            
             wx.setStorage({
               key:"result",
               data:res.data

             })


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
        
        
        // wx.getStorage({
        //     key:'res',
        //     success(res){
                 
        //           _this.setData({
                    
        //               nickname:res.data.nickname,
        //               list:res.data,
        //               token:res.data.token

                     
        //           })
                  
        //         // console.log(token),
        //         // console.log(nickname),
        //         // console.log(username)

        //     }
            


        // })
        // wx.request({
        //   url: 'http://localhost:8802/get_user',
        //   method:'GET',
        //   data:{
        //       kw:inputVal
        //   },
        //   success:function(res){

        //     wx.setStorage({
        //       key:"result",
        //       data:res.data.data

        //     })

        //       // _this.setData({
        //       //   resultlist: res.data
        //       // })

        //   }

        // })
        


    },
  //   searchMovie: function (e) {
  //     let _this=this
  //     console.log(e.detail.value)
  //     wx.request({
  //       url: 'http://localhost:8802/get_user',
  //       method:'GET',
  //       data:{
  //           kw:e.detail.value
  //       },
  //       success:function(res){
  //           _this.setData({
  //             resultlist: res.data
  //           })

  //       }

  //     })
  // },
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