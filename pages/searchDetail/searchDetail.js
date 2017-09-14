// pages/searchDetail/searchDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    act_name: 'j4',
    group: 'run',
    act_time: '2017/07/21 00:00',
    name: '***',
    idCard: '320821**********33',
    phone: '130****3431',
    isRead: '是',
    status: '报名成功',
    sign: '已签到',
    isSign: 'block',
    isGroup: true,
    friend: 'jack',//已经组队的队友
    isPay: 'block',
    meng: 'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.status=='等待支付'){
      this.setData({
        isPay: 'none'
      })
    }
    if (this.data.sign == '未签到') {
      this.setData({
        isSign: 'none'
      })
    }
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
  showQrcode: function(){
    this.setData({
      meng: 'block'
    })
  },
  back: function () {
    this.setData({
      meng: 'none'
    })
  },toGroup: function(){
    if(this.data.isGroup){
      wx.navigateTo({
        url: '../prompt/prompt?info=你已经对'+this.data.friend+'组过队了，请查看组队情况！',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }else{
      wx.navigateTo({
        url: '../groupChoose/groupChoose',
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