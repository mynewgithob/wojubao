<template>
   <div>
       <div class="header">
           <router-link to='/'><span class="iconfont iconleft">&#xe624;</span></router-link>
           城市选择
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
        position relative
        .iconleft
            position absolute 
            left .1rem
            font-size $fontSize16
            color #ffffff
</style>
