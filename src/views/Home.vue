<template>
  <div class="home">
    <base-info> </base-info>
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
  created() {
    this.initData()
  },
  methods: {
    initData() {
      const str = 'asdfasasasafasaaa'
      const strArr = str.split()
      const setArr = [...new Set(str)]

      const strObj = {}
      let max = 0
      let maxChar = ''
      let number = 0
      setArr.forEach(element => {
        number = str.split(element).length - 1
        console.log(number, str.split(element))
        if (number > max) {
          max = number
          maxChar = element
        }
      })
      console.log(setArr)
    }
  }
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
