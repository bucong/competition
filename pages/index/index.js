//index.js
//获取应用实例
var app=getApp();
Page({
  data: {
    show_nav: 'none',
    time_num: 1,
    type_num: 0,
    status_num: 0,
    head: '',
    time: [{ id: 1, name: '全部' }, { id: 2, name: '3天内' }, { id: 3, name: '一周内' }, { id: 4, name: '两周内' }],
    actType: [],
    status: [{ id: 0, name: '全部' }, { id: 3, name: '报名中' }, { id: 4, name: '报名结束' }, { id: 5, name: '进行中' }, { id: 6, name: '活动结束' }],
    showTime: 'none',
    showType: 'none',
    showStatus: 'none',
    ip: '',
    act: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    var ip = getApp().globalData.ip;
    //获取活动类型
    wx.request({
      url: ip + '/applet/get_category_list',
      data: '',
      header: {
        "Content-Type": 'application/json'
      },
      method: '',
      dataType: '',
      success: function (res) { 
        var list = JSON.parse(res.data.data)
        var actType=new Array();
        var obj={id:0,name:'全部'}
        actType.push(obj)
        for(var i in list){
          actType.push(list[i])
        }
        that.setData({
          actType: actType
        })
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
      },
    })
    //获取活动数据
    wx,wx.request({
      url: ip+'/applet/get_competition_list',
      data: '', 
      header: {
        "Content-Type": 'application/json'
      },
      method: '',
      dataType: '',
      success: function(res) {
        var data=res.data.data;
        var list = eval(data);
        for(var i=0;i<list.length;i++){
          //修改图片列表，显示第一张
          // var img=list[i].img;
          // img=img.substring(2,img.length-2);
          // img=img.split('","')
          // list[i].img=img[0]
          //修改赛事状态
          if (list[i].status == 1){
            list[i].status = '未发布'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          } else if (list[i].status == 2){
            list[i].status = '预告中'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          } else if (list[i].status == 3) {
            list[i].status = '报名中'
            list[i].matchStart = list[i].applyStartStr.substring(5)
            list[i].matchEnd = ' - ' + list[i].applyEndStr.substring(5)
          } else if (list[i].status == 4) {
            list[i].status = '报名结束'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          } else if (list[i].status == 5) {
            list[i].status = '进行中'
            list[i].matchStart = list[i].matchStartStr.substring(5)
            list[i].matchEnd = ' - ' + list[i].matchEndStr.substring(5)
          } else{
            list[i].status = '已结束'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          }
        }
        that.setData({
          act: list,
          ip: ip
        })
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
      },
    })
  }, 
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    
  },
  click: function (e) {
    var that=this;
    if (this.data.head == 'time') {
      that.setData({
        time_num: e.target.dataset.time_num,
        head: '',
        showTime: 'none',
        showType: 'none',
        showStatus: 'none'
      })
    }
    if (this.data.head == 'actType') {
      that.setData({
        type_num: e.target.dataset.type_num,
        head: '',
        showTime: 'none',
        showType: 'none',
        showStatus: 'none'
      })
    }
    if (this.data.head == 'status') {
      that.setData({
        status_num: e.target.dataset.status_num,
        head: '',
        showTime: 'none',
        showType: 'none',
        showStatus: 'none'
      })
    }
    var day = parseInt(this.data.time_num-1)
    if(day==0){
      day = null
    }else if (day == 1) {
      day=3
    } else if (day == 2) {
      day = 7
    } else if (day == 3) {
      day = 14
    }
    var status = parseInt(this.data.status_num)
    if (status == 0) {
      status = null
    }
    var categoryId = parseInt(this.data.type_num)
    if (categoryId == 0) {
      categoryId = null
    }
    var str = 'day=' + day + '&status=' + status + '&categoryId=' + categoryId
    console.log(str)
    var ip = getApp().globalData.ip;
    wx, wx.request({
      url: ip + '/applet/get_competition_list?'+str,
      data: '',
      header: {
        "Content-Type": 'application/json'
      },
      method: '',
      dataType: '',
      success: function (res) {
        var data = res.data.data;
        var list = eval(data);
        console.log(list);
        for (var i = 0; i < list.length; i++) {
          //修改赛事状态
          if (list[i].status == 1) {
            list[i].status = '未发布'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          } else if (list[i].status == 2) {
            list[i].status = '预告中'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          } else if (list[i].status == 3) {
            list[i].status = '报名中'
            list[i].matchStart = list[i].applyStartStr.substring(5)
            list[i].matchEnd = ' - ' + list[i].applyEndStr.substring(5)
          } else if (list[i].status == 4) {
            list[i].status = '报名结束'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          } else if (list[i].status == 5) {
            list[i].status = '进行中'
            list[i].matchStart = list[i].matchStartStr.substring(5)
            list[i].matchEnd = ' - ' + list[i].matchEndStr.substring(5)
          } else {
            list[i].status = '已结束'
            list[i].matchStart = ''
            list[i].matchEnd = ''
          }
        }
        that.setData({
          act: list,
          ip: ip
        })
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
      },
    })
  },
  nav:function(e){
    var that=this;
    if (e.target.dataset.head=='time'){
      that.setData({
        head: 'time',
        showTime: 'block',
        showType: 'none',
        showStatus: 'none'
      })
    }
    if (e.target.dataset.head == 'actType') {
      that.setData({
        head: 'actType',
        showTime: 'none',
        showType: 'block',
        showStatus: 'none'
      })
    }
    if (e.target.dataset.head == 'status') {
      that.setData({
        head: 'status',
        showTime: 'none',
        showType: 'none',
        showStatus: 'block'
      })
    }
  },
  hide: function(){
    this.setData({
      head: '',
      showTime: 'none',
      showType: 'none',
      showStatus: 'none'
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
