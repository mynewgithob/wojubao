<template>
      <ul class="aple">
          <li class="item" v-for='(item,key) of city' :key='item.id' @click='change'>{{key}}</li>
      </ul>
</template>
<script>
    export default{
        name:'headerAple',
        props:{
            city:Object
        },
        methods:{
            change(e){
                this.$emit('hanleChangeCity',e.target.innerHTML)
            }
        }
    }
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .aple
        position absolute
        right 0
        top 1.18rem
        width .2rem
        display flex
        flex-direction column
        justify-content center
        color $wnbck
        font-size $fontSize16
        text-align center
        line-height .2rem


</style>
