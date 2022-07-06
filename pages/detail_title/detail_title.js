// pages/detail_title/detail_title.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url1:'',
        title:'',
        articlelist:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this=this
        console.log(options,'options')
         this.setData({
        //   url1:options.url1,
           title:options.title
         })

        wx.request({
          url: 'http://localhost:8802/get_article',
          method:'GET',
          data:{
              kw:options.url1,
          },
          success:function(res){
              _this.setData({
                articlelist: res.data,
              })

          }
        }),
        console.log(this.articlelist)

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