<template>
  <div>
    <div class="music-header">
      <el-input class="music-input" placeholder="请输入内容" v-model="searchInput" clearable></el-input>
      <el-button type="primary" size="medium" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" size="medium" icon="el-icon-upload" @click="dialogVisible = true">上传</el-button>
    </div>
    <el-table :data="tableData3" stripe border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="音乐名称" width="120"></el-table-column>
      <el-table-column prop="url" label="音乐地址" width="120"></el-table-column>
      <el-table-column prop="source" label="地址来源" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="300"></el-table-column>
      <el-table-column prop="op" label="操作"></el-table-column>
    </el-table>

    <el-dialog title="上传新音乐" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
      <el-form :model="form">
        <el-form-item label="音乐名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片url" :label-width="formLabelWidth">
          <el-input v-model="form.picture" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="地址url" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址来源" :label-width="formLabelWidth">
          <el-select v-model="form.source" placeholder="请选择地址来源">
            <el-option label="github" value="github"></el-option>
            <el-option label="七牛云" value="qiniu"></el-option>
            <el-option label="leancloud" value="leancloud"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator'
interface MusicData {
  name: string,
  picture: string,
  url: string,
  source: string
}
@Component
export default class Music extends Vue {
  private tableData3: any = []
  private searchInput: string = ""
  private form: MusicData = {name:"",picture:"",url:"",source:""}
  private formLabelWidth: any = "100px"
  private dialogVisible: boolean = false

}
</script>

<style scoped lang="scss">
.music-header {
  text-align: left;
  padding: 10px;
}
.music-input {
  width: 130px;
  margin-right: 20px;
}
</style>