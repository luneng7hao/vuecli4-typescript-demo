<template>
  <div class="about">
    <!--  -->
    <div class="aboutHader">
      <i class="iconfont icon-tianyancha"></i>
      <i class="iconfont icon-tianyanchalogoyanseshengji1"></i>
      <div class="right">
        <div class="banner-open">
          <img src="@/assets/images/open-button.png" alt="">
        </div>
        <a href="javascript:;">登录/注册</a>
      </div>
    </div>
    <!--  -->
    <div class="search">
      <i class="iconfont icon-jiantouxiangzuo"></i>
      <!-- <input type="text" placeholder="请输入关键字" :value="value"> -->
      <van-field v-model="value" placeholder="请输入关键字"/>
      <i class="iconfont icon--search"></i>
    </div>
    <!--  -->
    <div class="breadcrumb">
      <a href="javascript:;">天眼查</a>
      <van-icon name="arrow"/>
      <a href="javascript:;">查老赖</a>
      <van-icon name="arrow"/>
      <a href="javascript:;">北京锤子数码科技有限公司</a>
      <van-icon name="arrow"/>
      <span>失信记录</span>
    </div>
    <!--  -->
    <div class="card">
      <div class="cardTitle">
        <div class="fl">
          <img
            style="width:45px;height:45px;"
            src="https://img5.tianyancha.com/logo/lll/070944b739b17b364f5aa0f253790cff.png@!f_200x200"
            alt=""
          >
        </div>
        <a style="margin-left:10px;" href="javascript:;">北京锤子数码科技有限公司</a>
        <a href="javascript:;" class="fr text">监控</a>
      </div>
      <div class="cardCenter">
        <div class="item">
          <div class="key">法定代表人</div>
          <div class="val">温洪喜</div>
        </div>
        <div class="item">
          <div class="key">注册资本</div>
          <div class="val">2000万人民币</div>
        </div>
        <div class="item">
          <div class="key">成立日期</div>
          <div class="val">2014-06-03</div>
        </div>
      </div>
      <div class="cardBtm" style="color:#999;">
        简介:
        <span
          style="color:#333;"
        >所在地：北京市 注册资本：2000万元人民币 企业类型：有限责任公司（法人独资）登记状态：在营 登记机关：开发区分局 注册地址：北京市北京经济技术开发区科创十四街99号33幢D栋3层309、310室</span>
        <div class="more" @click="handleMore">
          <span>
            <i class="iconfont icon-shenglvehao"></i>
          </span>更多
        </div>
      </div>
    </div>
    <!--  -->
    <about-info :data="aboutData"></about-info>
    <!--  -->
    <div class="numTitle">
      共
      <span style="color:#FF3B30;">4</span>条失信记录
    </div>
    <!--  -->
    <van-list class="van-list">
      <van-cell v-for="(item, index) in list" :key="index" @click="handleDetail">
        <template>
          <p class="title">{{item.title}}</p>
          <p>
            <span>发布日期：</span>
            {{item.time}}
          </p>
          <p>
            <span>履行情况：</span>
            {{item.case}}
          </p>
          <p>
            <span>执行法院：</span>
            {{item.location}}
          </p>
          <van-icon name="arrow"/>
        </template>
      </van-cell>
    </van-list>
    <!--  -->
    <div class="down-load">
      <p>
        <span class="fl img">
          <img src="https://cdn.tianyancha.com/wap-require-js/public/images/mobile_0319.png" alt="">
        </span>
        <span class="title">查看全部老赖，规避身边潜在风险</span>
        <span class="upload">立即下载</span>
      </p>
    </div>
    <!--  -->
    <van-tabs v-model="active" class="aboutTab">
      <van-tab :title="item.title" v-for="(item, index) in dishonestyInfo" :key="index">
        <van-list>
          <van-cell v-for="(ele, index) in item.list" :key="index">
            <template>
              <span class="tabNum">{{index + 1}}</span>
              <span class="tabTitle">{{ele}}</span>
            </template>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
    <!--  -->
    <div class="dishonest-tips">
      <img
        src="https://cdn.tianyancha.com/wap-require-js/public/images/footer-tyclogo_0319.png"
        alt=""
      >
      <span>本版块基于权威公示信息提供，仅供参考。用户依据此类信息所作出的任何决策，天眼查不承担责任。</span>
    </div>
    <!--  -->
    <div class="about-more">
      <div class="more-title">更多数据请下载天眼查APP</div>
      <div class="more-info">用户可以在APP查看更多企业维度，还可以查看企业图谱、股权结构、股权穿透图、实际控制人、企业关系等</div>
      <div class="more-btn">下载天眼查APP</div>
    </div>
    <!--  -->
    <Footer></Footer>
    <!-- 更多模态框 -->
    <van-overlay :show="show" @click="show = false">
      <div class="moreHarder">
        <img
          src="https://img5.tianyancha.com/logo/lll/070944b739b17b364f5aa0f253790cff.png@!f_200x200"
          alt=""
        >
        <p>北京锤子数码科技有限公司</p>
      </div>
      <div
        class="moreContent"
      >简介：所在地：北京市 注册资本：2000万元人民币 企业类型：有限责任公司（法人独资）登记状态：在营 登记机关：开发区分局 注册地址：北京市北京经济技术开发区科创十四街99号33幢D栋3层309、310室</div>
    </van-overlay>
  </div>
