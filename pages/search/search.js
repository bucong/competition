// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    act: [
      {act_name: 'j4',act_group:'run'},
      { act_name: 'g4', act_group: 'jria' }
    ],
    norecord: 'none'
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
    if(this.data.act.length==0){
      this.setData({
        norecord: 'block'
      })
    }
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
  
  },actList: function(){
    wx.navigateTo({
      url: '../searchDetail/searchDetail',
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