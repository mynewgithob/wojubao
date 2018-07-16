<template>
    <div class="icon-box">
        <swiper class="wraper" :options="swiperOption">
            <swiper-slide v-for="(item,index) of pagesAll" :key="index">
                <div class="icon" v-for="val in item" :key="val.id">
                    <div class="home-icon">
                        <img class="icon-img" :src="val.imgUrl" alt="">
                    </div>
                    <p class="home-title">{{val.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>    
</template>
<script>
    export default {
        name:'HomeIcons',
        data () {
            return {
                iconList:[{
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'景点门票'
                },{
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'一日游'
                },{
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'必游榜单'
                },{
                    id:'004',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'冲浪'
                },{
                    id:'005',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'BBQ'
                },{
                    id:'006',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'七日游'
                },{
                    id:'007',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'欢乐谷'
                },{
                    id:'008',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'动物园'
                },{
                    id:'009',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'夏日玩水'
                },{
                    id:'03',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'夏日玩水'
                }],
                swiperOption: {

                }
            }
        },
        props:{
            iconlist:Array
        },
        computed: {
            pagesAll () {
                const pages = []
                this.iconlist.forEach((item,index) => {
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                    
                })
                return pages
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .icon-box
        height: 0
        overflow : hidden
        padding-bottom: 1.6rem
        .wraper 
            height: 100%
            overflow : hidden
            padding-bottom: 1.6rem
            .icon
                width:25%
                height 0.8rem
                float :left
                .home-icon
                    box-sizing :border-box
                    padding:.04rem
                    overflow :hidden
                    text-align :center
                    .icon-img
                        width:.55rem
                .home-title
                    font-size :.14rem        
                    text-align :center
            
</style>
