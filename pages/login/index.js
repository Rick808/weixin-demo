// pages/login/index.js

Page({ 
    data: { 
      formData:{
        qq:'',
        psa:'',
        
      },

      list:{}
    }, 
   
  // 获取输入账号 
  //   phoneInput :function (e) { 
  //     this.setData({ 
  //       username:e.detail.value 
  //     }) 
  //   }, 
   
  // // 获取输入密码 
  //   passwordInput :function (e) { 
  //     this.setData({ 
  //       password:e.detail.value 
  //     })   
  //   }, 
  formInputChange(e){
    // console.log(e)
    this.data.formData[e.currentTarget.dataset.field] = e.detail.value
    this.setData({
      formData:this.data.formData
    })
  },
  loginFun(){
    if(!this.data.formData.qq||!this.data.formData.psa){
      wx.showToast({
        title: '信息不完整',
        icon: 'error',
        duration: 2000
      })
    }else{
      let _this = this
      wx.request({
        method:'POST',
        header:{"Content-Type": "application/json"},
        url: 'http://localhost:9090/user/login', 
        data:{
          username:this.data.formData.qq,
          password:this.data.formData.psa
          
        },
        success (res) {
          if(res.statusCode!=200){
            wx.showToast({
              title: res.data,
              icon: 'error',
              duration: 2000
            })
            
          }else{
            console.log(res.data.data)
            
             wx.setStorage({
               key:"res",
               data:res.data.data

             })
             wx.switchTab({
                 url: '../person/person'
             });
          //   wx.setStorage({
          //     key:"zxToken",
          //     data:res.data
          //   })
          //  _this.getInfo(res.data)
          }
        }
      })
    }
  },
  // 登录 
    login: function () { 
      if(username == 0 || password == 
  0){ 
        wx.showToast({   
          title: '账号或密码不能为空',   
          icon: 'none',   
          duration: 2000    
        })   
  }else { 
        // console.log(this.data.username)

      wx.request({
        url: 'http://localhost:9090/user/login',
        data: {
            username: username,
            password: password
        },
        method: 'POST',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success (res) {
            console.log(res.data)
          
            wx.setStorageSync('res', res),
            wx.switchTab({
                url: '../person/person'
              });

            
          }
      })
    // 这里修改成跳转的页面 
        // wx.showToast({   
        //   title: '登录成功',   
        //   icon: 'success',   
        //   duration: 2000   
        // })  
        // 跳转至index页面
       // wx.redirectTo({
       //   url: '../index/index'
       //})
      }   
    } 
  }) 
