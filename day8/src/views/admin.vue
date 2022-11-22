<template>
    <div class="conten">
        <h2>管理员信息</h2>
        <div>
            <p class="one">姓名：</p>
            <p class="one">注册时间：</p>
            <p class="one">管理员权限：</p>
            <p class="one">管理员Id：</p>
            

            <el-form-item label="更换头像">
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
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>
.content{
    width: 1000px;
    height: 600px;
    background-color: rgb(129, 38, 38);

}
.one{
    margin-top: 10px;
}

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