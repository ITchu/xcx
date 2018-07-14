const app = getApp()
// const Promise = require('./es6-promise.js')
const http = (url, data) => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: `${app.globalData.baseUrl}${url}`,
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'access-token': app.globalData.access_token,
        'user-token': app.globalData.user_token,
        'version': 'v1.0'
      },
      success: function (res) {
        if (res.statusCode != 200) {
          reject({ error: '服务器忙，请稍后重试', code: 500 });
          return;
        }
        resolve(res.data);
      },
      fail: function (res) {
        // fail调用接口失败
        reject({ error: '网络错误', code: 0 });
      },
      complete: function (res) {
        // complete
      }
    })
  })
}

module.exports = http