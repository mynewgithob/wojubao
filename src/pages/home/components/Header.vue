<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont bck-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe615;</span> 
       输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont right-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: "HomeHeader"
  };
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .header
    display:flex
    background:$wnbck
    height:$headerHeight
    line-height :$headerHeight
    font-size :.16rem
    color:#fff
  .header-left 
    width:.38rem
    float: left
    .bck-icon
      text-align :center
  .header-input
    flex:1 
    margin-top:.06rem
    border-radius :.06rem
    height 0.31rem
    line-height .31rem
    background:#fff
    color:#ccc
    text-align :center
  .header-right
    width:.62rem
    float:right
    text-align:center
    color #fff
    .right-icon
      font-size :.12rem
  
</style>
