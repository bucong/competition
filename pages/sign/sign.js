// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    act_name: 'js',
    act_time: '2017/07/21 00:00',
    act_address: '闵行区',
    group: '0',
    array: ['选择组别','run', 'swim'],
    name: '',
    idCard: '',
    show: 'block',
    isSign: false,
    receive: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name,
      idCard: options.idCard,
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
    if (!this.data.name) {
      this.setData({
        show: 'none'
      })
    }
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
      group: e.detail.value
    })
  },
  add: function(e){
    if(this.data.group==0){
      wx.showModal({
        title: '提示',
        content: "请先选择组别",
        showCancel: false,
        confirmText: "确定",
        cancelText: "取消"
      })
    }else{
      wx.navigateTo({
        url: '../addpeople/addpeople?group='+this.data.group,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  sign: function(){
    if (!this.data.name){
      wx.showModal({
        title: '提示',
        content: "请先添加报名人员",
        showCancel: false,
        confirmText: "确定",
        cancelText: "取消"
      })
    }else if(this.data.isSign){
      wx.showModal({
        title: '提示',
        content: "您填写的报名人员申请过该组别赛事了！",
        showCancel: false,
        confirmText: "确定",
        cancelText: "取消"
      })
    }else{
      wx.redirectTo({
        url: '../signSuccess/signSuccess',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
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