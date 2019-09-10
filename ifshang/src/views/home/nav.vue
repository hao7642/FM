<template>
  <div class="navs">
    <div class="title">爱时尚精品屋</div>
    <div class="text">
        公告：欢迎观临，流行爆款库存有限请尽快下单，谢谢
    </div>
      <div class="list">
      <div class="list-nav" v-for="(item,index) in list" :class="{active:actives[index]}" :key="index" @click="istop(index)">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import Vues from '@/Vues/Vues'
export default {
  name: "navs",
  props: {},
  components: {},
  data() {
    return {
       list: [
        { id: 1, name: "价格升序↑" },
        { id: 2, name: "价格降序↓" },
        { id: 3, name: "销量升序↑" },
        { id: 4, name: "销量降序↓" }
      ],
      actives:[true,false,false,false]
    };
  },
  computed: {
  },
  methods: {
       istop(index){
         Vues.$emit('sondst',index)
         for(var i=0;i<this.actives.length;i++){
           if(index==i){
             this.$set(this.actives,i,true)
           }else{
             this.$set(this.actives,i,false)
           }
         }
       }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.navs{
    width: 100%;
    height: 150px;
   margin-bottom: 50px;
   .title{
       width: 100%;
       height: 50px;
       font-size: 20px;
       font-weight: bold;
       line-height: 50px;
       padding: 20px 0px;
       text-align: center;
   }
   .text{
       padding: 10px;
       color: darkgrey;
       text-align: center;
   }
  .list {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    .list-nav {
      text-align: center;
      margin: 10px;
     }
   }
   .active{
     color: red;
   }
}


</style>