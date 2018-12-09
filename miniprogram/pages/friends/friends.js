//index.js
//获取应用实例
const app = getApp()
var page = 1
var onPage = 1
Page({
  data: {
    list: [
      {
        nick_name: 'kcl',
        avatar: '123.png'

      }
    ],
    name: '',
    nomore : false
  },
  excharge (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    let data = JSON.stringify(that.data.list[index])
    wx.navigateTo({
      url: '../excharge/excharge?data='+data
    })
  },
  nosearch () {
    this.setData({
      list: [],
      name: ''
    })
    page =1
    onPage =1
    this.getList()
  },
  searchname (e) {
    var name = e.detail.value
    let list = []
    let that = this
    wx.nextTick(() => {
      that.setData({
        list,
        name
      })
      page = 1 
      onPage =1
      that.getList()
    })
  },
  clear (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    wx.showModal({
      content: '确定删除?',
      success (res) {
        if (res.confirm) {
          commAction.getdata({
            version: 1.1,
            operate: 'friendShipSet',
            execAction: 'unFriend',
            friend_id: that.data.list[index].friend_id,
            user_id: wx.getStorageSync('userid')||73
          }).then(res => {
            that.getList()
          })
        }
    }
    })
  },
  getList() {
     let that = this
     wx.showLoading({
      title: '加载中'
    })
    onPage = page
    commAction.getdata({
      version: 1.1,
      operate:'friendListGet',
      user_id: wx.getStorageSync('userid')||73,
      recordCount:20,
      pageNo: page,
      nickname: that.data.name
    }).then( (res) => {
      if (res.resCode == '000') {
      that.setData({
        list: that.data.list.concat(res.resData.map(x=> {
          if(x.icon_url.indexOf('http')<0) {
            x.icon_url = that.data.domain+x.icon_url
          }
          return x
        }))
      })
      if(res.resData.length<20) {
        that.setData({
          nomore: true
        })
      }
      page ++
      wx.hideLoading()
    } else {
      wx.showModal({
        content: res.resMsg,
        showCancel: false
      })
    }
    })
  },
  onPullDownRefresh: function(){
    let that = this
    page = 1
    onPage = 1
    that.setData({
      nomore: false
    })
    that.getList()
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
    if(onPage == page && that.data.nomore) {
      return
    } else {
      this.getList()
    }
  },
  onLoad () {
    let that = this
        page = 1
        onPage = 1
        that.setData({
          nomore: false
        })
    // that.getList()
  }
})