<template>
  <div class="layout servbg pb120">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>保健养生</p>
      </div>
      <div class="right">

      </div>
    </div>
    <div class="servpage">
      <div class="head">
        <div class="head-l">
          <img src="../../assets/imgs/img77.png"/>
        </div>
        <div class="head-r">
          <h2>
            <span>李艾美 </span>
            <i class="ico-star"></i>
            <i class="ico-star"></i>
            <i class="ico-star"></i>
            <i class="ico-star"></i>
            <i class="ico-star"></i>
          </h2>
          <h4>
            <span>30岁</span>
            <span>|</span>
            <span>上海</span>
            <span>|</span>
            <span>高级按摩师</span>
          </h4>
          <p>专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。</p>
        </div>
      </div>
      <div class="head-f">
        <div class="bd">
          <div class="tit">
            <div class="left">
              <p>全身推拿理疗</p>
            </div>
            <div class="right">
              <font class="c_green">¥158</font>/60分钟
            </div>
          </div>
          <div class="conter">
            <p>深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，专业按摩师上门为您进行的中医按摩服务，缓解疲劳、身体病痛，改善健康状况</p>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="hd">
          <p>服务介绍</p>
        </div>
        <div class="bd">
          <h4 class="c_green">针对部位</h4>
          <p>对取颊脂垫位置的判定，结合每叶有独立的血管来源，形成包膜下血管网。颊脂肪垫有填充、滑动、保护和缓冲作用。</p>
        </div>
        <div class="bd">
          <h4 class="c_green">调理急症</h4>
          <p>对取颊脂垫位置的判定，结合每叶有独立的血管来源，形成包膜下血管网。颊脂肪垫有填充、滑动、保护和缓冲作用。</p>
        </div>
      </div>
      <div class="body">
        <div class="hd">
          <p>服务内容</p>
        </div>
        <div class="bd">
          <ul>
            <li>1、便捷、省心  我们为您做了大量的前期筛选、审核工作；</li>
            <li>2、成本低，效率高  我们拥有经验丰富的专业团队、海量的项目信息、优质的投资客户群；</li>
            <li>3、严谨、高效的对接流程  严格的信息审核、资料递交、项目价值评估、有力的合同保障、高效的对接执行力。</li>
          </ul>
        </div>
      </div>
      <div class="body">
        <div class="hd">
          <p>预约须知</p>
        </div>
        <div class="bd">
          <dl>
            <dt>尊敬的顾客，在购买前请仔细阅读以下条款</dt>
            <dd>1、便捷、省心  我们为您做了大量的前期筛选、审核工作；</dd>
            <dd>2、成本低，效率高  我们拥有经验丰富的专业团队、海量的项目信息、优质的投资客户群；</dd>
            <dd>3、严谨、高效的对接流程  严格的信息审核、资料递交、项目价值评估、有力的合同保障、高效的对接执行力。</dd>
          </dl>
        </div>
      </div>
      <div class="foot">
        <div class="foot-l">
          <strong class="c_green">¥158</strong>/60分钟
        </div>
        <div class="foot-r">
          <!--<a href="#" class="foot-btn">立即预约</a>-->
          <div @click="goAppoin" class="foot-btn" style="margin-top: 0;margin-left: 0;text-align: center">立即预约</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Aidcard',
    data () {
      return {
        logonData: {},
        show2: false,
        radio2: 2
      }
    },
    methods: {
      goRefund() {
        this.$router.push({path: '/refund'})
      },
      goAppoin() {
        this.$router.push({path: '/appointment'})
      },
      prev(){
        this.$router.go(-1)
      }
    },
    mounted: function () {},
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .home-box {
    /*margin-top:45px;*/
    height: auto;
    /*min-height: 100%;*/
    width: 100%;
  }
  .product-box{
    height: auto;
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px;
    margin-top: 10px;
    display: flex;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
  .for-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px dashed #e0e0e0;

  }
  .or-box{
    height: 250px;
    width: 220px;
    margin: 5px auto;
    background: #e0e0e0;
  }
  .or-box1{
    display: flex;flex-direction: column;padding: 10px 20px;
  }
  .or-box2{
    margin: 10px;
  }
  .or-text{
    padding: 8px 0;
    line-height: 20px;
  }
  .or-text1{
    font-weight: bold;
    color: #999;
    font-size: 16px;
    text-align: center;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .se-title1 span{
    font-weight: bold;
  }
  home-title6{
    font-family:'微软雅黑';
    font-weight:400;
    font-style:normal;
    color:#CCC;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
  .pol-content1{
    height: 25px;
    padding: 0 8px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-right: 8px;
    background: rgb(242,242,242);
    line-height: 25px;
  }
  .pol-content1 p {
    font-size: 12px;
    text-align: center;
    color: #333;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-top{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .box-bottom{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding: 5px 10px;
  }
  .box-topj{
    padding: 10px 25px;
  }
  .se-title4{
    font-size: 16px;
    color: #666;
    line-height: 35px;
  }
</style>

