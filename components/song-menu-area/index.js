// components/song-menu-area/index.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        songMenu:{
            type:Array,
            value:[]
        },title:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        screenWidth :app.globalData.screenWidth
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleMenuItemClick(e){
            const {item} = e.currentTarget.dataset
            wx.navigateTo({
              url: `/pages/detail-songs/index?id=${item.id}&type=menu`,
            })
        }
    }
})
