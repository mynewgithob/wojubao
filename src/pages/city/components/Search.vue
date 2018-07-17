<template>
   <div>
       <div class="header">
           <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或字母">
       </div>
       <div class="search-content" v-show="keyword">
           <ul>
               <li class="item" v-for='item of list' :key='item.id' @click='hanleCity (item.name)'>{{item.name}}</li>
               <li class="nodata" v-show="noData">没有搜索到匹配数据</li>
           </ul>
       </div>
   </div>
</template>
<script>
    export default{
        name:'headerCity',
        data () {
            return {
                keyword:'',
                timer:null,
                list:[]
            }
        },
        props: {
            city: Object
        },
        methods : {
            hanleCity (city) {
                this.$store.dispatch('changeCity',city)
                this.$router.push('/')
            }
        },
        computed : {
            noData(){
                return !this.city.length
            }
        },
        watch: {
            keyword () {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list = []
                    return 
                }
                this.timer = setTimeout(() => {
                    const cityList = []
                    for(let i in this.city) {
                        this.city[i].forEach((value) => {
                            if(value.spell.indexOf(this.keyword) > -1 ||
                                value.name.indexOf(this.keyword) > -1) {
                               cityList.push(value)
                            }
                        });
                    }
                    this.list = cityList
                },100)
            }
        }
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
    .search-content
        z-index 1
        position absolute
        top .86rem
        left 0
        right 0
        bottom 0
        background #cccccc
        .item 
            color #666
            line-height .2rem
            padding-left .1rem
            font-size $fontSize16
            color #666
            background #ffffff
        .nodata
            font-size $fontSize16
            color #666
            background #ffffff
            padding-left  .1rem
            line-height .2rem
</style>
