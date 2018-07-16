<template>
    <div>
        <home-header></home-header>  
        <head-swiper :list='swiperList'></head-swiper>
        <head-icons :iconlist="iconlist"></head-icons>
        <head-love :list='recommendList'></head-love>
        <head-where :list='weekendList'></head-where>
    </div>    
</template>
<script>
import HomeHeader from './components/Header'
import HeadSwiper from './components/HeadSwiper'
import HeadIcons from './components/HeadIcons'
import HeadLove from './components/HeadLove'
import HeadWhere from './components/HeadWhere'
import axios from 'axios'
export default {
    name:'home',
    components:{
        HomeHeader,
        HeadSwiper,
        HeadIcons,
        HeadLove,
        HeadWhere
    },
    data(){
        return {
            iconlist:[],
            swiperList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getInforList(){
            axios.get('/static/mock/index.json')
            .then(this.getInformation)
        },
        getInformation(res){
            console.log(res)
            this.iconlist=res.data.data.iconList
            this.swiperList=res.data.data.swiperList
            this.recommendList=res.data.data.recommendList
            this.weekendList=res.data.data.weekendList
        }
    },
    mounted(){
        this.getInforList()
    }
}
</script>
<style>

</style>

