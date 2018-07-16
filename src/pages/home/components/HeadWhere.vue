<template>
    <div class="box">
        <p class="perfict">周末去哪儿</p>
        <div class="mp-list" v-for="(item,index) in list" :key="item.id">
            <div class="listImg">
                <img class="mp-img" :src="item.imgUrl" alt="">
            </div>
            <div class="desc">
                <p class="desc-name">{{item.name}}</p>
                <p class="desc-ription">{{item.desc}}</p>
            </div>
        </div>
    </div>    
</template>
<script>
    export default {
        name:'HeadLove',
        data(){
            return {
                list:[{
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                    name:'成都极地海昌公园',
                    desc:"成都的标志，也是现代人对老成都的记忆"
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                    name:'成都极地海昌公园',
                    desc:"成都的标志，也是现代人对老成都的记忆"
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                    name:'成都极地海昌公园',
                    desc:"成都的标志，也是现代人对老成都的记忆"
                },{
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                    name:'成都极地海昌公园',
                    desc:"成都的标志，也是现代人对老成都的记忆"
                }]
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.box
    margin-top .1rem
    .perfict
        font-size $fontSize18
        background $bckf2
        padding .1rem 0 .1rem .1rem
    .mp-list
        margin-bottom .1rem
        .listImg
            width :100%
            margin-right:.1rem
            .mp-img
               width:100%
        .desc
            margin-left .1rem
        .desc>p
            font-size :$fontSize16
        .desc-name
            margin-top:.1rem
        .desc-ription
            margin-top:.1rem

</style>
