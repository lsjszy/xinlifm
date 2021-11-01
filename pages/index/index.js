// 获取应用实例
const app = getApp();
import { requestGet,SlidesURL } from "../../utils/reqeust";

Page({
  data: {
    slides: [],
    
  },
  
    onLoad() {
    this.getSlidesData();
  },
  async getSlidesData() {
    const result = await requestGet(SlidesURL);
    this.setData({
      slides: result.data,
    });
  },

   // 获取滚动条当前位置
  onPageScroll: function (e) {
    // console.log(e) 自己设置 滚动距离,200
    if (e.scrollTop > 200) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
});


