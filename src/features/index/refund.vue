<template>
  <div class="home-box">
    <TopBar title="退票"/>
    <div class="product-box">
      <div class="for-box" >
        <yd-icon size="35px" name="checkoff"></yd-icon>
        <p class="or-text" style="font-size: 16px;font-weight: bold;color:#999">退票成功</p>
        <p class="or-text">退款金额</p>
        <p class="or-text" style="font-size: 16px;font-weight: bold;color:#666">￥0.00</p>
      </div>
      <div class="for-box" style="border: 0;">
        <p class="or-text">退款金额将在三个工作日内园路退还</p>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Refund',
    data () {
      return {
        logonData: {},
        show2: false,
      }
    },
    methods: {
      changePwd: function () {
        this.showChangePwdPanel = true
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
    margin-top:45px;
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
    border-bottom: 1px solid #e0e0e0;
    align-items: center;

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

