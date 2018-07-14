/**
 * 小程序配置文件 师姐二期
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'www.jitusoft.com'
// var baseUrl = 'http://www.shijie.com/api/'  // 本地域名
var baseUrl = 'http://zhihui.7tsoft.com/api/'  // t开发域名
// var baseUrl = 'https://sj-tp.jitusoft.cn/api/'  // tp开发域名
// var baseUrl = 'https://sj.jitusoft.cn/api/'  // 线上域名师姐
// var baseUrl = 'https://www.jitusoft.cn/sj/api/'   // 线上域名吉图

var appId = 'wx003c8ed3fd297296' // 微信appId
var appSecret = '8be9bdebdfd086cbf4fe7e611fe98eaa'

var serverAppId = '38047872' // 服务器应用id
var serverAppSecret = 'UCrzvQoyvlXCLMEfgdBZDVByASmmUzjY'

// 阿里云
// var AccessKeyID = LTAIJZyBgSwW1Qte
// var AccessKeySecret = YKo6nJmcM1nVzjhgl1EsSWZmR8HE71



// var imageUrl = 'https://images.jitusoft.cn/sj/' // 正式图片地址
// var imageUrl = 'https://images.jitusoft.cn/sj/' // tp测试图片地址

var config = {
  appId,
  host,

  // 下面的地址配合云端 Demo 工作
  service: {
    appId,
    appSecret,
    serverAppId,
    serverAppSecret,
    host,
    baseUrl,


    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/user`,

    // 测试的信道服务地址
    tunnelUrl: `${host}/weapp/tunnel`,

    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`
  }
}

module.exports = config