<template>
   <div class="box" ref='wrapper'>
       <div>
            <div class="header-list">
                <div class="header-name border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-box"><div class="button">北京</div></div>
                </div>
            </div>
            <div class="header-list border-topbottom">
                <div class="header-name">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-box"><div class="button">北京</div></div>   
                    <div class="button-box"><div class="button">北京</div></div>
                    <div class="button-box"><div class="button">北京</div></div>
                    <div class="button-box"><div class="button">北京</div></div>
                    <div class="button-box"><div class="button">北京</div></div>
                    <div class="button-box"><div class="button">北京</div></div>
                </div>
            </div>
            <div class="header-list border-topbottom">
                <div class="header-name">
                    A
                </div>
                <div class="city-name">
                    <ul class="city-list">
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                </div>
                <div class="header-name">
                    B
                </div>
                <div class="city-name">
                    <ul class="city-list">
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                </div>
                <div class="header-name">
                    C
                </div>
                <div class="city-name">
                    <ul class="city-list">
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                </div>
                 <div class="header-name">
                    D
                </div>
                <div class="city-name">
                    <ul class="city-list">
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                        <li>成都</li>
                    </ul>
                </div>
            </div>
       </div>
   </div>
</template>
<script>
import Bscroll from 'better-scroll'
    export default{
        name:'headerlist',
        mounted(){
            this.scroll=new Bscroll(this.$refs.wrapper)
        }
    }
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
 
    .border-topbottom
        &:before
            border-top .01rem solid #ccc
        &:after 
            border-bottom .01rem solid #ccc
    .box
        overflow hidden   
        position absolute
        top .86rem
        left 0
        right 0
        bottom 0
    .header-name
        font-size $fontSize16
        background #f2f2f2
        line-height .26rem
        padding-left .1rem
    .button-list
        padding .1rem .3rem .1rem .1rem
        overflow hidden
        .button-box
            width 33.33%
            float left
            box-sizing border-box
            .button
                border-radius .06rem
                padding .04rem .1rem
                margin .02rem .04rem .02rem 0
                border .01rem solid #ccc
                text-align center
                font-size $fontSize16
    .city-list
        font-size $fontSize16
        padding-left .1rem
        line-height .26rem  


</style>
