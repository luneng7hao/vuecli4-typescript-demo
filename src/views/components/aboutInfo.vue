<template>
  <div class="aboutInfo">
    <div class="title">
      <img
        src="https://cdn.tianyancha.com/wap-require-js/public/images/proxyPeers/risk-icon.png"
        alt=""
      >
      <van-swipe class="my-swipe" :show-indicators="false" vertical :autoplay="3000">
        <van-swipe-item>
          2020-07-17 该公司产生“
          <span class="item">开庭公告</span>”信息
        </van-swipe-item>
        <van-swipe-item>
          2020-06-29 该公司产生“
          <span class="item">开庭公告</span>”信息
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="title">
          {{item.title}}
          <span class="num">{{item.num}}条</span>
        </div>
        <p>
          <span>{{item.text1}}</span>
        </p>
        <p>
          <span>{{item.text2}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe as vanSwipe, SwipeItem as vanSwipeItem } from 'vant'
export default {
  name: 'aboutInfo',
  props: ['data'],
  data() {
    return {}
  },
  components: {
    vanSwipe,
    vanSwipeItem,
  },
  create() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.aboutInfo {
  padding: 10px;
  background: #fff;
  margin-top: 10px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    img {
      width: 49px;
    }
    .my-swipe {
      color: #666;
      min-width: 200px;
      height: 20px;
      .item {
        color: #ff3b30;
        font-weight: bold;
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      width: 116px;
      background: #f8f8f9;
      border-radius: 4px;
      padding: 4px;
      .title {
        color: #333;
        font-size: 12px;
        margin: 0;
        .num {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 18px;
          background: rgba(255, 59, 48, 0.25);
          border: 1px solid rgba(255, 59, 48, 0.5);
          border-radius: 2px;
          font-size: 13px;
          color: #ff3b30;
          font-weight: bold;
        }
      }
      p {
        margin: 0;
        font-size: 10px;
        color: #666;
        span {
          transform: scale(0.83);
        }
      }
    }
  }
}
</style>