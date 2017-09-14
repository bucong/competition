// pages/groupChoose/groupChoose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    group_name: '',
    group: '0',
    array: ['选择类型', '朋友', '家庭成员', '院校', '事业单位']
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
      group: e.detail.value
    })
  },
  inputName: function(e){
    this.setData({
      group_name: e.detail.value
    })
  },
  sub: function(){
    if(this.data.group_name.length==0){
      wx.showModal({
        title: '提示',
        content: '请填写队伍名称',
        showCancel: false,
        confirmText: '确定',
        confirmColor: 'blue'
      })
    }else{
      if (this.data.group == 0) {
        wx.showModal({
          title: '提示',
          content: '请选择队伍类型',
          showCancel: false,
          confirmText: '确定',
          confirmColor: 'blue'
        })
      }else{
        wx.navigateTo({
          url: '../groupDetail/groupDetail',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    }
  }
})