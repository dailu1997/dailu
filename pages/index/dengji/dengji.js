// pages/index/dengji/dengji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name;
    wx.setNavigationBarTitle({
      title: name,
    })
  },
  qian:function () {
    wx.navigateTo({
      url: 'qiandao/qiandao?name=签到',
    })
  },
  jilu:function () {
    wx.navigateTo({
      url: 'jilu/jilu?name=签到记录',
    })
  },
  paiban:function (){
    wx.navigateTo({
      url: 'paiban/paiban?name=排班',
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