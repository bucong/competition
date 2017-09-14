// pages/groupDetail/groupDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    group_name: 'qqq',
    group_num: '1',
    group_type: '家庭成员',
    mod: [
      {name: 'aa[队长]',phone: '13003113431'},
      { name: 'jfoidasj', phone: '13003113431' }
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
  
  },add: function(){
    wx.navigateTo({
      url: '../addfriend/addfriend',
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