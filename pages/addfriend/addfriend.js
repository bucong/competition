// pages/addfriend/addfriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    name: '',
    phone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },name: function(e){
    this.setData({
      name: e.detail.value
    })
  }, phone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  }, sub: function () {
    if(this.data.name==''){
      wx.showModal({
        title: '提示',
        content: '请输入队员姓名',
        showCancel: false,
        confirmText: '确定',
        confirmColor: 'blue',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }else{
      if (!/^1[3|4|5|7|8]\d{9}$/.test(this.data.phone)) {
        wx.showModal({
          title: '提示',
          content: '请正确填写手机号码！',
          showCancel: false,
          confirmText: '确定',
          confirmColor: 'blue',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }else{
        //判断该组比赛是否有此成员
      }
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