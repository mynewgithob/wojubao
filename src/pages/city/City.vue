<template>
   <div>
       <header-city></header-city>
       <header-search :city='cities'></header-search>
       <header-list :city='cities' :hot='hotCityes' :letter='letter'></header-list>
       <header-aple @hanleChangeCity="hanleChangeClick" :city='cities'></header-aple>
   </div>
</template>
<script>
import axios from 'axios'
import HeaderCity from './components/Header'
import HeaderSearch from './components/Search'
import HeaderList from './components/List'
import HeaderAple from './components/Aplebet'
    export default{
        name:'city',
        data(){
            return {
                hotCityes:[],
                cities:{},
                letter:''
            }
        },
        components:{
            HeaderCity,
            HeaderSearch,
            HeaderList,
            HeaderAple
        },
        methods:{
            getCityInfo(){
                axios.get('/static/mock/city.json')
                .then(this.hanleCity)
            },
            hanleCity(res){
                if(res.data.ret){
                    this.hotCityes = res.data.data.hotCities
                    this.cities = res.data.data.cities
                }
            },
            hanleChangeClick(letter){
                this.letter = letter
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>
<style>

</style>
