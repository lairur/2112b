<template>
    <div>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户列表</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 卡片 -->
      <el-card class="box-card">
        <el-table
          :data="copyList"
          style="width: 100%"
         
        >
          <el-table-column
            prop="user_name"
            label="姓名"
            width="180"
          >
          </el-table-column>
          <el-table-column prop="create_time" label="注册日期" width="180">
          </el-table-column>
          <el-table-column prop="city" label="注册地址"> </el-table-column>

          <el-table-column prop="admin" label="权限"> </el-table-column>
        </el-table>
  
        <!-- 分页 -->
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20">
      </el-pagination>
      </el-card>
    </div>
  </template>
    <script>
  import axios from "axios";
  export default {
    data() {
      return {
        
          pagenum: 1,
          pagesize: 6,
   
          tableData: [],
          copyList: [],
        
      };
      },
      copyList() {
        return this.tableData.slice(this.pagesize * (this.pagenum - 1), this.pagesize * this.pagenum)
      
    },
      methods: {
          handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
              this.pagesize = val
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pagenum = val
        }
    },
    created() {
      axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then((res) => {
          console.log(res);
          this.tableData = res.data.data
        this.copyList=res.data.data
      });
    },
  };
  </script>
    