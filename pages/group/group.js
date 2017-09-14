// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    act: 0,
    array: ['c2','fawe','frer','ghuir','fjiaehgrihalh'],
    groupdata: [
      {name: 'qqq'},
      { name: '123' },
      { name: 'qrwtreqq' },
      { name: 'qgdfsgsdqq' }
    ]
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
  
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      act: e.detail.value
    })
  }, groupList:function(){
    wx.navigateTo({
      url: '../groupDetail/groupDetail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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