</template>

<script>
import {
  NumberKeyboard as vanNumberKeyboard,
  Field as vanField,
  Icon as vanIcon,
  Overlay as vanOverlay,
  List as vanList,
  Cell as vanCell,
  Tab as vanTab,
  Tabs as vanTabs,
} from 'vant'
import aboutInfo from './components/aboutInfo'
import Footer from './components/footer'
export default {
  name: 'About',
  components: {
    vanNumberKeyboard,
    vanField,
    vanIcon,
    vanOverlay,
    aboutInfo,
    vanList,
    vanCell,
    vanTab,
    vanTabs,
    Footer,
  },
  data() {
    return {
      value: '',
      show: false,
      active: 0,
      aboutData: [
        {
          title: '自身风险',
          num: '360',
          text1: '该公司 是最高人民法院所公示的***...(4)',
          text2: '其他(356)',
        },
        {
          title: '周边风险',
          num: '265',
          text1: '该公司 的高管*******被法院列...(21)',
          text2: '其他(244)',
        },
        {
          title: '预警提醒',
          num: '43',
          text1: '该公司 发生了***********...(2)',
          text2: '其他(41)',
        },
      ],
      list: [
        {
          title: '(2020)京0105执13664号',
          time: '2020-06-29',
          case: '全部未履行',
          location: '北京市朝阳区人民法院',
        },
        {
          title: '(2020)粤0305执548号',
          time: '2020-06-22',
          case: '全部未履行',
          location: '深圳市南山区人民法院',
        },
      ],
      dishonestyInfo: [
        {
          title: '失信自然人',
          list: [
            '杨春华3305021968****1454',
            '杨威3401111980****3016',
            '杨海宏4452221984****3516',
            '杨明华5301121963****1614',
            '杨永军3208281971****001X',
            '杨惠英3205011965****5524',
            '杨振华2301221964****3211',
            '杨红玲5122271968****0046',
            '杨学兰6421031969****4529',
            '杨奎峰2102131981****5235',
          ],
        },
        {
          title: '失信企业',
          list: [
            '华宸建设集团股份有限公司',
            '浙江省天台县圣锋工艺品有限公司',
            '杭州桐庐洪风新技术新燃料开发有限公司',
            '浙江省龙泉市汇龙旅游用品有限公司',
            '上海浦东国际工程有限公司',
            '射洪县洪达家鑫房地产开发有限责任公司',
            '吉林省恒辉建筑工程有限公司',
            '浙江省永康市福乐工贸有限公司',
            '江西洪昌啤酒有限公司',
            '湖北保龙温泉旅游发展有限公司',
          ],
        },
      ],
    }
  },
  create() {},
  methods: {
    handleMore() {
      this.show = true
    },
    handleDetail() {
      this.$router.push('/dishonesty/detail')
    },
  },
}
</script>

