// pages/actDetail/actDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    img: 1,
    act_status: '报名中',
    list_info: 'c2',
    act_time: '2017/02/12 00:00',
    time_part: '07/12 00:00-07/15 23:59',
    act_address: 'dd',
    act_group: [
      {group:'c22',money:'0.00'},
      { group: 'c32', money: '0.00' },
      { group: 'c32', money: '0.00' }
    ],
    nav: 'introduce',
    showIntroduce: 'block',
    showLine: 'none',
    showContact: 'none',
    showRisk: 'none',
    sign: 'none',
    introduce: '1.或发送人发的时刻付款啦副驾驶挨饿法师额发尅啊飞',
    line: '2.或发送人发的时刻付款啦副驾驶挨饿法师额发尅啊飞',
    contact: '3.或发送人发的时刻付款啦副驾驶挨饿法师额发尅啊飞',
    risk: '4.或发送人发的时刻付款啦副驾驶挨饿法师额发尅啊飞'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   if(this.data.act_status=='报名中'){
     this.setData({
        sign: 'block'
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
    
  },
  // tab切换
  nav: function (e) {
    var that = this;
    if (e.target.dataset.nav == 'introduce') {
      that.setData({
        nav: 'introduce',
        showIntroduce: 'block',
        showLine: 'none',
        showContact: 'none',
        showRisk: 'none'
      })
    }
    if (e.target.dataset.nav == 'line') {
      that.setData({
        nav: 'line',
        showIntroduce: 'none',
        showLine: 'block',
        showContact: 'none',
        showRisk: 'none'
      })
    }
    if (e.target.dataset.nav == 'contact') {
      that.setData({
        nav: 'contact',
        showIntroduce: 'none',
        showLine: 'none',
        showContact: 'block',
        showRisk: 'none'
      })
    }
    if (e.target.dataset.nav == 'risk') {
      that.setData({
        nav: 'risk',
        showIntroduce: 'none',
        showLine: 'none',
        showContact: 'none',
        showRisk: 'block'
      })
    }
  },
  sign: function(){
    wx.navigateTo({
      url: '../sign/sign?group=0',
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