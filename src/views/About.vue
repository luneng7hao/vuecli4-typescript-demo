<template>
  <div class="about">
    <!-- <i class="iconfont icon--search"></i> -->
  </div>
</template>

<script>
import { NumberKeyboard as vanNumberKeyboard, Field as vanField } from 'vant'
export default {
  name: 'About',
  components: {
    vanNumberKeyboard,
    vanField,
  },
  data() {
    return {
      value: '',
      show: false,
      searchValue: '',
    }
  },
  create() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.about {
  .search {
    border-bottom: 1px solid #666;
  }
}
</style>