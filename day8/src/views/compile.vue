
<template>
    <div id="app">
      <!--1、添加useCustomImageHandler和@image-added="handleImageAdded"-->
      <vue-editor
        id="editor"
        useCustomImageHandler
        @image-added="handleImageAdded"
        v-model="htmlForEditor"
      >
      </vue-editor>
    </div>
  </template>
   
  <script>
import { VueEditor } from "vue2-editor";

   
  export default {
    components: {
      VueEditor
    },
   
    data() {
      return {
        htmlForEditor: ""
      };
    },
   
    methods: {
      // 2、添加handleImageAdded函数
      async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        const formData = new FormData(); //html自带的表单数据类
        formData.append("file", file); //file是文件对象，在服务端接收的字段名也是"file"
   
        const res=await this.$http.post('upload',formData) //发起请求
   
        //cursorLocation是光标位置，res.data.url是上传后的url地址
        Editor.insertEmbed(cursorLocation, "image", res.data.url)
        resetUploader() //重置文件上传器
      },
    }
  };
  </script>

  
