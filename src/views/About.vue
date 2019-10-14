<template>
  <div class="about">
    <goBack />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import goBack from '@/components/goBack.vue'

export default {
  name: 'List',
  components: {
    goBack
  }
}
</script>
<style lang="scss">
.about {
  width: 800px;
  margin: 20px auto 0;
}
</style>
