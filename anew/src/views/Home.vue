<template>
  <div>
    <Header title="加班详情页"></Header>
   <keep-alive>
      <div class="homes">
      <div class="Myid"> {{list.applicationNumber}}</div>
      <div>{{list.create_at}}</div>
      <div>{{list.describes}}</div>
      <div>{{list.endTime}}</div>
      <div class="Myname">{{list.nickname}}</div>
      <div>{{list.startTime}}</div>
    </div>
   </keep-alive> 
  </div>
</template>
<script>
import Header from "../components/header";
export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {
      list: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.list = this.$route.query.data.data;
  },
  mounted() {}
};
</script>
<style scoped lang="scss">

.homes{
  height: 100%;
  padding: 10px;
    font-size: 20px;
  color:yellowgreen;
}
</style>