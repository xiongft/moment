const app = getApp();
Page({
  data: {
    content: '',
    money: '',
    people: '',
    imglist: [],
    lasttimeopen: false,
    sending: false,
    location: ''
  },
  chooselocation () {
    let that= this
    wx.chooseLocation({
      success (res) {
        that.setData({
          location: res.name,
          lat: res.latitude,
          lng: res.longitude
        })
      }
    })
  },
  textinput (e) {
    let name = e.currentTarget.dataset.name
    let value = e.detail.value
    let json = {}
    json[name] = value
    this.setData(json)
  },
  typechange (e) {
    this.setData({
      lasttimeopen: e.detail.value
    })
  },
  showimage (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    wx.previewImage({
      urls: that.data.imglist.map(x => {
        x = that.data.domain+x
        return x
      }),
      current: that.data.domain+that.data.imglist[index]
    })
  },
  clearimg (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    wx.showModal({
      content: '确定删除此图片?',
      success (res) {
        if(res.confirm) {
          that.data.imglist.splice(index, 1)
          that.setData({
            imglist: that.data.imglist
          })
        }
      }
    })
  },
  addimg () {
    let that = this
    wx.chooseImage({
      count: 3 - that.data.imglist.length,
      sizeType: ['compressed'],
      success (res) {
        let tem = res.tempFilePaths
        wx.showLoading({
          title: '上传中'
        })
        for(var i=0;i< tem.length; i++) {
          wx.uploadFile({
            url: common.CONST.uploadDomain+`?operate=fileUpload&version=1.1&user_id=${wx.getStorageSync('userid')}&fileNumber=1`, 
            filePath: tem[i],
            name: 'file',
            success (res){
              if (app.clearData(res.data).resCode == '000') {
                that.data.imglist.push(app.clearData(res.data).resData)
                that.setData({
                  imglist: that.data.imglist
                })
                if (i == tem.length) {
                  wx.hideLoading()
                }
              }
            }}
          )
        }
      }
    })
  },
  release () {
    let that = this
    if(!that.data.content) {
      wx.showModal({
        content: '请输入任务细节',
        showCancel: false
      })
      return
    }
    if(that.data.imglist.length == 0) {
      wx.showModal({
        content: '请至少上传一张图片',
        showCancel: false
      })
      return
    }
    if(!that.data.money) {
      wx.showModal({
        content: '请输入总投入',
        showCancel: false
      })
      return
    }
    if(!that.data.people) {
      wx.showModal({
        content: '请输入最大转发人数',
        showCancel: false
      })
      return
    }
    if(that.data.money/that.data.people < 10) {
      wx.showModal({
        content: '人均不能低于10个互助币',
        showCancel: false
      })
      return
    }
    wx.showLoading({
      title: '提交中',
      mask: true
    })
    that.setData({
      sending: true
    })
    commAction.getdata({
      version: 1.2,
      operate:'helpCircleAdd',
      publisher:wx.getStorageSync('userid')||73,
      coin_total:that.data.money,
      content: that.data.content,
      parti_chances: that.data.people,
      img_url: that.data.imglist.join(';'),
      hc_type: that.data.lasttimeopen ? 3 : 1
    }).then( (res) => {
      if (app.clearData(res).resCode == '000') {
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 2000
        })
        app.globalData.needfresh = true
        that.setData({
          sending: false
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
          wx.hideLoading()
        }, 1500)
      } else {
        that.setData({
          sending: false
        })
        wx.showToast({
          title: app.clearData(res).resMsg,
          icon: 'none',
          duration: 3000
        })
      }
    })
  }
})