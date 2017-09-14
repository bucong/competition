// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    isReplace: true,
    isTime: true
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
  wxpay:function(){
    if(this.data.isReplace){
      wx.navigateTo({
        url: '../prompt/prompt?info=你已经申请助力了，如果金额不足，请在助力中进行支付！',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }else{
      //微信支付接口
    }
  },
  otherpay:function () {
    if (!this.data.isTime) {
      wx.navigateTo({
        url: '../prompt/prompt?info=现在不在报名期间内！',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.navigateTo({
        url: '../otherpay/otherpay',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
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