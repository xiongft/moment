const app = getApp();
Page({
  data: {
    list: [
      {
        createTime: '一小时前',
        avatar: '123.png',
        nickname: '小A',
        content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        images: ['123.png', '123.png','123.png','123.png','123.png','123.png'],
        like: [
          {
            avatar: '123.png',
            color: 'red'
          },
          {
            avatar: '123.png',
            color: 'green'
          }
        ],
        rate: [
          {
            avatar: '123.png',
            nickname: '小B',
            content: '有啥好笑的',
            createTime: '20分钟前',
            location: '北京'
          },
          {
            avatar: '123.png',
            nickname: '我是周杰伦',
            content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            createTime: '20分钟前',
            location: '乌鲁木齐'
          },
          {
            avatar: '123.png',
            nickname: '小C',
            content: '别闹',
            createTime: '20分钟前',
            location: '乌鲁木齐'
          }
        ]
      },
      {
        createTime: '三天前',
        avatar: '123.png',
        nickname: '小B',
        content: '这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理',
        images: ['123.png','123.png','123.png','123.png','123.png','123.png','123.png','123.png','123.png'],
        like: [
          {
            avatar: '123.png',
            color: 'red'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          }
        ],
        rate: [
          {
            avatar: '123.png',
            nickname: '小B',
            content: '有啥好笑的',
            createTime: '20分钟前',
            location: '北京'
          },
          {
            avatar: '123.png',
            nickname: '我是周杰伦',
            content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            createTime: '20分钟前',
            location: '乌鲁木齐'
          },
          {
            avatar: '123.png',
            nickname: '小C',
            content: '别闹',
            createTime: '20分钟前',
            location: '乌鲁木齐'
          }
        ]
      },
      {
        createTime: '三天前',
        avatar: '123.png',
        nickname: '小B',
        content: '',
        images: ['123.png','123.png','123.png','123.png','123.png','123.png','123.png','123.png','123.png'],
        like: [
          {
            avatar: '123.png',
            color: 'red'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          },
          {
            avatar: '123.png',
            color: 'green'
          }
        ],
        rate: [
          {
            avatar: '123.png',
            nickname: '小B',
            content: '有啥好笑的',
            createTime: '20分钟前',
            location: '北京'
          },
          {
            avatar: '123.png',
            nickname: '我是周杰伦',
            content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            createTime: '20分钟前',
            location: '乌鲁木齐'
          },
          {
            avatar: '123.png',
            nickname: '小C',
            content: '别闹',
            createTime: '20分钟前',
            location: '乌鲁木齐'
          }
        ]
      }
    ],
     activearr: ['active', '']
  },
  switchtab(e) {
    let index = e.currentTarget.dataset.index
    let activearr = ['', '']
    activearr[index] = 'active'
    this.setData({
      activearr
    })
  },
  onLoad () {
    
  },
  onShareAppMessage: function (res) {
    return {
      title: '',
      path: '/pages/index/index'
    }
  }
})