<template>
    <div class="banner-box">
        <div @click='hanleGallaryClick'>
            <div class="banner">
                <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" alt="">
            </div>  
            <div class="banner-bottom">
                <div class="banner-title">
                    成都海昌极地海洋公园
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe719;</span>
                    30
                </div>
            </div>
        </div>
        <gallary-banner @close='hanleClose' :imgs='imgs' v-show='gallaryFlag'></gallary-banner>
    </div>    
</template>
<script>
import GallaryBanner from 'common/gallary/Gallary'
    export default {
        name: 'DetailBanner',
        components: {
            GallaryBanner
        },
        data () {
            return {
                gallaryFlag: false,
                imgs:[
                    'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_r_800x800_fa912897.jpg',
                    'http://img1.qunarzz.com/sight/p0/1612/c1/c14c2639b55cf054a3.img.jpg_r_800x800_aea4694a.jpg'
                ]
            }
        },
        methods : {
            hanleGallaryClick () {
                this.gallaryFlag = true
            },
            hanleClose () {
                this.gallaryFlag = false
            }
        }
    }
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl';
.banner-box 
    position relative    
    .banner
        overflow hidden
        height 0
        padding-bottom 2.06rem
        .banner-img
            width 100%
    .banner-bottom 
        position absolute
        left 0
        right 0
        bottom 0
        height .3rem
        display flex
        color #ffffff
        background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
        .banner-title
            font-size $fontSize16
            line-height .3rem
            padding-left .2rem
            flex 1
        .banner-number
            height .2rem
            line-height .2rem
            margin-right .2rem
            margin-top .05rem
            font-size .12rem
            padding 0 .2rem
            background rgba(0, 0, 0, .8)        
            border-radius .1rem
            .banner-icon
                font-size .12rem
</style>