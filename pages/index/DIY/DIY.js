Page({
  data: {
    imgData: []
  },
  uploadPhoto(e) { // 拍摄或从相册选取上传
    let that = this;
    wx.chooseImage({
      count: 9 - that.data.imgData.length, // 默认最多上传9张
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        let tempFilePaths = res.tempFilePaths; // 返回选定照片的本地路径列表 
        that.upload(that, tempFilePaths);
      }
    })
  },
  upload(page, path) { // 上传图片
    let that = this;
    wx.showToast({ icon: "loading", title: "正在上传……" });
    for (var i=0; i<path.length; i++) {
      wx.uploadFile({
        url: '上传图片接口url', //后端接口
        filePath: path[i],
        name: 'file',
        header: app.globalData.header,
        success(res) {
          if (res.statusCode != 200) {
            wx.showModal({
              title: '提示', 
              content: '第' + i +'张图片上传失败', 
              showCancel: false
            });
            return;
          } else {
            console.log('第' + i +'张图片上传成功！可在此操作，比如：存入imgData;');
          }
        },
        fail(e) {
          wx.showModal({
          title: '提示', 
          content: '第' + i +'张图片上传失败', 
          showCancel: false
          });
        },
        complete() {
          wx.hideToast(); //隐藏Toast
        }
      })
    }
  }
})