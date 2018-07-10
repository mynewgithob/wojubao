<template>
<div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide>
            <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg" alt="去哪儿门票" style="opacity: 1;">
        </swiper-slide>
        <swiper-slide>
            <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1806/38/ab7ab660adc68602.jpg_750x200_e8fde60e.jpg" alt="去哪儿门票" style="opacity: 1;">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default {
    name: 'HeadSwiper',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay:3000
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active //穿透
    background :#fff
.wrapper
    overflow :hidden
    width :100%
    height :0
    padding-bottom: 26%
    background :#ccc
.swipe-img 
    width:100%;
    height:1.1rem;
</style>
