// pages/index/dingwei/dingwei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 1,
      latitude: 34.2095662909,
      longitude: 108.9402902126,
      name: '朱雀云天'
    }
  ],
  },
  click: function (e) {
    wx.openLocation({
      latitude: 34.2155165611,
      longitude: 108.9470726926,
      scale: 18,
      name: '朱雀云天',
      address: '雁塔区朱雀大街南段'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // toMap: function (e) {

  //   console.log(e.currentTarget.dataset.info, 'toMap')

  //   var info = e.currentTarget.dataset.info
  //   wx.getLocation({//获取当前经纬度
  //     type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
  //     success: function (res) {
  //       wx.openLocation({//​使用微信内置地图查看位置。
  //         latitude: 22.5542080000,//要去的纬度-地址
  //         longitude: 113.8878770000,//要去的经度-地址
  //         name: "宝安中心A地铁口",
  //         address: '宝安中心A地铁口'
  //       })
  //     }
  //   })

  //   wx.openLocation({

  //     latitude: info.longitude,

  //     longitude: info.latitude,

  //     scale: 18,

  //     name: info.hotel_name,

  //     address: info.address

  //   },

  //   )

  // },
  
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