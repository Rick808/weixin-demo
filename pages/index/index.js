// index.js
Page({
    /**
   * 页面的初始数据
   */
  data: {
    num:0,
    content:'',
    articlelist:[],
    swiperList: [{
        url: '/picture/1.jpg'
      }, {
        url: '/picture/2.jpg'
      }, {
        url: '/picture/6.png'
      }, {
        url: '/picture/8.png'
      }, {
        url: '/picture/5.jpg'
      }],
   
    
 },
 swipclick: function (e) {
  wx.navigateTo({
    url: '../tip/index',
  })
},
 clickList:function(e){
    console.log(e)
    let num = e.target.id
    console.log(num)
    let content = this.data.message[num].text
    console.log(content.text)
     this.setData({
         num:num,
         content:content
     })
     console.log(this) 
 },
 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function (options) {

    let _this=this

     wx.request({
       url: 'http://localhost:8802/get_String',
       data: '',
       method: 'GET',
       header:{
           'content-type':'application/json'
       },
       success(res){
            console.log(res.data)
        _this.setData({
            articlelist:res.data,
            
            
        })
       }


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
