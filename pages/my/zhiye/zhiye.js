// pages/my/zhiye/zhiye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      dates:'开始时间',
      dated:"终止时间"
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
  active:function(e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      id :id
    })
  },
  bindDateChange: function (e) {
    this.setData({
      dates: e.detail.value
    })
  },
  bindDateChangend: function (e) {
    this.setData({
      dated: e.detail.value
    })
  },
  search:function(e){
     console.log(e)
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