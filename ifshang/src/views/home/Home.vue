<template>
  <div class="home">
   <Headers></Headers>
   <Nav></Nav>
   <List></List> 
   <div class="cart" @click="isclick">
     <img src="../../assets/images/cart.png" alt="">
     <div class="dot">
   <span>
     {{counts}}
     </span> 
     </div>
   </div>
  </div>
</template>
 
<script>
 import Headers from './header'
 import Nav from './nav'
 import List from './list'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
   Headers:Headers,
   Nav:Nav,
   List:List
  },
  methods:{
    isclick(){
      this.$router.push({
      path:'/about'
      })
      
    }
  },
  computed:{
       ...mapState(['lists']),
     counts(){
      return this.lists.reduce((toale,good)=>{
        return toale+good.count
      },0)
    }
  }
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  html,body,#app,.home{
    width: 100%;
    height: 100%;
  }
  .home{
    position: relative;
  
  } 
   .cart{
     position: relative;
     width: 50px;
     height: 50px;
     line-height: 50px;
     text-align: center;
     position: fixed;
     background:lightblue;
    border-radius: 50%;
    bottom: 50px;
    left: 20px;
   } 
  .cart img{
       width: 70%;
       height: 70%;
       margin-bottom:10px;
     }
     .cart .dot{
       width: 15px;
       height: 15px;
       background: red;
       position: absolute;
       top: -5px;left: 0;
       border-radius:50%; 
     }
     .cart .dot span{
       position: absolute;
       top: -18px;
       right: 3px;
       font-size: 12px;
       color:#fff; 
     }
</style>