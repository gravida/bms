<template>
  <el-container class="wrap">
    <el-header height="80px">
      <el-button icon="el-icon-tickets" @click="handleOpen"/>
      <the-header/>
    </el-header>
    <el-container class="body-wrap">
      <the-nav :class="{'open': open}"/>
      <el-main>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue"; // @ is an alias to /src
import TheNav from "@/components/TheNav.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,TheHeader,TheNav
  }
})
export default class Home extends Vue {
  private open: boolean = false
  handleOpen() {
      this.open = !this.open
      console.log(this.open)
  }
}
</script>
<style scoped lang="scss">

$smallSize: 500px;
@mixin tran-horizontal($percentage, $time) {
  @if $percentage != 0 {
    transform: translateX($percentage);
    -moz-transform: translateX($percentage);
    -webkit-transform: translateX($percentage);
    -o-transform: translateX($percentage);
  }
  transition: transform $time ease;
  -moz-transition: transform $time ease;
  -webkit-transition: transform $time ease;
  -o-transition: transform $time ease;
}

.wrap {
  min-height: 96vh;
  .el-header {
    position: relative;
    background-color: #409EFF;
    line-height: 80px;
    .el-button {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-60%);
      border: #fff;
      background-color: #fff;
      @media screen and (min-width: $smallSize){
        display: none
      }
    }
  }
  .body-wrap {
    position: relative;
    overflow: hidden;
    .el-aside {
      z-index: 999;
      min-width: 200px;
      max-width: 200px;
      height: calc(100vh - 80px);
      background-color: #fff;
      color: #333;
      @include tran-horizontal(0, 0.4s);
      @media screen and (max-width: $smallSize) {
        position: absolute;
        left: -200px;
      };
      &.open {
        @include tran-horizontal(100%, 0.4s);
      }
    }
    .el-main {
      z-index: 1;
      background-color: rgba(155, 155, 155, 0.1);
      color: #333;
      text-align: center;
      .main {
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
        min-height: calc(100vh - 140px)
      }
    }
    .el-footer {
      color: #333;
      line-height: 70px;
      text-align: center;
      background-color: #D3DCE6;
    }
  }
}
</style>