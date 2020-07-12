<template>
  <div>
    <van-row class="container">
      <van-cell title="股东高管" value="股东20/高管8" is-link />
      <grid :gutter="5" :column-num="3">
        <grid-item v-for="item in managers" :key="item.id">
          <van-row class="item" type="flex" gutter="10">
            <van-col class="tag-col"
              ><tag :type="item.type"> {{ returnTag(item.name) }}</tag></van-col
            >
            <van-col
              ><span class="name">{{ item.name }}</span></van-col
            >
          </van-row>
          <van-row class="item">{{ item.scale }}</van-row>
          <van-row class="item">{{ item.relation }}</van-row>
        </grid-item>
      </grid>
    </van-row>
  </div>
</template>

<script>
import {
  Col as VanCol,
  Row as VanRow,
  Cell as VanCell,
  Grid,
  GridItem,
  Tag
} from 'vant'
export default {
  name: 'Home',
  components: {
    VanCol,
    VanRow,
    VanCell,
    Grid,
    GridItem,
    Tag
  },
  data() {
    return {
      managers: [
        {
          id: '1',
          name: '贾跃亭',
          type: 'primary',
          scale: '持股比例23.07',
          relation: '关联企业14家'
        },
        {
          id: '2',
          name: '天津嘉瑞',
          type: 'success',
          scale: '持股比例8.56',
          relation: '关联企业3家'
        },
        {
          id: '3',
          name: '刘弘',
          type: 'danger',
          scale: '持股比例2.12',
          relation: '关联企业6家'
        }
      ]
    }
  },
  methods: {
    returnTag(name) {
      if (!name) {
        return '#'
      }
      return name.substring(0, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .van-grid-item__content--center {
  background: #f1f3f4;
  //   align-items: flex-start;
}

.container {
  .van-grid {
    background: white;
  }
  .item {
    height: 30px;
    width: 100%;
    align-items: flex-start;
    font-size: 14px;
    .tag-col {
      line-height: 20px;
    }
    .name {
      color: #128bed;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