<style lang='scss' scoped>
.about {
  overflow: auto;
  font-size: 12px;
  background-color: #f2f3f4;
  a {
    color: #0084ff;
  }

  .aboutHader {
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding: 0 14px;
    background-color: #fff;
    i {
      display: inline-block;
      height: 48px;
      line-height: 46px;
      vertical-align: middle;
      font-size: 28px;
    }
    .icon-tianyancha {
      color: #0084ff;
    }
    .icon-tianyanchalogoyanseshengji1 {
      color: #454545;
    }
    .right {
      height: 48px;
      font-size: 16px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: right;
      .banner-open {
        width: 66px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      a {
        margin-left: 20px;
      }
    }
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 6px 14px;
    background-color: #0084ff;
    .van-field {
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      border-radius: 3px;
    }
    i {
      color: #fff;
      margin: 0 10px;
      width: 20px;
      height: 20px;
    }
  }

  .breadcrumb {
    position: relative;
    padding: 8px 14px;
    margin: 0;
    font-size: 13px;
    font-weight: normal;
    text-align: left;
    color: #333;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    .van-icon-arrow {
      color: #999;
      font-size: 12px;
      margin-left: 3px;
      margin-right: 3px;
      line-height: 18px;
    }
  }

  .card {
    background-color: #fff;
    padding: 14px 14px 8px 14px;
    .cardTitle {
      height: 45px;
      line-height: 45px;
      margin-bottom: 10px;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .text {
        border-radius: 3px;
        margin-top: 10px;
        text-align: center;
        width: 50px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #0084ff;
      }
    }
    .cardCenter {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 0 12px;
      .item {
        width: 110px;
        text-align: center;
        .key {
          margin-bottom: 4px;
          line-height: 17px;
          font-size: 12px;
          color: #999999;
        }
        .value {
          line-height: 20px;
          font-size: 14px;
          color: #333333;
        }
      }
    }
    .cardBtm {
      font-size: 14px;
      line-height: 20px;
      position: relative;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      .more {
        width: 50px;
        height: 20px;
        background: url('https://cdn.tianyancha.com/wap-require-js/public/images/folder-mask.png');
        background-size: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

  .numTitle {
    padding-left: 14px;
    height: 44px;
    line-height: 44px;
    font-size: 13px;
    color: #666;
    background-color: #f2f3f4;
  }

  .van-list {
    p {
      margin: 0;
      font-size: 12px;
      color: #333;
      overflow: hidden;
    }
    span {
      color: #999;
    }
    .title {
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 22px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: initial;
    }
    .van-icon-arrow {
      color: #999;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }

  .down-load {
    margin-bottom: 10px;
    background-color: #fff;
    overflow: hidden;
    padding: 15px 0;
    p {
      width: 285px;
      margin: 0 auto;
    }
    .img {
      height: 138px;
      margin-right: 15px;
      img {
        height: 100%;
      }
    }
    .title {
      width: 200px;
      float: left;
      font-size: 18px;
      color: #454545;
      margin-top: 20px;
      text-align: center;
    }
    .upload {
      display: inline-block;
      width: 200px;
      padding: 10px;
      margin-top: 10px;
      text-align: center;
      background-color: #0084ff;
      color: #fff;
      font-size: 16px;
    }
  }

  .aboutTab {
    .tabNum {
      display: inline-block;
      width: 22px;
      height: 22px;
      line-height: 22px;
      margin-right: 10px;
      border-radius: 4px;
      text-align: center;
      font-size: 12px;
      background-color: #e9e9e9;
      color: #666;
    }
    .tabTitle {
      color: #333;
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

  .about-more {
    margin-bottom: 10px;
    background-color: #fff;
    padding: 20px 14px;
    border-top: 8px solid #f2f3f4;
    .more-title {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333333;
      text-align: center;
      margin-bottom: 14px;
      height: 22px;
    }
    .more-info {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #666666;
      letter-spacing: 1.2px;
      margin-bottom: 20px;
      height: 34px;
    }
    .more-btn {
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      background: #0084ff;
      border-radius: 5px;
      height: 50px;
      width: 100%;
      line-height: 50px;
    }
  }

  .moreHarder {
    padding: 14px;
    margin-bottom: 30px;
    padding-top: 106px;
    color: #fff;
    text-align: center;
    img {
      width: 75px;
      height: 75px;
      border-radius: 5px;
    }
    p {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .moreContent {
    padding: 14px;
    max-height: 355px;
    overflow: hidden;
    overflow-y: scroll;
    font-size: 14px;
    text-align: left;
    color: #fff;
  }
  .van-overlay {
    background-color: rgba(0, 0, 0, 0.85);
  }
}

::v-deep .van-tab--active {
  color: #0084ff;
}
::v-deep .van-tabs__line {
  background-color: #0084ff;
}
</style>