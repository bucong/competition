// pages/bindPhone/bindPhone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 'none',
    status: '发送验证码',
    color: '#8e8a8a',
    phone: '',
    checkNum: ''
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
  phoneCheck: function(e){
    if (/^1[3|4|5|7|8]\d{9}$/.test(e.detail.value)){
      this.setData({
        color: '#16d073',
        phone: e.detail.value
      })
      console.log(this.data.phone);
    }else{
      this.setData({
        color: '#8e8a8a'
      })
    }
  },
  checkNum: function (e) {
    this.setData({
      checkNum: e.detail.value
    })
    console.log(this.data.checkNum);
  },
  sendCheck: function(){
    var that=this;
    if (this.data.color =='#16d073'){
      that.setData({
        color: '#8e8a8a'
      })
      var i=60;
      var time=setInterval(function(){
        i--;
        that.setData({
          status: '已发送(' + i + ')'
        })
        if(i==0){
          clearInterval(time);
          that.setData({
            status: '发送验证码',
            color: '#16d073'
          })
        }
      },1000)
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