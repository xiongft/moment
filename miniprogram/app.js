//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'dev-42b7f4',
        traceUser: true,
      })
    }
    let that = this
        wx.getSetting({
          success: res => {
            if (!res.authSetting['scope.userInfo']) {
              wx.reLaunch({
                url: `/pages/auth/auth?page=${e.path}&query=${JSON.stringify(e.query)}`
              })
            } else {
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  that.globalData.userInfo = res.userInfo
    
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (that.userInfoReadyCallback) {
                    that.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })
  }
})
