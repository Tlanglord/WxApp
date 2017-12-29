//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    clicklog:""
  },

  bindItemTap(e){
    console.log(e);
    console.log(e.currentTarget.dataset.log);
      wx.navigateTo({
        url: '../logd/logd' + '?' + "log=" + e.currentTarget.dataset.log,
      })
  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },

  onShow: function(){
     console.log("logs show");
     var that = this;
     wx.showToast({
       title: that.data.clicklog,
       icon: '',
       image: '',
       duration: 800,
       mask: true,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  }
})
