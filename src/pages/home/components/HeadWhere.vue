<template>
    <div class="box">
        <p class="perfict">周末去哪儿</p>
        <div class="mp-list" v-for="item in list" :key="item.id">
            <div class="listImg">
                <img class="mp-img" :src="item.imgUrl" alt="">
            </div>
            <div class="desc">
                <p class="desc-name">{{item.title}}</p>
                <p class="desc-ription">{{item.desc}}</p>
            </div>
        </div>
    </div>    
</template>
<script>
    export default {
        name:'HeadLove',
        props:{
            list:Array
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
    margin-top .1rem
    .perfict
        font-size $fontSize18
        background $bckf2
        padding .1rem 0 .1rem .1rem
    .mp-list
        margin-bottom .1rem
        .listImg
            width :100%
            margin-right:.1rem
            .mp-img
               width:100%
        .desc
            margin-left .1rem
        .desc>p
            font-size :$fontSize16
        .desc-name
            margin-top:.1rem
        .desc-ription
            margin-top:.1rem

</style>
