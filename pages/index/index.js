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
    this.setData({
      msgList: [
        { title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代",index:0 },
        { title: "交了20多年的国内漫游费将取消 你能省多少话费？",index:1 },
        { title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱",index:2 }]
    });
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
      url: 'brand/brand?id=0',
      success: function(res){
        console.log(0)
      }
    })
  },
  basic:()=>{
    wx.navigateTo({
      url: 'brand/brand?id=1',
      success: function(res){
        console.log(1)
      }
    })
  },
  information:()=>{
    wx.navigateTo({
      url: 'brand/brand?id=2',
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
      url: 'brand/brand?name=huxing',
    })
  },
  xiaoTop:() => {
    wx.navigateTo({
      url: 'brand/brand?name=yangban',
    })
  },
  xiaoBottom:() => {
    wx.navigateTo({
      url: 'brand/brand?name=xiaoguo',
    })
  },
  interview:() => {
    wx.navigateTo({
      url: 'brand/brand?name=fangtan',
    })
  },
  listLeft:() => {
    wx.navigateTo({
      url: 'brand/brand?name=liangdian',
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
      url: 'dingwei/dingwei',
    })
  },
  newsRight:() => {
    wx.navigateTo({
      url: 'zhanting/zhanting',
    })
  }
})
