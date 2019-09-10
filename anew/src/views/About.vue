<template>
  <div class="common">
    <Header title="办公室休假申请表"></Header>
    <div class="cell">
      <div>休假起始时间：</div>
      <div>
        <input type="text" v-model="startTime" @click="$refs.startTimePicker.open()" />
      </div>
    </div>
    <div class="cell">
      <div>休假截止时间：</div>
      <div>
        <input type="text" v-model="endTime" @click="$refs.endTimePicker.open()" />
      </div>
    </div>
    <div class="cell">
      <div>休假类型：</div>
      <select name id v-model="type">
        <option value="1">工作日休假</option>
        <option value="2">双休日休假</option>
        <option value="3">假期休假</option>
      </select>
    </div>
    <div class="cells">
      <div>休假事由：</div>
      <div>
        <textarea name id cols="30" rows="10" v-model="desc"></textarea>
      </div>
    </div>
    <mt-datetime-picker ref="startTimePicker" @confirm="getStartTime"></mt-datetime-picker>
    <mt-datetime-picker ref="endTimePicker" @confirm="getEndTime"></mt-datetime-picker>
    <div class="cancel-submit">
      <div class="cancel" @click="$router.go(-1)">取消</div>
      <div class="submit" @click="submit">提交</div>
    </div>
  </div>
</template>
<script>
import Header from "../components/header";
import { Toast } from "mint-ui";
export default {
  props: {},
  components: {
    Header
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      type: 2,
      desc: ""
    };
  },
  computed: {},
  methods: {
    getStartTime(startTime) {
      this.startTime = `${startTime.getFullYear()}-${startTime.getMonth() +
        1}-${startTime.getDate()} ${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`;
    },
    getEndTime(endTime) {
      if (new Date(endTime) - new Date(this.startTime) < 0) {
        Toast({ message: "时间有误", duration: 3000 });
        return;
      } else {
        this.endTime = `${endTime.getFullYear()}-${endTime.getMonth() +
          1}-${endTime.getDate()} ${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`;
      }
    },
    submit() {
      console.log({
        type: this.type,
        startTime: this.startTime,
        endTime: this.endTime,
        describe: this.desc,
        annex: ""
      });
      this.axios.defaults.headers.common["token"] = localStorage.getItem(
        "token"
      );
      this.axios
        .post("http://localhost:3000/api/apply/vacation", {
          type: this.type,
          startTime: this.startTime,
          endTime: this.endTime,
          describe: this.desc,
          annex: ""
        })
        .then(res => {
          console.log(res.data);
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.cell {
  display: flex;
  padding: 10px;
  input {
    border: none;
    outline: none;
  }
}
.cells {
  padding: 10px;
  div {
    padding-top: 10px;
  }
}
.cancel-submit {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  position: absolute;
  bottom: 0;
  div {
    flex: 1;
  }
  .cancel {
    background: white;
  }
  .submit {
    background: darkgreen;
    color: wheat;
  }
}
</style>