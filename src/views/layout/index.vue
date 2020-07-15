<template>
  <div class="layout">
    <div class="bottom">
      <van-grid :column-num="2">
        <van-grid-item icon="home-o" text="home" to="/"/>
        <van-grid-item icon="comment-o" text="about" to="/about"/>
      </van-grid>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Grid as VanGrid, GridItem as VanGridItem } from 'vant'
export default {
  name: 'layout',
  components: { VanGrid, VanGridItem },
  data() {
    return {}
  },
  create() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.layout {
  overflow: auto;
  margin-bottom: 90px;
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>