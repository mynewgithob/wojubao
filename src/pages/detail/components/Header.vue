<template>
    <div>
        <router-link v-show='detailFlag' tag='div' to='/' class="detail-back">
            <div class="iconfont detail-bck-icon">&#xe624;</div>
        </router-link>
        <div class="detail-title" v-show='!detailFlag' :style='detailOpacity'>
            <router-link tag="span" to="/" class="iconfont detail-icon">&#xe624;</router-link>
            景点详情页
        </div>
    </div>    
</template>
<script>
    export default {
        name : 'DetailHeader',
        data () {
            return {
                detailFlag : true,
                detailOpacity : {
                    opacity : 0
                }
            }
        },
        methods: {
            hanleOffsetTop () {
                const top = document.documentElement.scrollTop
                console.log('s')
                if( top > 60 ){
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.detailOpacity = { opacity }
                    this.detailFlag = false
                } else {
                    this.detailFlag = true
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.hanleOffsetTop)
        },
        unmounted () {
            window.removeEventListener('scroll', this.hanleOffsetTop)
        }
    }
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles'
    .detail-back
        position absolute
        left .1rem
        top .1rem
        width .4rem
        height .4rem 
        text-align center
        line-height .4rem
        border-radius .2rem 
        background rgba(0,0,0,.8)
        .detail-bck-icon
           font-size .12rem
           color #ffffff
    .detail-title
        position fixed
        left 0
        right 0
        top 0
        height .43rem 
        line-height .43rem
        text-align center
        background $wnbck
        font-size $fontSize16
        color #fff
        .detail-icon
            position absolute
            left .1rem
            top 0
</style>
