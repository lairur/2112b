<template>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销量">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="食品地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="食品Id">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.description }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="name"> </el-table-column>
        <el-table-column label="食品介绍" prop="description"> </el-table-column>
        <el-table-column label="食品评分" prop="rating"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small">添加食品</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
      >
      </el-pagination>
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
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pagenum = val;
      },
    },
    created() {
      axios
        .get(
          "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined"
        )
        .then((res) => {
          console.log(res);
          this.tableData = res.data;
        });
    },
  };
  </script>
  <style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  </style>