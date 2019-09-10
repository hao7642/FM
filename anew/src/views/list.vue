<template>
  <div class="list">
    <Header title="加班/休假"></Header>
    <div class="nav_top">
      <div
        v-for="(item,index) in list"
        :key="index"
        :class="{active:flage[index]}"
        @click="islist(index)"
      >
        <div>
          <span :class="item.icofn"></span>
          <span class="icons">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="type_nav">
      <span :class="{colr:type[0]}" @click="istype(0)">加班</span>
      <span class="xiu" :class="{colr:type[1]}" @click="istype(1)">休假</span>
    </div>
    <div v-if="lists.length>0">
      <div class="listbox" v-for="(item,index) in lists" :key="index" @click="isdetall(item.applicationNumber)">
      <div class="top_nav">
        <span>{{item.applicationNumber}}</span>
        <div v-if="item.status==0">
          <i class="glyphicon glyphicon-asterisk"></i>
          <span>待审批</span>
        </div>
        <div v-else-if="item.status == 1">
          <i class="glyphicon glyphicon-asterisk"></i>
          <span>已发起</span>
        </div>
        <div v-else>
          <i class="glyphicon glyphicon-asterisk"></i>
          <span>已处理</span>
        </div>
      </div>
      <div class="list_cont" >
        <div class="lists">
          <div class="list_one">
            <span>申请人:</span>
            <span>{{item.nickname}}</span>
            <span>加班日期:</span>
            <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
          </div>
          <div class="list_two" v-if="item.type==1">
            <span>加班类型:</span>
            <span>工作日加班</span>
            <span>加班时数:</span>
            <span>{{ ( (new Date(item.endTime)-new Date(item.startTime)) / 3600000 ).toFixed(1) }}</span>
          </div>
          <div class="list_two" v-else-if="item.type==2">
            <span>加班类型:</span>
            <span>假期加班</span>
            <span>加班时数:</span>
            <span>{{ ( (new Date(item.endTime)-new Date(item.startTime)) / 3600000 ).toFixed(1) }}</span>
          </div>
          <div class="list_two" v-else>
            <span>加班类型:</span>
            <span>双休日加班</span>
            <span>加班时数:</span>
            <span>{{ ( (new Date(item.endTime)-new Date(item.startTime)) / 3600000 ).toFixed(1) }}</span>
          </div>
        </div>
      </div>
    </div>
   
    </div>
     <div v-else class="empty">
没有可处理的任务
    </div>
    <div class='success'  @click="isclick()">
        <el-button type="success">发送按钮</el-button>
    </div>
    <Whmel v-show="isWhmel" @click.native="isWhmel=!isWhmel"></Whmel>
  </div>
</template>
<script>
import Header from "../components/header";
import Whmel from '../components/whmel'
export default {
  props: {},
  components: {
    Header,
    Whmel
  },
  data() {
    return {
      data:[],
        isWhmel:false,
      status_crount: 0,
      crunt_type: "overtime",
      lists: [],
      flage: [true, false, false],
      type: [true, false],
      list: [
        { id: 1, name: "待处理", 
        icofn: "glyphicon glyphicon-question-sign" },
        {
          id: 2,
          name: "已发起",
          icofn: "glyphicon glyphicon-send"
        },
        {
          id: 3,
          name: "已处理",
          icofn: "glyphicon glyphicon-ok-sign"
        }
      ]
    };
  },
  computed: {},
  methods: {
    isdetall(id){
        this.axios.defaults.headers.common['token']=localStorage.getItem('token')
      this.axios.get(`http://localhost:3000/api/apply/overtime?applicationNumber=${id}`).then(
        res=>{
          this.$router.push({
            path:'/home',
            query:{
           data:res.data
          }
          })
        }
      ).catch();
    },
      isclick(){
      this.isWhmel=!this.isWhmel
      },
    istype(data) {
      for (var i = 0; i < this.type.length; i++) {
        if (i == data) {
          this.$set(this.type, i, true);
        } else {
          this.$set(this.type, i, false);
        }
      }
      this.crunt_type = data == 0 ? "overtime" : "vacation";
      this.changelist(this.status_crount, this.crunt_type);
    },
    islist(index) {
      for (var i = 0; i < this.flage.length; i++) {
        if (i == index) {
          this.$set(this.flage, i, true);
        } else {
          this.$set(this.flage, i, false);
        }
      }
      this.status_crount = index;
      this.changelist(this.status_crount, this.crunt_type);
    },

    changelist(status, type) {
      this.axios
        .get("http://localhost:3000/api/task/list", {
          params: { status, type, create_at: 0 }
        })
        .then(res => {
          console.log(res.data);
          //将数据存入当前组件的data中
          this.lists = res.data.data;
        });
    }
  },
  created() {},
  mounted() {
    this.changelist(0, "overtime");
  }
};
</script>
<style scoped lang="scss">
.list {
  height: 100%;

  .nav_top {
      background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        padding: 10px;
        font-size: 25px;
      }
      .icons {
        font-size: 15px;
      }
    }
  }
  .active {
    color: darkgreen;
  }
  .type_nav {
    height: 70px;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      width: 100px;
      border: 1px solid darkgreen;
      border-radius: 15px 0 0 15px;
    }
    .xiu {
      border-radius: 0 15px 15px 0;
    }
  }
  .colr {
    background: darkgreen;
    color: wheat;
  }
  .listbox {
      background: #fff;
    width: 100%;
    padding: 0 20px;
    margin: 20px 0;
    .top_nav {
      display: flex;
      justify-content: space-between;
    }
    .list_cont {
      width: 100%;
      .lists {
        width: 100%;
        .list_one {
          padding-top: 10px;
        }
        .list_two {
          padding-top: 10px;
        }
        div {
          width: 100%;
          display: flex;
          justify-content: space-around;
          span {
            width: 23%;
            display: inline-block;
            margin-left: 15px;
          }
        }
      }
    }
  }
  .empty{
    padding: 100px;
    text-align: center;
    color: darksalmon
  }
}
</style>