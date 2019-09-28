<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>hello vue.js</h1>
    <hr />
    <HelloWorld msg="This is hello World component" />
    <el-button @click="goAbout">go About Page</el-button>
    <el-button @click="goList">go List Page</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    goAbout() {
      this.$router.push({
        path: 'about'
      })
    },
     goList() {
      this.$router.push({
        path: 'list'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
