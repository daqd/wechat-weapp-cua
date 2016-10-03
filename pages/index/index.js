//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    slider:{
      imgurl:['http://www.flycua.com/upload/2016/7/870735824673800394.jpg',
              'http://www.flycua.com/upload/2016/7/504038244149858302.jpg',
              'http://www.flycua.com/upload/2016/7/145502768571699261.jpg',
              'http://www.flycua.com/upload/2016/7/395299356166665645.jpg'
              ],
      indicatorDots: false,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../demo1/demo1'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
