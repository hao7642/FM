<template>
    <div class="headers">
    <div class="list_top" @click="isgo">
         <span class="glyphicon glyphicon-menu-left"></span>
       </div>
       <div class="text">
           <span>{{title}}</span>
       </div>
       <div class="iconf">
           <span class="glyphicon glyphicon-calendar"></span>
           <span class="glyphicon glyphicon-search"></span>
       </div>
    </div>
</template>
<script>
export default {
    props:['title'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
   isgo(){
    this.$router.go(-1)
    }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.headers{
    background: white;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
    .iconf span{
        padding-left: 10px;
    }
}
</style>