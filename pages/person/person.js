// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    userName: '',
    sex: '',
    idCard: '',
    phone: '',
    email: '',
    array: ['男', '女'],
    color: '#000'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phone=getApp().globalData.phone;
    phone = phone.substring(0, 3) + "****" + phone.substring(7, 11); 
    var idCard = getApp().globalData.idCard;
    idCard = idCard.substring(0, 6) + "**********" + idCard.substring(16, 18); 
    if (getApp().globalData.email==''){
      getApp().globalData.email='输入电子邮箱';
      this.setData({
        color: '#666'
      })
    }
    this.setData({
      userName: getApp().globalData.userName,
      sex: getApp().globalData.sex,
      idCard: idCard,
      phone: phone,
      email: getApp().globalData.email
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
  
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },
  back: function(){
    console.log(123);
    wx.navigateBack();
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