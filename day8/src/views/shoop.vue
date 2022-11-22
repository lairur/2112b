<template>
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="详细详细地址" prop="address">
          <el-input v-model="ruleForm.addres"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="moble">
          <el-input v-model="ruleForm.moble"></el-input>
        </el-form-item>
        <el-form-item label="店铺简介" prop="jies">
          <el-input v-model="ruleForm.jies"></el-input>
        </el-form-item>
        <el-form-item label="店铺标语" prop="slogan">
          <el-input v-model="ruleForm.slogan"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类" prop="sort">
          <el-select v-model="ruleForm.sort" placeholder="请选择活动区域">
            <el-option label="快餐便当/简餐" value="shanghai"></el-option>
            <el-option label="异国料理/日韩料理" value="beijing"></el-option>
          </el-select>
  
          <el-form-item label="店铺特点">
            <el-form-item label="品牌保证" prop="ensure">
              <el-switch v-model="ruleForm.ensure"></el-switch>
            </el-form-item>
            <el-form-item label="蜂鸟专送" prop="send">
              <el-switch v-model="ruleForm.send"></el-switch>
            </el-form-item>
            <el-form-item label="新开店铺" prop="xin">
              <el-switch v-model="ruleForm.xin"></el-switch>
            </el-form-item>
            <el-form-item label="外卖保" prop="bao">
              <el-switch v-model="ruleForm.bao"></el-switch>
            </el-form-item>
            <el-form-item label="准时达" prop="time">
              <el-switch v-model="ruleForm.time"></el-switch>
            </el-form-item>
            <el-form-item label="开发票" prop="Inv">
              <el-switch v-model="ruleForm.Inv"></el-switch>
            </el-form-item>
          </el-form-item>
        </el-form-item>
        <el-form-item label="营业时间" required>
          <el-col :span="11">
            <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
            >
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime,
              }"
            >
            </el-time-select>
          </el-col>
        </el-form-item>
  
        <!-- 上传店铺头像 -->
        <el-form-item label="上传店铺头像">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
  
  
  
        <el-form-item label="上传营业执照">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
  
  
        <el-form-item label="上传餐饮服务许可证">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
  
  
  
  
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        ruleForm: {
          name: "",
          address: "",
          moble: "",
          jies: "",
          slogan: "",
          sort: "",
          ensure: "",
          send: "",
          xin: "",
          bao: "",
          time: "",
          Inv: "",
          startTime: "",
          endTime: "",
        },
        rule: {
          name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
          address: [
            { required: true, message: "请输入店铺名称", trigger: "blur" },
          ],
          moble: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
          jies: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
          slogan: [
            { required: true, message: "请输入店铺名称", trigger: "blur" },
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        },


        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    
    },
    created() {
      axios.get("https://elm.cangdu.org/v1/cities?type=guess").then((res) => {
        console.log(res);
      });
    },
  };
  </script>
  <style>
  
  
  .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  
    
  </style>