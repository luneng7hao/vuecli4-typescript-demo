<template>
  <div>
    <van-row class="com-info">
      <van-row type="flex">
        <van-col class="item"
          ><van-image
            width="50"
            height="50"
            src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/6e51681f891d94bcac8ab974986931db_fullsize.jpg"
          ></van-image>
          <span>
            乐视网信息技术(北京)股份有限公司<tag type="success">在业</tag>
          </span></van-col
        >
      </van-row>
      <van-row class="item"
        ><span class="name">贾跃亭</span>
        <span class="name_">法定代表人</span></van-row
      >
      <van-row type="flex">
        <van-col class="item" span="12"
          ><icon name="phone-o" color="#128bed" /><span class="name"
            >010-5843567</span
          ></van-col
        >
        <van-col class="item" span="12"
          ><icon name="envelop-o" color="#128bed" /><span class="name"
            >service@le.com</span
          ></van-col
        >
      </van-row>
      <van-row type="flex">
        <van-col class="item"
          ><icon name="location-o" />北京市海淀区信息路28号4层B4-2-108</van-col
        >
      </van-row>
    </van-row>
  </div>
</template>

<script>
import {
  Col as VanCol,
  Row as VanRow,
  Icon,
  Tag,
  Image as VanImage
} from 'vant'
export default {
  name: 'Home',
  components: {
    VanCol,
    VanRow,
    Icon,
    Tag,
    VanImage
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.com-info {
  background: white;
  padding: 20px;
  .item {
    background: white;
    padding: 6px;
    .name {
      color: #128bed;
      font-size: 13px;
    }
    .name_ {
      color: #999999;
      font-size: 12px;
    }
    .van-icon {
      vertical-align: middle;
    }
    .van-image {
      height: 45px;
      line-height: 45px;
      vertical-align: middle;
    }
  }
}
</style>
