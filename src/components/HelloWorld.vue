<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>全局样式测试：</p>
    <ul>
      <li class="green">绿色</li>
      <li class="blue">蓝色</li>
      <li class="orange">橙色</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.hello {
  background: $gray;
  padding: 15px;
  h2 {
    margin: 30px 0;
    color: $red;
    text-align: left;
  }
  p {
    text-align: left;
    margin-bottom: 20px;
  }
  ul {
    @include clearfix;
    margin-bottom: 20px;
    li {
      @include sc(14px, #fff);
      @include hl(50px);
      width: 50px;
      text-align: center;
      float: left;
      &.green {
        background: $green;
      }
      &.blue {
        background: $blue;
      }
      &.orange {
        background: $orange;
      }
    }
  }
}
</style>
