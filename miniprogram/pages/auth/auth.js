// pages/demo/demo.js
let app =getApp()
Page({
  data: {
  },
  bindGetUserInfo: function (e) {
    let that = this
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.reLaunch({
        url: '/'+that.data.page+'?'+that.data.querystring
      })
    }
  },
  onLoad (options) {
    let page = options.page
    let query = JSON.parse(options.query)
    let querystring = ''
    for(var key in query) {
       querystring+= '&'+key+'='+query[key]
    }
    querystring = querystring.substr(1)
    this.setData({
      page,
      querystring
    })

  }
})