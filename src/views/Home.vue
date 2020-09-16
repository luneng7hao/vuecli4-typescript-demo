<template>
  <div class="home">
    <base-info></base-info>
    <van-row class="line"></van-row>
    <managers></managers>
  </div>
</template>

<script>
import { Row as VanRow } from 'vant'
import BaseInfo from './components/BaseInfo'
import Managers from './components/Managers'
export default {
  name: 'Home',
  components: {
    BaseInfo,
    VanRow,
    Managers
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.home {
  background: #f1f3f4;
}
.line {
  width: 100%;
  height: 10px;
}
</style>
