<template>
  <div class="dishonestyDetail">
    <div class="detail-title">
      <span>失信详情</span>
      <van-icon class="fr" style="margin-top:15px; color:#999;" @click="handleDel" name="cross"/>
    </div>
    <van-list class="detail-van-list">
      <van-cell class="item-list">
        <template>
          <div class="item">
            <span>失信被执行人</span>
            <p>
              <a href="javescript:;">北京锤子数码科技有限公司</a>
            </p>
          </div>
          <div class="item">
            <span>身份证号码／组织机构代码</span>
            <p>39988517-X</p>
          </div>
          <div class="item">
            <span>法定代表人</span>
            <p>-</p>
          </div>
        </template>
      </van-cell>
      <van-cell class="item-list">
        <template>
          <div class="item" style="display: flex;">
            <div style="width:50%;">
              <span>执行法院</span>
              <p>北京市朝阳区人民法院</p>
            </div>
            <div style="width:50%;">
              <span>省份</span>
              <p>北京</p>
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
      <van-cell class="item-list">
        <template>
          <div class="item">
            <span>执行依据文号</span>
            <p>(2019)京0105民初52524号</p>
          </div>
          <div class="item">
            <span>做出执行依据单位</span>
            <p>北京市朝阳区人民法院</p>
          </div>
          <div class="item">
            <span>生效法律文书确定的义务</span>
            <p>(2019)京0105民初52524号法律文书确定的义务</p>
          </div>
        </template>
      </van-cell>
      <van-cell class="item-list">
        <template>
          <div class="item">
            <span>被执行人的履行情况</span>
            <p>全部未履行</p>
          </div>
          <div class="item">
            <span>失信被执行人行为具体情形</span>
            <p>其他规避执行</p>
          </div>
          <div class="item">
            <span>发布日期</span>
            <p>2020-06-29</p>
          </div>
        </template>
      </van-cell>
    </van-list>
    <!--  -->
    <van-list class="detail-user">
      <van-cell>
        <template>
          <h3>关联历史被执行人</h3>
        </template>
      </van-cell>
      <van-cell is-link @click="handleUser">
        <template>
          <div class="item">
            <span>案号：</span>
            <span>(2020)京0105执13664号</span>
          </div>
          <div class="item">
            <span>执行法院：</span>
            <span>北京市朝阳区人民法院</span>
          </div>
          <div class="item">
            <span>执行标的：</span>
            <span>257509</span>
          </div>
          <div class="item">
            <span>立案时间：</span>
            <span>2020-06-01</span>
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
  name: 'dishonestyDetail',
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
    handleUser() {
      this.$router.push('/dishonesty/userDetail')
    },
  },
}
</script>

<style lang='scss' scoped>
.dishonestyDetail {
  a {
    color: #0084ff;
  }
  p {
    margin: 0;
  }
  font-size: 14px;
  color: #333;
  .detail-title {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 13px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #f2f3f4;
    background-color: #fff;
  }
  .detail-van-list {
    padding-top: 44px;
    border-bottom: 8px solid #f2f3f4;
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
  .detail-user {
    h3 {
      margin: 0;
    }
    .item {
      span:nth-of-type(1) {
        color: #999;
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
  .van-cell__right-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>