// pages/index/brand/brand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      { img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', index: 0 },
      { img: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', index: 1 },
      { img: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', index: 2 }
    ],
    imgArr: [
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
      'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    var name = options.name
    if(name == 'huxing') {
      this.setData({
        img:this.data.imgUrls[0].img
      })
    }
    if(id==0) {
      this.setData({
        img:this.data.imgUrls[id].img
      })
    }else if(id==1){
      this.setData({ 
        img:this.data.imgUrls[id].img
      })
    }else {
      this.setData({
        img:this.data.imgUrls[id].img
      })
    }
    this.setData({
      id:options.id,
      name:options.name
    });
    
  },
  imgClick: function () {
    //  var imgArr = this.data.imgArr;
    var arr = [];
     for (var i = 0; i < this.data.imgUrls.length; i++) {
       arr.push(this.data.imgUrls[i].img)
     }
     wx.previewImage({
      current: arr[0],     //当前图片地址
      urls: arr,   
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