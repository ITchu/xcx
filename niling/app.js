//app.js

//app.js
const util = require('./utils/util.js')
const config = require('./config.js')
const md5 = require('./utils/md5.js')
App({
  onLaunch: function (opt) {
    console.log('app onLaunch')
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          this.globalData.code = res.code

          this.getAccessToken()
            .then(token => this.getLoginInfo(token))
        }
      }
    })

  },

  onShow(opt) {
    this.globalData.opt = opt.query;
    this.globalData.share_uid = opt.query.share_uid;
    this.globalData.friendsFightGroupId = opt.query.room_id || '';
    if (opt.query.q) {
      const link = decodeURIComponent(opt.query.q);
      const agent_sn = link.split('=')[1];
      // console.log('agent_sn=' + agent_sn)
      this.globalData.agent_sn = agent_sn;
    };
    // const aa = decodeURIComponent('{"agent_sn":"DL123456789"}')
    // const bb = JSON.parse(aa)
    // console.log(bb)
    // this.globalData.agent_sn = aa.agent_sn;
  },
  // 获取accessToken
  getAccessToken() {
    let that = this
    return new Promise(function (resolve, reject) {
      let _timestamp = new Date().getTime().toString().substr(0, 10);
      let _rand_str = util.randomString(16);
      let str = `app_id=${config.service.serverAppId}&app_secret=${config.service.serverAppSecret}&rand_str=${_rand_str}&timestamp=${_timestamp}`
      let _signature = md5.hex_md5(str)
      // let _device_id = md5.hex_md5(_rand_str)
      const param = {
        timestamp: _timestamp,
        app_id: config.service.serverAppId,
        rand_str: _rand_str,
        signature: _signature,
      };
      wx.request({
        url: `${config.service.baseUrl}5b3b5562e71f5`,
        method: 'POST',
        data: param,
        header: {
          'content-type': 'application/x-www-form-urlencoded', // 默认值
          'version': 'v1.0'
        },
        success: function (res) {
          console.log(res)
          that.globalData.access_token = res.data.data.access_token;
          resolve(res.data.data.access_token)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  // 获取登录信息user-token,uid,bind_phone
  getLoginInfo(token) {
    console.log(token)
    let that = this
    // console.log('post inviter_uid= ' + that.globalData.opt.share_uid);
    // console.log('post agent_sn= ' + that.globalData.agent_sn);
    return new Promise(function (resolve, reject) {
      wx.request({
        url: `${config.service.baseUrl}5b3c81e6e5be3`,
        method: 'POST',
        data: {
          code: that.globalData.code
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded', // 默认值
          'version': 'v1.0'
        },
        success: function (res) {
          console.log(res)
          that.globalData.user_token = res.data.data.user_token
          that.globalData.uid = res.data.data.uid
          that.globalData.openid = res.data.data.openid
          // that.globalData.bind_phone = 2 // 强制已绑定手机，方便测试
          resolve(res.data.data.uid)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  globalData: {
    appId: config.service.appId,
    baseUrl: config.service.baseUrl,
    opt: '', // 进入app的信息
    access_token: '',
    uid: '',
    share_uid: '',
    user_token: '',
    openid:'',
    userInfo: null,
    code: null,
  }
})