<template>
  <div class="list">
    <h1>This is an list page</h1>
    <el-button @click="getData" :disabled="list.length > 0">获取List</el-button>
    <el-button @click="resetData" :disabled="list.length == 0">重置List</el-button>
    <el-table :data="list" stripe class="table">
      <el-table-column label="专辑名" prop="album_title"></el-table-column>
      <el-table-column label="歌手" prop="author"></el-table-column>
      <el-table-column label="图片" prop="author">
        <template slot-scope="scope">
          <el-image :src="scope.row.pic_small"></el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/api-test'
export default {
  name: 'List',
  data() {
    return {
      list: []
    }
  },
  methods: {
    getData() {
      getList().then(res => {
        if (res.result && res.result[0] && res.result[0].content) {
          this.list = res.result[0].content
        }
      })
    },
    resetData() {
      this.list = []
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  text-align: center;
  margin-top: 50px;
  .table {
    width: 500px;
    margin: 30px auto;
  }
}
</style>
