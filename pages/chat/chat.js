const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';
  msgList = [{
      speaker: 'server',
      contentType: 'text',
      content: '请问你需要咨询什么呢？请具体描述你的问题。'
    },
    {
      speaker: 'customer',
      contentType: 'text',
      content: '接入成功...'
    }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    username:'',
    nickname:'',
    url:'ws://localhost:9090/imserver/'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this;
    wx.getStorage({
      key:'res',
      success(res){
        console.log(res)
        _this.setData({
          username:_this.data.url + res.data.username
        })
        console.log(_this.data.username)
      let socketTask = wx.connectSocket({
        url: _this.data.username
      });
      
      socketTask.onOpen(function(){
          console.log("socket连接成功！");
          _this.setData({
              msgs:[..._this.data.msgs,"连接成功"]
          })
      });

      socketTask.onMessage(function(res){
          console.log("接收到消息：",JSON.parse(res.data));
          var resp = JSON.parse(res.data);
          console.log(resp.text);
          msgList.push({
            speaker: 'server',
            contentType: 'text',
            content: resp.text
          })
          _this.setData({
            msgList,
            inputVal
          });
          
          // _this.setData({
          //     msgs:[..._this.data.msgs,"接收到消息"+res.data]
          // })

      })
      
      _this.setData({
          socketTask : socketTask
      })   
            // _this.setData({
            //     username:res.data.username,
            //     nickname:res.data.nickname,
            //     list:res.data,
            //     token:res.data.token 
            // })
          // console.log(token),
          // console.log(nickname),
          // console.log(username)
      }
  })

      
  
    initData(this);
    this.setData({
      cusHeadIcon: app.globalData.userInfo.avatarUrl,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 获取聚焦
   */
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function(e) {
        const _this = this;
        let msg = {from: "zhang", to: "admin", text: e.detail.value};
        _this.data.socketTask.send({
            data: JSON.stringify(msg),
            success:function(){
              console.log("1111111")
                // _this.setData({
                //     msgs:[..._this.data.msgs,"发送消息："+ _this.data.msg]

                // });
            }


        })
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });


  },

  /**
   * 退回上一页
   */
  toBackClick: function() {
    wx.navigateBack({})
  }

})
