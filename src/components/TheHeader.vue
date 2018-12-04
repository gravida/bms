<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="userInfo">
      <ul>
        <li>
          <el-dropdown>
            <span class="user">
              游客
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="editPaw">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      name: "游客"
    };
  }
};
</script>

<style scoped lang="scss">
$headerHeight: 80px;
$headerColor: white;

.header {
  height: 100%;
  width: 100%;
  .logo {
    float: left;
    width: 180px;
    color: white;
  }
  .userInfo {
    float: right;
    height: $headerHeight;
    &>ul {
      height: $headerHeight;
      margin: 0px;
      &>li {
        display: inline-block;
        height: $headerHeight;
        line-height: $headerHeight;
        margin-right: 20px;
        color: $headerColor;
        .lang {
            color: darken($headerColor, 20%);
            cursor: pointer;
            &.cur {
                color: $headerColor;
            }
        }
        .user {
            color: $headerColor;
            cursor: pointer;
        }
      }
    }
  }
}
</style>