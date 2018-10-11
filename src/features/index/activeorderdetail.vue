<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        活动订单
      </div>

    </div>
    <div class="orderd">

      <div class="orderd-vw">
        <div class="head">
          免费票
        </div>
        <div class="body">
          <img src="../../../static/imgs/qrcode.png"/>
          <p>验票码：1823917283172</p>
        </div>
        <div class="foot">
          <img src="../../../static/imgs/img95.png"/>
          <!--待审核-->
        </div>
      </div>

      <div class="orderd-hd">
        <h4>上海中青年市民健康跑活动系列</h4>
        <dl>
          <dt>2018-09-16 10:00～14:00 </dt>
          <dd>上海市东方明珠广场</dd>
        </dl>
      </div>
      <div class="orderd-bd">
        <p>姓名：韩琛</p>
        <p>手机：138887888128</p>
      </div>

    </div>
    <div class="orderd-f">
      购票时间：2018-09-18 13:5
      <p style="float: right;margin-right: 25px;font-size: 14px;color: #333;font-weight: bold" @click="goRefund">取消</p>
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

