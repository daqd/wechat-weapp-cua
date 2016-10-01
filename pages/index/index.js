//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    //loading
    loadingHidden:false,

    //单程往返状态
    isSingle:true,
    curBackgroundColor:'#f63939',
    normalBackgroundColor:'#c9c9c9',
    curFrontColor:'#FFF',
    normalFrontColor:'#505050',
    curBorderColor:'#f63939',
    normalBorderColr:'#999999',
    
    //slider配置
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
    },

    //乘机人数量选择参数
    actionSheetHidden: true,
    isSetPassengerType:'',
    adultCount:2,
    childCount:3,
    babyCount:1,
    actionSheetItems: ['0','1', '2', '3', '4','5'],

    //模块入口数据
    moduleEntry:{
      mycua:{
        moudleClassName:'mycua',
        moudleNameZH:'我的联行'
      },
      book:{
        moudleClassName:'book',
        moudleNameZH:'机票预订'
      },
      addservice:{
        moudleClassName:'addService',
        moudleNameZH:'增值服务'
      },
      dynamic:{
        moudleClassName:'dynamic',
        moudleNameZH:'航班动态'
      },
      lovetravel:{
        moudleClassName:'lovetravel',
        moudleNameZH:'爱旅游'
      }
    }
  },
  //切换单程往返
  changeSingleMultiple:function(e){
    console.log(e);
    if(e.currentTarget.dataset.flighttype=="multiple"){
      this.setData({
        isSingle: false
      })
    }else{
      this.setData({
        isSingle: true
      })
    }

  },
  //乘机人数量选择函数处理
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      isSetPassengerType:e.currentTarget.dataset.passengertype
    })
    //console.log(this.data.isSetPassengerType);
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.ctionSheetHidden
    })
  },
  bindItemTap:function(e){
    //console.log(this.data.isSetPassengerType)
    if(this.data.isSetPassengerType=='adultCount'){
      this.setData({
        adultCount:e.currentTarget.dataset.name,
        actionSheetHidden: !this.data.ctionSheetHidden
      })
    }else if(this.data.isSetPassengerType=='childCount'){
      this.setData({
        childCount:e.currentTarget.dataset.name,
        actionSheetHidden: !this.data.ctionSheetHidden
      })
    }else{
      this.setData({
        babyCount:e.currentTarget.dataset.name,
        actionSheetHidden: !this.data.ctionSheetHidden
      })
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
  },
  onReady:function(){
    //去除loading
    this.setData({
      loadingHidden:!this.data.loadingHidden
    })  
  }
})
