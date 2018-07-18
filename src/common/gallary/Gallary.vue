<template>
    <div class="gallary" @click='hanleGallaryClose'>
        <div class="gallary-banner">
            <swiper :options="swiperOption">
                <swiper-slide v-for='(item,index) in imgs' :key='index'>
                    <img class="swiper-img gallary-img" :src="item" alt="去哪儿门票" style="opacity: 1;">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>    
</template>
<script>
    export default {
        name: 'GallaryBanner',
        props: {
            imgs:Array
        },
        data () {
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    paginationType:'fraction',
                    loop: false,
                    observeParents:true,
                    observer:true
                }
            }
        },
        methods: {
            hanleGallaryClose () {
                this.$emit('close')
            }
        }
    }
</script>
<style lang='stylus' scoped>
.gallary 
    z-index 99
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background #000
    display flex
    flex-direction column
    justify-content center
    .gallary-img
        width 100%
    .swiper-pagination
        bottom -1rem
        color #ffffff
    .swiper-container
        overflow inherit
        font-size .12rem

</style>
