//index.js
//获取应用实例
Component({
  data: {
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    // indicator - active - color: #fffff,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  goRecord(){
    wx.navigateTo({
      url: '../record/record'
    })
  },
  goCourse(){
    wx.navigateTo({
      url: '../course/course',
    })
  }
  
})
