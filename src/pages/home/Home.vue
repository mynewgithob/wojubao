<template>
    <div>
        <home-header></home-header>  
        <head-swiper></head-swiper>
        <head-icons></head-icons>
        <head-love></head-love>
        <head-where></head-where>
    </div>    
</template>
<script>
import HomeHeader from './components/Header'
import HeadSwiper from './components/HeadSwiper'
import HeadIcons from './components/HeadIcons'
import HeadLove from './components/HeadLove'
import HeadWhere from './components/HeadWhere'
export default {
    name:'home',
    components:{
        HomeHeader,
        HeadSwiper,
        HeadIcons,
        HeadLove,
        HeadWhere
    }
}
</script>
<style>

</style>

