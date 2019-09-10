<template>
    <div class="header">
        <div class="pic">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567166644748&di=e7a2f552fc47bf8b81ffac086a28c0f8&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F8c739528bfb0f96d37a52b0bff58661329fa6f04.jpg" alt="">
        </div>
       
    </div>
</template>
<script>
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

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .header{
       height:250px;
       background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567167405106&di=070739c52721d318782d0f40b8892136&imgtype=0&src=http%3A%2F%2Fp13.qhimg.com%2Ft01d4003df9c5bb8715.jpg') no-repeat;
       background-size: cover;
       background-position: center;  
       position: relative;
       .pic{
           width: 100px;
           height: 100px;
           position: absolute;
           bottom: 20px;
           left: 50%;
           transform: translate(-50%,50%);
           img{
               width: 100%;
               height: 100%;  
               border-radius: 50%;
           }
       }
    }

</style>