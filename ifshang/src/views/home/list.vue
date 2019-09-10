<template>
  <div class="pic-text">

    <div class="list" v-for="(item,index) in list" :key="index">
      <div class="pic">
       <img :src="item.pic" alt="">
      </div>
      <div class="text">
        <div class="name">
          {{item.name}}
        </div>
        <div class="price">
         已售:{{item.price}}件
        </div>
        <div class="buyCount">
          单价:¥<span>
            {{item.buyCount}}
               </span>
        </div>
      </div>
      <div class="btn">
        <span @click="addToCrte(item)">加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vues from '@/Vues/Vues'
import {mapMutations} from 'vuex'
export default {
  name: "list",
  data() {
    return {
     list:[]
    };
  },
  created(){
    axios.get('/shoppinglist').then(res=>{
     console.log(res.data.goodList)
     this.list=res.data.goodList
    })
  },
  methods:{
      ...mapMutations(['addToCrte'])
  },
  computed: {
    
  },
mounted(){
  Vues.$on('sondst',(index)=>{
    if(index==0){
      this.list.sort((listA,listB)=>{
        return listA.price-listB.price
      })
    }else if(index==1){
      this.list.sort((listA,listB)=>{
        return listB.price-listA.price
      })
    }else if(index==2){
      this.list.sort((listA,listB)=>{
        return listA.buyCount-listB.buyCount
      })
    }else if(index==3){
      this.list.sort((listA,listB)=>{
           return listB.buyCount-listA.buyCount
      })
    }
  })
}
};
</script>
<style lang="scss">
.list{
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  .pic{
    width: 30%;
    height: 100px;
    padding: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .text{
    width: 70%;
    .name{
      padding: 10px 0;
      overflow: hidden;
       text-overflow: ellipsis; 
       white-space: nowrap;
       font-size: 18px;
       font-weight: bold;
    }
    .price{
        padding: 5px 0;
        color: darkgrey;
    }
    .buyCount{
        padding: 5px 0;
       span{
         color: red;
         font-weight: bold;
       }
    }
  }
  .btn{
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: red;
    color: aliceblue;
  }
}

</style>