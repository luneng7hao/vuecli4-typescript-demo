<template>
  <div class="about">
    <div class="search-num">
      <van-field readonly clickable :value="value" @touchstart.native.stop="show = true"/>
      <van-number-keyboard v-model="value" :show="show" :maxlength="6" @blur="show = false"/>
    </div>
    <div class="search">
      <van-field :value="searchValue" label="文本"/>
    </div>
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