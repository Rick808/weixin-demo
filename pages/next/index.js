// pages/next/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        inputVal: '', // 输入框初始化值
        inputVal1:'',
        inputVal2:'',
        formData:{
            name:'',
            disease:'',
            sort:'',
            history:'',
            time:'',
            suggest:''
        }
        
      },
    
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {},
    
    
      // input输入框的值
      handleInputChange(event) {
        console.log(event);
        const inputVal = event.detail.value;
        this.setData({
          inputVal: inputVal,
        });
      },
      handleInputChange1(event) {
        console.log(event);
        const inputVal1 = event.detail.value;
        this.setData({
          inputVal1: inputVal1,
        });
      },
      handleInputChange2(event) {
        console.log(event);
        const inputVal2 = event.detail.value;
        this.setData({
          inputVal2: inputVal2,
        });
      },
    
      // 表单提交
      handleSubmit() {
        let _this = this
        wx.getStorage({
          key:'res',
          success(res){
              wx.request({
                  method:'POST',
                  header:{"Content-Type": "application/json",
                          "token":res.data.token
              },
                  url: 'http://localhost:9090/disease', 
                  data:{
                    name: res.data.nickname,
                    disease:_this.data.list.ques,
                    time:_this.data.inputVal,
                    sort:_this.data.inputVal1,
                    history:_this.data.inputVal2,
                    suggest:_this.data.list.answ
                    
                  },
                  success (res) {
                    if(res.statusCode!=200){
                      wx.showToast({
                        title: res.data,
                        icon: 'error',
                        duration: 2000
                      })
                      
                    }else{
                      console.log(res.data)
                      wx.navigateTo({
                        url: '../record/record',
                      });
                      // _this.setData({
                      //     list:res.data.data.records

                      // })
                      
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
    })},


    formSubmit: function (e) {

        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        
        this.setData({
        
        allValue: e.detail.value
        
        })
        
    },
    bindPickerChange: function (e) {

        console.log('picker发送选择改变，携带值为', this.data.array[e.detail.value])
        
        this.setData({
        
        index: e.detail.value
        
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
        key: 'result',
        success (res) {
          console.log(res.data)
          _this.setData({
             list : res.data[0]
          })
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