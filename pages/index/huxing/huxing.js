// pages/index/huxing/huxing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgList:[
        "../../../static/icon/二级页面/户型二级切图/户型1@2x.png",
        "../../../static/icon/二级页面/户型二级切图/户型2@2x.png",
        "../../../static/icon/二级页面/户型二级切图/户型3@2x.png",
        "../../../static/icon/二级页面/户型二级切图/户型4@2x.png",
        "../../../static/icon/二级页面/户型二级切图/户型5@2x.png",
        "../../../static/icon/二级页面/户型二级切图/户型6@2x.png",
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name
    wx.setNavigationBarTitle({
      title: name,
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