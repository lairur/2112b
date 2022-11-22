<template>
  <div>
    <el-container>
      <el-header>后台管理</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-menu-item index="index">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="users">用户列表</el-menu-item>
                <el-menu-item index="merchant">商家列表</el-menu-item>
              </el-menu-item-group>

              <el-menu-item index="food">食品列表</el-menu-item>
              <el-menu-item index="order">订单列表</el-menu-item>
              <el-menu-item index="manage">管理员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>添加数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="shops">添加商铺</el-menu-item>
                <el-menu-item index="shoop">添加商品</el-menu-item>
            
              
              </el-menu-item-group>
            </el-submenu>


            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>图标</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="esach">用户分布</el-menu-item>
              </el-menu-item-group>
            </el-submenu>



            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>编辑</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="compile">文本编辑</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="admin">管理员设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>说明</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="state">说明</el-menu-item>
              </el-menu-item-group>
            </el-submenu>


          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <template>
            <div></div>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;

  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 93vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 93vh;
}

body > .el-container {
  height: 93vh;
}
</style>