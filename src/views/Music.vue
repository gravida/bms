<template>
  <div>
    Clicked: {{ $store.state.count }} times, {{ getCountA }}
    <!-- count is {{ $store.state.music.countA }}. -->
    <button>-</button>

    <div class="music-header">
      <el-input class="music-input" placeholder="请输入内容" v-model="searchInput" clearable></el-input>
      <el-button type="primary" size="medium" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" size="medium" icon="el-icon-upload" @click="openCreateMusic">上传</el-button>
    </div>
    <el-table :data="tableData3" stripe border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="音乐名称" width="120"></el-table-column>
      <el-table-column prop="url" label="音乐地址"></el-table-column>
      <el-table-column prop="source" label="地址来源" width="80"></el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
      <el-table-column prop="Created" :formatter="formatterCreatedTime" label="创建时间" width="160" align='center'></el-table-column>
      <el-table-column prop="Updated" :formatter="formatterUpdatedTime" label="更新时间" width="160" align='center'></el-table-column>
      
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="openEditMusic(scope.row)" type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="isEdit? '编辑新音乐' : '上传新音乐'" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
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
        <el-button type="primary" @click="upload">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import ClientApi from "@/api";
import {formatterTime} from "@/common/utils";

interface MusicData {
  name: string;
  picture: string;
  url: string;
  source: string;
}
@Component({
  // mapGetters & mapActions example
  computed: mapGetters(["getCountA"]),
  methods: mapActions(["changeCountA"])
})
export default class Music extends Vue {
  private tableData3: any = [];
  private searchInput: string = "";
  private form: MusicData = { name: "", picture: "", url: "", source: "" };
  private formLabelWidth: any = "100px";
  private dialogVisible: boolean = false;
  private isEdit: boolean = false;

  get countA() {
    console.log(this.$store.state.music);
    return this.$store.state.music.countA;
  }

  mounted() {
    this.updateMusics();
  }

  formatterCreatedTime(row: any, column: any) {
    return formatterTime(row.Created * 1000)
  }
  
  formatterUpdatedTime(row: any, column: any) {
    return formatterTime(row.Updated * 1000)
  }
  updateMusics() {
    var that = this;
    const a = new ClientApi()
    a.list()
      .then(function(res: any) {
        console.log('updateMusics', res);
        that.tableData3 = res.data;
      })
      .catch(function(err: any) {
        console.log(err);
      });
  }

  upload() {
    const that = this;
    this.dialogVisible = false;
    console.log(this.form);

    const a = new ClientApi()
    a.addMusic({name: this.form.name, picture: this.form.picture, url: this.form.url, source: this.form.source})
      .then(function(res: any) {
        console.log('upload', res);
      })
      .catch(function(err: any) {
        console.log(err);
      });
  }

  // 打开创建音乐对话框
  openCreateMusic() {
    this.isEdit = false
    this.dialogVisible = true
  }

  // 打开编辑音乐对话框
  openEditMusic(row: any) {
    console.log(row)
    this.isEdit = true
    this.form = { name: row.name, picture: row.picture, url: row.url, source: row.source };
    this.dialogVisible = true
  }
  
  // 音乐对话框确认
  handleOk() {
    if (this.isEdit) {
      this.handleEditMusic()
    } else {
      this.handleAddMusic()
    }
  }
  // 添加音乐
  handleAddMusic() {

  }

  // 编辑音乐
  handleEditMusic() {
  }
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