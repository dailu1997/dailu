//index.js
//获取应用实例
Page({
  data: {
    imgUrls: [
      { img:'../../static/icon/banner1@2x.png',index:0},
      { img:'../../static/icon/banner2@2x.png',index:1},
      { img:'../../static/icon/banner3@2x.png',index:2}
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onShow: function (e) {
  },
  click:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(id)
    if(id==0){
      wx.navigateTo({
        url: 'news/news?id=0' ,
      })
    }else if (id==1){
      wx.navigateTo({
        url: 'news/news?id=1' ,
      })
    }else {
      wx.navigateTo({
        url: 'news/news?id=2' ,
      })
    }
  },
  brand:function () {
    wx.navigateTo({
      url: 'brand/brand?id=0&name=公司简介',
      success: function(res){
        console.log(0)
      }
    })
  },
  basic:()=>{
    wx.navigateTo({
      url: 'brand/brand?id=1&name=基本参数',
      success: function(res){
        console.log(1)
      }
    })
  },
  information:()=>{
    wx.navigateTo({
      url: 'brand/brand?id=2&name=项目概况',
      success: function(res){
        console.log(2)
      }
    })
  },
  recent:(e)=>{
    var id = e.currentTarget.dataset.id;
    if(id==0){
      wx.navigateTo({
        url: 'building/building?id=0' ,
      })
    }else if (id==1){
      wx.navigateTo({
        url: 'building/building?id=1' ,
      })
    }else {
      wx.navigateTo({
        url: 'building/building?id=2' ,
      })
    }
  },
  register:()=>{
    wx.navigateTo({
      url: 'register/register',
    })
  },
  xiaoLeft:() => {
    wx.navigateTo({
      url: 'huxing/huxing?id=3&name=户型欣赏',
    })
  },
  xiaoTop:() => {
    wx.navigateTo({
      url: 'brand/brand?id=4&name=样板间',
    })
  },
  xiaoBottom:() => {
    wx.navigateTo({
      url: 'brand/brand?id=5&name=效果图',
    })
  },
  interview:() => {
    wx.navigateTo({
      url: 'brand/brand?id=6&name=大师访谈',
      success: function (res) {
        console.log(6)
      }
    })
  },
  listLeft:() => {
    wx.navigateTo({
      url: 'brand/brand?name=楼盘亮点',
    })
  },
  listRight:() => {
    wx.navigateTo({
      url: 'brand/brand?name=销售信息',
    })
  },
  listTop:() => {
    wx.navigateTo({
      url: 'brand/brand?name=周边配套',
    })
  },
  listMiddle:() => {
    wx.navigateTo({
      url: 'brand/brand?name=接待流程',
    })
  },
  listBottom:() => {
    wx.navigateTo({
      url: 'home/home',
    })
  },
  diy:() => {
    wx.navigateTo({
      url: 'DIY/DIY',
    })
  },
  dingwei:() => {
    wx.navigateTo({
      url: 'dingwei/dingwei?name=项目位置',
    })
  },
  newsRight:() => {
    wx.navigateTo({
      url: 'zhanting/zhanting?name=城市展厅',
    })
  }
})
