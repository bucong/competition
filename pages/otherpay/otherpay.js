// pages/otherpay/otherpay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: 1,
    act_status: '报名中',
    list_info: 'c2',
    time_part: '2017/02/30-2017/05/21',
    time: '2017/02/12 00:00',
    name: 'hdlas',
    showDeclar: '',
    declar: [
      '家而我发髻就激动啥软件咖啡店山发送过生日认识你粉色',
      '放得开啥发动机爱上发收款发送嗯啊翁无阿斯顿发',
      '哈儿干涉哭过后个人控股和无公司的购房款及各省'
    ],
    share: 'none'
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
    var i = this.data.declar.length;
    var j = Math.floor(Math.random() * i);
    var declar = this.data.declar[j];
    this.setData({
      showDeclar: declar
    })
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
  
  },change: function(){
    var i=this.data.declar.length;
    var j = Math.floor(Math.random()*i);
    var declar = this.data.declar[j];
    this.setData({
      showDeclar: declar
    })
  },
  sub:function(){
    this.setData({
      share: 'block'
    })
  },
  hide: function () {
    this.setData({
      share: 'none'
    })
  }
})