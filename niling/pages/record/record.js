// pages/home/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     contentArr:[
       {
         id:1,
         score:70,
         time:'2018-09-11 18:31'
       },
       {
         id: 2,
         score: 80,
         time: '2018-09-11 18:31'
       },
       {
         id: 3,
         score: 90,
         time: '2018-09-11 18:31'
       },
       {
         id: 4,
         score: 100,
         time: '2018-09-11 18:31'
       },
     ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  jumpdetailClick:function(e){
    console.log(e);
     wx.navigateTo({
       url: '../report/report?id=' + e.currentTarget.dataset.current,
     })
  }
})