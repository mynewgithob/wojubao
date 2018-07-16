<template>
<div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for='item in list' :key='item.id'>
            <img class="swipe-img" :src="item.imgUrl" alt="去哪儿门票" style="opacity: 1;">
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
    },
    props:{
        list:Array
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
