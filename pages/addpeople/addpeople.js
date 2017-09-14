// pages/addpeople/addpeople.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    name: 'aaa',
    idCard:'320821199311295733',
    phone:'13003113431',
    sex: '男',
    group: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      group: options.group
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if (!e.detail.value.read) {
      wx.showModal({
        title: '提示',
        content: "请先阅读风险告知",
        showCancel: false,
        confirmText: "确定",
        cancelText: "取消"
      })
    } else if (e.detail.value.emergencyContact == '') {
      wx.showModal({
        title: '提示',
        content: "请输入紧急联系人姓名",
        showCancel: false,
        confirmText: "确定",
        cancelText: "取消"
      })
    } else if (!/^1[3|4|5|7|8]\d{9}$/.test(e.detail.value.emergencyPhone)){
      wx.showModal({
        title: '提示',
        content: "紧急联系人电话格式不对",
        showCancel: false,
        confirmText: "确定",
        cancelText: "取消"
      })
     }else{
       wx.redirectTo({
         url: '../sign/sign?name=' + e.detail.value.name + '&idCard=' + e.detail.value.idCard+'&group='+this.data.group,
         success: function(res) {},
         fail: function(res) {},
         complete: function(res) {},
       })
      wx.request({
        url: 'http://localhost:8088/h5/apply',
        // header: {
        //   "Content-Type": "application/x-www-form-urlencoded"
        // },
        // method: "POST",
        method: "GET",
        // data: {},
        success: function (res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: res.data.info,
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: res.data.info,//这里打印出登录成功
              icon: 'success',
              duration: 1000
            })
          }
        },
        fail: function () {
          wx.showToast({
            title: '服务器网络错误!',
            icon: 'loading',
            duration: 1500
          })
        }
      })
    }
  },
  showNav: function () {
    this.setData({
      show_nav: 'block'
    })
  },
  hideNav: function () {
    this.setData({
      show_nav: 'none'
    })
  }
})