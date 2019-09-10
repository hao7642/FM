<template>
  <div>
    <!-- {{this.$route.query.id}} -->
    <div v-if="lists.length>0">
      <div class="list" v-for="(item,index) in lists" :key="index">
      <div class="pic">
       <img :src="item.pic" alt="">
      </div>
      <div class="text">
        <div class="name">
          {{item.name}}
        </div>
        <div class="buyCount">
          单价:¥<span>
            {{item.buyCount}}
               </span>
        </div>
        <div class="comput">
          <button @click="sublist(item.id)">-</button>
          <div class="pics">{{item.count}}</div>
          <button @click="addlist(item.id)">+</button>
          <button @click="dellist(index)" class="del">删除</button>
        </div>

      </div>
    </div>
    </div>
    <div class="entmy" v-else>
      <div class="picsl">
         <img src="../../assets/images/没有更多.png" alt="">
      </div>
     
      <span>购物车空空如也。。。。</span>
    </div>

     
    <div class="count_price">
      <div class="counts">
      总数:<span>{{counts}}</span>件
      </div>
      <div class="prices">
        总价:<span>{{prices}}</span>元
      </div>
     <div class="currecy" @click="iscommon"><span>结算</span></div>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  props:{

  },
  components:{
  },
  data(){
    return {

    }
  },
  computed:{
      ...mapState(['lists'])  ,
    counts(){
      return this.lists.reduce((toale,good)=>{
        return toale+good.count
      },0)
    },
    prices(){
      return this.lists.reduce((toale,good)=>{
        return toale+good.count*good.buyCount
      },0)
    }
  },
  methods:{
    ...mapMutations(['addlist','sublist','dellist']),
    iscommon(){
      this.$router.push('/common')
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
.comput{
  display: flex;
  padding-top: 10px;
  button{
    padding: 0 10px;
    margin: 0 5px;
    border: none;
    outline: none
  }
 .del{

    color: red;
  }
}
.count_price{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(0,0,0,.3);
  display: flex;
  line-height: 50px;
  padding: 5px;
  font-size: 18px;
  div{
font-size: 20px;
font-weight:bold;
  }
  span{
    font-weight:500;
    color: red;
  }
  .currecy{
    width: 120px;
    height:100%;
    line-height: 50px;
    text-align: center;
    position: absolute;
    right: 0px;
    top: 0;
    bottom: 0;
    background:aquamarine;
   
    span{
      margin-top: 10px;
      font-weight: normal; 
      color: #fff;
    }
  }
}
.entmy{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding-top: 200px;
  .picsl{
    width: 200px;
    height:150px ; 
      padding-left: 100px;
    img{
      text-align: center;
      width: 100%;
      height: 100%;
    }
  }

}
</style>