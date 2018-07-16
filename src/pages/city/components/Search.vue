<template>
   <div>
       <div class="header">
           <input class="search-input" type="text" placeholder="输入城市名字">
       </div>
   </div>
</template>
<script>
    export default{
        name:'headerCity'
    }
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .header
        line-height $headerHeight
        height $headerHeight
        text-align center
        color #ffffff
        background $wnbck
        font-size $fontSize16
        padding 0 .1rem
        .search-input
            width 100%
            text-align center
            border-radius .04rem
            font-size .14rem
            height:.3rem
            line-height .3rem
            padding 0 .1rem
            box-sizing border-box
            color #666
</style>
