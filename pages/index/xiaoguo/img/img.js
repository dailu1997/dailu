// pages/index/xiaoguo/xiaoguo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigations: [
      { title: "效果图", num: 10 },
      { title: "实景图", num: 5 },
      { title: "样板间", num: 6 },
      { title: "户型图", num: 6 },
      { title: "周边配套", num: 4 },
      { title: "工程进度", num: 3 },
      { title: "证件", num: 3 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name
    // wx.setNavigationBarTitle({
    //   title: name,
    // })
  },
  active: function (e) {
    var id = e.currentTarget.dataset.index;
    console.log(id)
    this.setData({
      showId: id
    });
  },
  imgs: () => {
    wx.navigateTo({
      url: 'img/img',
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