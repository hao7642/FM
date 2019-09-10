<template>
    <div class="Whmel">
        <div class="Whmel_meng">
            <div class="Whmel_nav">
                <div @click="isovertime()">
                    <i class="glyphicon glyphicon-briefcase"></i>
                    <span >加班</span>
                </div>
           <div @click="istak()">
            <i class="glyphicon glyphicon-globe"></i>
           <span >休假</span>
           </div>
       
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name:'Whmel',
    methods:{
        isovertime(){
            this.$router.push('/common')
        },
        istak(){
            this.$router.push('/about')
        }
    }
}
</script>
<style scoped lang="scss">
.Whmel{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    left: 0;
    .Whmel_meng{
        width: 100%;
        height: 120px;
        background: #fff;
        position: absolute;
        bottom: 0px;
      
        .Whmel_nav{
  display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px;
        div{
            flex: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            // .glyphicon{
            //     width: 20px;
            //     height: 20px;
            //     line-height: 20px;
            //     border-radius: 50%;
            //     background: chartreuse;
            //     font-size: 12px;
            // }
        }
        }
    }
}
</style>