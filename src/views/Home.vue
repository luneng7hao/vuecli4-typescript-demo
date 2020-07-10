<template>
  <div class="home">
    <van-row gutter="20">
      <van-col class="item" span="8">span: 8</van-col>
      <van-col class="item" span="8">span: 8</van-col>
      <van-col class="item" span="8">span: 8</van-col>
    </van-row>
  </div>
</template>

<script>
import { Col as VanCol, Row as VanRow } from 'vant'
export default {
  name: 'Home',
  components: {
    VanCol,
    VanRow
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.item {
  background: blue;
}
</style>
