<template>
  <div class="home-box">
    <TopBar title="订单详情"/>
    <div class="product-box">
      <div class="box-top">
        <p class="se-title4">免费票</p>
        <div class="pol-content1">
          <p>有效</p>
        </div>
      </div>
      <div class="for-box">
        <div class="or-box">
        </div>
        <p class="or-text">验票码：12326872346329</p>
      </div>
      <div class="for-box">
        <p class="or-text" style="font-size: 18px;font-weight: bold">活动：活动标题活动标题活动标题活动标题活动标题活动标题</p>
        <p class="or-text">时间：9月18日 10:10 至10月10日 17:00</p>
        <p class="or-text">地点：上海市普陀区丹巴路55号</p>
      </div>
      <div class="for-box">
        <p class="or-text">姓名：韩琛</p>
        <p class="or-text">手机：138887888128</p>
      </div>
    </div>
    <div class="box-top box-topj">
      <p class="se-title4">购票时间：2018-09-18 13:50</p>
      <yd-button color="#fff" @click.native="show2 = true" class="se-title4" style="color: #333;font-weight: bold;background: rgba(0,0,0,0)">退票</yd-button>

    </div>
    <yd-popup  v-model="show2" position="bottom" height="45%">
      <div style="background: rgb(242,242,242);height: 100%">
        <div class="box-bottom">
          <p class="se-title4" style="flex: 14;text-align: center">退票</p>
          <yd-icon size="25px" style="flex: 1;text-align: right" name="error-outline" @click.native="show2 = false"></yd-icon>
        </div>
        <yd-radio-group v-model="radio2" class="or-box1">
          <p class="or-text1">请选择一个退票理由</p>
          <yd-radio class="or-box2" val="1">啦啦啦</yd-radio>
          <yd-radio class="or-box2" val="2">啊啊啊</yd-radio>
          <yd-radio class="or-box2" val="3">喔喔喔</yd-radio>
        </yd-radio-group>
        <div @click="goRefund"><yd-button size="large" type="disabled" >确认退票</yd-button></div>
      </div>

    </yd-popup>
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

