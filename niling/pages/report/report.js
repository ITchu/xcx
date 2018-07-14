// pages/home/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentArr: [{
        title: "健康肤色",
        content: "健康的皮肤细嫩、透明感强，血管充盈度好，表皮层含黑色素较少且分布均匀，呈粉红稍白色或微红略带淡黄色。"
      },
      {
        title: "轻度色斑",
        content: "脸部色斑的形成主要有遗传性因素、紫外线照射、内分泌原因、生活习惯等因素刺激使自由基的活性增强。自由基在攻击和破坏细胞过程中，细胞大量死亡和代谢紊乱，细胞内杂质无法代谢，造成色素沉积，新生细胞数量大量减少（新生细胞是肌肤的美白的重要因素）形成脸部色斑。"
      },
      {
        title: "轻度青春痘",
        content: "一些过敏性体质，常常会因为一些讨厌的外界因素而使肌肤变得异常敏感，例如紫外线照射，冷热光的环境交替，或是由某一地区移到另一与原本水土环境差异很大的堤防都会导致痘痘问题的出现。"
      },
      {
        title: "轻度黑眼圈",
        content: "主要由偶然的熬夜、情绪性失眠、偶尔身体不适引起，或由于周期性循环不畅，造成眼下淡青紫色暂时不消，于是形成了黑眼圈，这种情况过多将伴随轻微的干纹、细纹。"
      }

    ],
    characteristicsArr: ["昵称：寻找稻城", "性别：女性", "年龄：24", "人种：亚洲人", "颜值：98"]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options["id"]);
       var that = this;
       that.setData({
         
       })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})