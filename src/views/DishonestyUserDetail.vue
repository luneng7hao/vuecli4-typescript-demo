<template>
  <div class="DishonestyUserDetail">
    <van-list class="detail-van-list">
      <van-cell class="item-list" style="padding-top:15px;">
        <template>
          <a @click.stop="handleRoute('/about')">失信记录</a>
          <van-icon name="arrow"/>
          <a @click.stop="handleRoute('/dishonesty/detail')">失信详情</a>
          <van-icon name="arrow"/>
          <span>历史被执行人</span>
          <van-icon class="fr" style=" color:#999;" @click="handleDel" name="cross"/>
        </template>
      </van-cell>
      <van-cell class="item-list">
        <template>
          <div class="item">
            <span>被执行人</span>
            <p>
              <a href="javescript:;">北京锤子数码科技有限公司</a>
            </p>
          </div>
          <div class="item">
            <span>身份证号码／组织机构代码</span>
            <p>39988517-X</p>
          </div>
          <div class="item" style="display: flex;">
            <div style="width:50%;">
              <span>执行标的</span>
              <p>257509</p>
            </div>
            <div style="width:50%;">
              <span>执行法院</span>
              <p>北京市朝阳区人民法院</p>
            </div>
          </div>
          <div class="item">
            <span>立案日期</span>
            <p>2020-06-01</p>
          </div>
          <div class="item">
            <span>案号</span>
            <p>(2020)京0105执13664号</p>
          </div>
        </template>
      </van-cell>
    </van-list>
    <!--  -->
    <div class="dishonest-tips">
      <img
        src="https://cdn.tianyancha.com/wap-require-js/public/images/footer-tyclogo_0319.png"
        alt=""
      >
      <span>本版块基于权威公示信息提供，仅供参考。用户依据此类信息所作出的任何决策，天眼查不承担责任。</span>
    </div>
  </div>
</template>

<script>
import { List as vanList, Cell as vanCell, Icon as vanIcon } from 'vant'
export default {
  name: 'DishonestyUserDetail',
  components: {
    vanList,
    vanCell,
    vanIcon,
  },
  data() {
    return {}
  },
  create() {},
  methods: {
    handleDel() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang='scss' scoped>
.DishonestyUserDetail {
  a {
    color: #0084ff;
  }
  p {
    margin: 0;
  }
  .detail-van-list {
    .item-list {
      padding: 0 15px 15px 15px;
      .item {
        padding-top: 15px;
        span {
          color: #999;
        }
      }
    }
  }
  .dishonest-tips {
    padding: 8px 10px 0 10px;
    line-height: 14px;
    background-color: #f2f3f4;
    font-size: 11px;
    color: #999;
    img {
      margin-right: 2px;
      width: 51px;
      height: 12px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .van-icon-arrow {
    display: inline-block;
    vertical-align: middle;
    color: #999;
    font-size: 12px;
    margin-left: 3px;
    margin-right: 3px;
  }
}
</style>