<template>
      <ul class="aple">
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>

      </ul>
</template>
<script>
    export default{
        name:'headerAple'
    }
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .aple
        position absolute
        right 0
        top 2.58rem
        width .2rem
        display flex
        flex-direction column
        justify-content center
        color $wnbck
        font-size $fontSize16
        text-align center
        line-height .2rem


</style>
