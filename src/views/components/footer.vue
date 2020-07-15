<template>
  <div class="footer">
    <div class="link">
      关于天眼查
      <span class="line"></span>
      说明
      <span class="line"></span>
      版权
      <span class="line"></span>
      反馈
    </div>
    <p>京ICP备14061319</p>
    <p>增值电信业务经营许可证：京B2-20181511</p>
    <p>©2018 TIANYANCHA</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  create() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.footer {
  padding: 14px;
  background-color: #fff;
  text-align: center;
  .link {
    color: #666;
    .line {
      display: inline-block;
      height: 16px;
      width: 1px;
      background: #e0e0e0;
      vertical-align: top;
      margin: 0 16px;
    }
  }
  p {
    color: #999;
    margin: 0;
    line-height: 18px;
    font-size: 12px !important;
  }
}
</style>