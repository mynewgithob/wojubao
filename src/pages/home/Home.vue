<template>
    <div>
        <home-header></home-header>  
        <head-swiper></head-swiper>
        <head-icons></head-icons>
    </div>    
</template>
<script>
import HomeHeader from './components/Header'
import HeadSwiper from './components/HeadSwiper'
import HeadIcons from './components/HeadIcons'
export default {
    name:'home',
    components:{
        HomeHeader,
        HeadSwiper,
        HeadIcons
    }
}
</script>
<style>

</style>

