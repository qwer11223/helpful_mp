// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    all_category: [{
        id: 1,
        title: "科普",
        icon: 'display',
        link: '../sub_pages/news/news'
      },
      {
        id: 2,
        title: "出行",
        icon: 'discover',
        link: '../sub_pages/none/none'
      },
      {
        id: 3,
        title: "游戏",
        icon: 'sticker',
        link: '../sub_pages/none/none'
      },
      {
        id: 4,
        title: "支付",
        icon: 'qr-code',
        link: '../sub_pages/none/none'
      },
      {
        id: 5,
        title: "社交",
        icon: 'group-detail',
        link: '../sub_pages/none/none'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  navigateTo(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.link
    })
  }
})