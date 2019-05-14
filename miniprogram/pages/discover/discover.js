const db = wx.cloud.database()
const banners = db.collection('banners')
Page({
  data: {
    banners: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadBanners();
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
  loadBanners: function () {
    banners.where({
      type: 'discover-top'
    })
      .field({
        url: true
      })
      .get()
      .then(res => {
        console.log(res)
        this.setData({
          banners: res.data
        })
      })
  },
  navigate:function(e){
    console.log(e)
    const id=e.target.id
    if(id==0){
      wx.navigateTo({
        url: 'plan/plan'
      })
    }
    if (id == 1) {
      wx.navigateTo({
        url: 'list/list'
      })
    }
  }
})