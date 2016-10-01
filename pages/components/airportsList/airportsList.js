//获取应用实例
var app = getApp();
Page({
    data:{
      
    },
    onLoad: function () {
    //console.log('onLoad')
    var that = this

    //请求城市列表数据
    wx.request({
        url: 'http://m.flycua.com/h5/book/queryAirport.json',
        method: 'GET',
        data: {},
        header: {
            'Accept': 'application/json'
        },
        success: function(res) {
           // console.log(res.data)
           AirData = res.data.airports;
           //console.log(AirData);
           //定义存储对象
            var letterObj = {
                "A":[],
                "B":[],
                "C":[],
                "D":[],
                "E":[],
                "F":[],
                "G":[],
                "H":[],
                "I":[],
                "J":[],
                "K":[],
                "L":[],
                "M":[],
                "N":[],
                "O":[],
                "P":[],
                "Q":[],
                "R":[],
                "S":[],
                "T":[],
                "U":[],
                "V":[],
                "W":[],
                "X":[],
                "Y":[],
                "Z":[]
            };
           for(var each in letterObj){
              for(var i=0;i<AirData.length;i++){
                if(AirData[i].pinyinHead.charAt(0).toUpperCase()==each){
                  letterObj[each].push(AirData[i]);
                }
              }
            }

            that.data.airportList = letterObj;
        }
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})