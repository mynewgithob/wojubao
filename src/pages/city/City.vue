<template>
   <div>
       <header-city></header-city>
       <header-search></header-search>
       <header-list></header-list>
       <header-aple></header-aple>
   </div>
</template>
<script>
import HeaderCity from './components/Header'
import HeaderSearch from './components/Search'
import HeaderList from './components/List'
import HeaderAple from './components/Aplebet'
    export default{
        name:'city',
        components:{
            HeaderCity,
            HeaderSearch,
            HeaderList,
            HeaderAple
        }
    }
</script>
<style>

</style>
