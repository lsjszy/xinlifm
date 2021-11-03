// 获取应用实例
const app = getApp();
import { requestGet,SlidesURL } from "../../utils/reqeust";

Page({
  data: {
    slides: [],
    contaoner_show: true,
    search_clear: false,
    currentIndex: 0,
    currentIndex1: 0,
    currentIndex2: 0,
   
    imgList: [{
        img: "https://tse1-mm.cn.bing.net/th/id/R-C.99c0e3292e36de16889ff30b6eaeae26?rik=RasRwrZXouynBg&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50053%2f4918.jpg_wh860.jpg&ehk=1TzQmCyz5iXmumGeeKbP6Txr%2fIOLL9Cd2PydquRui3Q%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        img: "https://pic.qbaobei.com/Uploads/Picture/2018-01-24/5a67ff22d93bd.jpg"
    },
      
    {
      img: "https://ossimg.xinli001.com/20170125/940ead5ab16c34b0e849358b8b40c284.jpg"
    },
    {
      img: "https://ossimg.xinli001.com/20161215/01096c03703bcc9a7fde43dc3c53ac05.jpg"
      },
    {
      img: "https://ossimg.xinli001.com/20170315/20b934c7a025b1a9944f76acc3643fcd.jpg"
    },
    ],
  },
  changeSwiper: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  changeSwiper1: function (e) {
    this.setData({
      currentIndex1: e.detail.current
    })
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
// 搜索框
onbindfocus:function(event){
var value = event.detail.value
console.log(value)
this.setData({
  contaoner_show: false,
  search_clear:true
  })
},
  
  onbingtop: function () {
    this.setData({
      contaoner_show: true,
      search_clear:false
    })
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


