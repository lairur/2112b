<template>
  <div class="home">
    <el-card class="box-card">
      <!-- 新增按钮 -->
      <el-button type="primary" @click="dialogVisible = true"
        >新增todolist</el-button
      >

      <!-- 日历 -->

      <el-calendar>
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{  data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(1).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p>


          <ul>
            <li v-for="(item,index) in $store.state.list" :key="index">
              <!-- 已完成 -->
              <div 
              v-if="item.time == data.day && item.status == '已完成'"
              class="finish"
              @click="edit(index)"
              >
              {{item.name}}

              </div>
              <!-- 未完成 -->
              <div
              v-if="item.time == data.day && item.status == '未完成'"
              class="no"
              @click="edit(index)"
              >
              {{item.name}}
              </div>
            </li>

          </ul>

        </template>
      </el-calendar>

      <!-- 新增TODOlist弹出框 -->
      <el-dialog title="添加todolsit" :visible.sync="dialogVisible">
      <el-form
        :model="ruleForm"
        label-width="120px"
        ref="ruleForm"
      >
        <el-form-item label="事件名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="代办事项时间" prop="time">
          <el-date-picker
            v-model="ruleForm.time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="ruleForm.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>




    <!-- 编辑的弹出框 -->


    <el-dialog title="编辑修改" :visible.sync="dialog">
      <el-form
        :model="ruleForm1"
        label-width="120px"
        ref="ruleForm"
      >
        <el-form-item label="事件名称" prop="name">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item label="代办事项时间" prop="time">
          <el-date-picker
            v-model="ruleForm1.time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="ruleForm1.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="modify"
          >确 定</el-button
        >
      </div>
    </el-dialog>


    </el-card>
  </div>
</template>

<style>
.box-card {
  width: 100%;
}
</style>

<script>


export default {
  data() {
    return {
    
      dialogVisible: false,
      // 新增
      ruleForm: {
        name: "",
       time:'',
        status: "",
      },
      todoList:[],
      index:-1,

      // 编辑
      ruleForm1: {
        name: "",
       time:'',
        status: "",
      },
      dialog:false
    };
  },
  methods:{
    // 添加事件
    add(ruleForm){
      
      // 时间戳转时间
      let date = new Date(this.ruleForm.time);
          let y = date.getFullYear();
          let m = date.getMonth() + 1;
          m = m < 10 ? "0" + m : m;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          let time = y + "-" + m + "-" + d;
          console.log(this.ruleForm.time);
      

      let obj={
        name:this.ruleForm.name,
        time:time,
        status:this.ruleForm.status

      }
      this.$store.commit('add',obj)
      // 查看是否添加进去
      console.log(this.$store.state.list);
      this.ruleForm={}
      this.dialogVisible=false

    },
    // 编辑回填
    edit(index){
      this.dialog=!this.dialog
      this.index=index
      this.ruleForm1.name=this.$store.state.list[index].name
      this.ruleForm1.status=this.$store.state.list[index].status
      this.ruleForm1.time=this.$store.state.list[index].time

    },
    // 修改 提交
    modify(){
      this.$store.commit('modify',{
        ...this.ruleForm1,
        index:this.index
      })

      this.dialog=false
    }


  
  }

};
</script>
<style>
li{
  list-style: none;
}
.is-selected {
    color: #1989FA;
  }

.finish {
 width: 120px;
 height: 30px;
  text-align: center;
  background-color: blue;
  color: #fff;
 
}
.no {
  width: 120px;
 height: 30px;
  text-align: center;
  background-color: red;
  color: #fff;
}

</style>
