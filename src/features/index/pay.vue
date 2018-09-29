<template>
  <div class="home-box">
    <TopBar title="支付"/>
    <div class="product-box">
      <div class="for-box" style="border: 0;">
        <yd-icon size="35px" name="checkoff"></yd-icon>
        <p class="or-text" style="font-size: 16px;font-weight: bold;color:#999">支付成功</p>
        <p class="or-text">本次支付总额</p>
        <p class="or-text" style="font-size: 18px;font-weight: bold;color:#666">￥0.00</p>
      </div>
      <div class="for-box" >
        <p class="pay-text">
          购票清单
        </p>
        <div class="pay-box1" style="border-bottom: 1px solid #e0e0e0;">
          <p class="or-text">免费票</p>
          <p class="or-text pay-text1">
            <span>x1</span>
            <span style="margin-left: 10px;">0</span>
          </p>
        </div>
        <div class="pay-box1" style="justify-content: flex-end;padding-bottom: 0">
          <p class="or-text pay-text1">
            <span style="color: #333 ">小计：</span>
            <span style="margin-left: 10px;">0</span>
          </p>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="for-box" style="border: 0;">
        <p class="or-text">出票成功</p>
        <p class="or-text" style="font-size: 16px;color:#999">已放入[我的预约]中</p>
      </div>
      <div class="pay-box2" @click="goActiveOrder">
        <p>
         立即查看
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Pay',
    data () {
      return {
        logonData: {},
        show2: false,
      }
    },
    methods: {
      goActiveOrder() {
        this.$router.push({path: '/activeorder'})
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
  .pay-box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    padding: 15px 0;

  }
  .pay-text{
    height: 25px;
    width: 100px;
    background: #ffffff;
    position: absolute;
    top: -10px;
    color: #999;
    font-size: 16px;
    text-align: center;
  }
  .pay-text1{
    font-size: 14px;
    color: #999;
  }
  .for-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border-top: 1px solid #e0e0e0;
    align-items: center;
    position: relative;
    top: 0;

  }
  .pay-box2{
    height: auto;
    padding: 15px 0;
    background: rgb(242,242,242);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
  .pay-box2 p{
    font-size: 14px;
    color: #333;
    text-align: center;
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
  .aid-box1{
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    padding-bottom: 15px;
  }
  .aid-text1{
    font-size: 24px;
    color: #333;
    font-weight: bold;
    line-height: 35px;
  }
  .aid-text2{
    font-size: 16px;
    color: #999;
    line-height: 35px;
  }
  .aid-text3{
    font-size: 18px;
    color: #999;
    line-height: 35px;
    font-weight: bold;
    margin-top: 7px;
  }
  .aid-text4{
    font-size: 16px;
    color: #333;
    line-height: 35px;
    font-weight: bold;
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
  .pro-bottom{
    height: auto;
    line-height: 35px;
    width: 65%;
    margin: auto;
    border-radius: 35px;
    padding: 10px;
    background: #6f7180;
    margin-top:15px;
    margin-bottom: 15px;
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

