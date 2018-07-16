<template>
    <div class="box">
        <p class="perfict">猜你喜欢</p>
        <div class="mp-list" v-for="(item,index) in list" :key="item.id">
            <div class="listImg">
                <img class="mp-img" :src="item.imgUrl" alt="">
            </div>
            <div class="desc">
                <p class="desc-name">{{item.name}}</p>
                <p class="desc-ription">{{item.desc}}</p>
                <p class="desc-ription"><span>￥</span><span class="desc-price">{{item.price}}</span>起<span class="desc-address">{{item.address}}</span></p>
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
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                    name:'成都极地海昌公园',
                    desc:"16591条评论",
                    address:'双流县',
                    price:'99'
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                    name:'成都极地海昌公园',
                    desc:"16591条评论",
                    address:'双流县',
                    price:'99'
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                    name:'成都极地海昌公园',
                    desc:"16591条评论",
                    address:'双流县',
                    price:'99'
                },{
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                    name:'成都极地海昌公园',
                    desc:"16591条评论",
                    address:'双流县',
                    price:'99'
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
        font-size:$fontSize18
        margin-left:.1rem
        margin-bottom .1rem
        
    .mp-list
        display :flex
        margin-left:.1rem
        margin-bottom .1rem
        .listImg
            width :1rem
            height:1rem
            margin-right:.1rem
            .mp-img
               width:1rem 
               height:1rem
        .desc
            flex-grow:1
        .desc>p
            font-size :$fontSize16
        .desc-name
            margin-top:.1rem
        .desc-ription
            margin-top:.1rem
            position :relative
            .desc-price
                color:#ff8300
                font-size :.28rem
            .desc-address
                position:absolute
                right:.1rem
                bottom:0

</style>
