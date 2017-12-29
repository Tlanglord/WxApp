// pages/logd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'log': ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("load");
    console.log("options:" + JSON.stringify(options));
    this.setData({ log: options.log })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("ready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show");
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("unload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("pullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("reachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("shareAppMessage");
  },

  bindLogClick(e) {
    console.log(e.currentTarget.dataset.log);
    console.log(e.currentTarget.dataset.log);
    var that = this;
    var pages= getCurrentPages();
    pages[pages.length - 2].setData({
      clicklog: "cl"
    });
    wx.navigateBack({
      delta: 1,
      success:function(res){
         console.log("logd res : " + JSON.stringify(res));
      }
    })
  }
})