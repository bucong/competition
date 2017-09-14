Page({
  data: {
    show_nav: 'none',
    latitude: 31.12,
    longitude: 121.38,
    markers: [{
      latitude: 31.12,
      longitude: 121.38,
      name: '上海硕道'
    }]
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
