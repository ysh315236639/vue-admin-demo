<template>
  <div class="nav">
    <el-menu
      style="height:100%;"
      default-active="1"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-menu-item index="1">
        <i class="el-icon-s-platform"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项一</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'left-nav'
}
</script>

<style lang="scss" scoped>
.nav{
  height: 100%;
  width: 200px;
}
</style>
