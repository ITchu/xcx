// pages/photograph/photograph.js
const http = require('../../utils/http.js')
const base64 = require('../../utils/base64.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      choose:'',
      tempFilePaths:'',
      ceshiType:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      choose:options.choose
    })
    if (options.choose =="camera"){
      this.data.ceshiType=1
    }else{
      this.data.ceshiType = 2
    }
    this.chooseImage();

  },
  chooseImage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: [_this.data.choose], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths[0]
        })
        var base64 = base64.CusBASE64.encoder(res.tempFilePaths[0]); 
        console.log(base64);
        console.log(app.globalData)
        // http('5b472f44148f6',{
        //   uid: app.globalData.uid,
        //   imageBase64:'',
        //   type: _this.data.ceshiType 
        // }).then(res=>{

        // })
      },
      fail:function(){
        wx.navigateBack({
          delta: 1,
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})