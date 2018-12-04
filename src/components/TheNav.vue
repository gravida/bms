<template>
<el-aside style="min-height: 100%; overflow: hidden">
  <el-menu class="el-menu-vertical-demo" router default-active="/home" @open="handleOpen" @close="handleClose"
    >
    
    <el-menu-item class="submenu" index="/home">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>首页</span>
      </template>
    </el-menu-item>

    <el-submenu class="submenu" index="1">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>音乐管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/music">音乐列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu class="submenu" index="2">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/FormView">xxxxx</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</el-aside>
</template>

<script>
export default {
  name: 'TheNav',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
.submenu {
  text-align: left;
}
</style>