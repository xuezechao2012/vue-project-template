<template>
  <div class="list">
    <h1>This is an list page</h1>
    <el-button @click="getData" :disabled="list.length > 0">获取List</el-button>
    <el-button @click="resetData" :disabled="list.length == 0">重置List</el-button>
    <el-table :data="list" stripe class="table">
      <el-table-column label="作者信息" prop="hint"></el-table-column>
      <el-table-column label="标题" prop="title" width="500"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.image" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/api-test'
// import _get from 'lodash/get'
import { get } from 'lodash-es'
export default {
  name: 'List',
  data() {
    return {
      list: []
    }
  },
  methods: {
    // 获取知乎日报数据
    getData() {
      getList().then(res => {
        if (get(res, 'data.top_stories')) {
          this.list = res.data.top_stories
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
    width: 800px;
    margin: 30px auto;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
