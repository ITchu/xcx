Page({
  data: {
    choose_index: 0,
    show: false,
    tabbar: {
      "color": "#999999",
      "selectedColor": "#F9759A",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "list": [{
        "key": "home",
        "iconPath": "/images/template/test_def.png",
        "selectedIconPath": "/images/template/test_sel.png",
        "text": "测肤",
        "title": "逆龄时光"
      },
      {
        "key": "tag",
        "iconPath": "/images/template/class_def.png",
        "selectedIconPath": "/images/template/class_sel.png",
        "text": "排名",
        "title": "肤质排名"
      },
      {
        "key": "new",
        "iconPath": "/images/template/icon_camera.png", 
        "selectedIconPath": "/images/template/icon_camera.png", 
        "title":"逆龄时光",
        "choose": "disable"
      },
      {
        "key": "notebook",
        "iconPath": "/images/template/mine_def.png",
        "selectedIconPath": "/images/template/mine_sel.png",
        "text": "专题",
        "title": "专题"
      },
      {
        "key": "me",
        "iconPath": "/images/template/subject_def.png",
        "selectedIconPath": "/images/template/subject_sel.png",
        "text": "我的",
        "title": "个人中心"
      }
      ]
    }
  },
  tabChange: function (e) {
    var key = e.detail.key;
      wx.setNavigationBarTitle({
        title: e.detail.title
      }),
      this.setData({
        choose_index: e.detail.index
      })
    
  },
  /**
* 用户点击右上角分享
*/
  onShareAppMessage: function () {

  }
})