<template>
  <div class="user">
    <div>
      用户名:
      <el-input v-model="phone" placeholder="请输入用户名"></el-input>
    </div>
    <div>
      密码:
      <el-input v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <el-button class="but" type="info" @click="isbutt">登录</el-button>
  </div>
</template>
<script>

export default {
  name: "user",
  props: {
      
  },
  components: {},
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    isbutt() {
        //引入axios
    this.axios
        .post("http://localhost:3000/api/login", {
          phone: this.phone,
          password: this.password
        })
        .then(res => {
          if(res.data.code==1){
              localStorage.setItem('token',res.data.token)
              this.$router.push('/list')
          }
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.but {
  margin-top: 20px;
  width: 90%;
  margin-left: 20px;
}
</style>