<template>
  <div class="home-box">
    <TopBar title="确认支付"/>
    <div class="act-box1" style="background: #e0e0e0;justify-content: center;padding: 10px;border:0;">
      <p class="act-text">支付剩余时间</p>
    </div>
    <div class="act-box1" style="width: 96%;margin: auto;">
      <p class="act-text">全身丽娜</p>
      <p class="act-text2">
        158元/60分钟
      </p>
    </div>
    <div class="act-box1">
      <p class="act-text">微信支付</p>
      <yd-checkbox val="允许" shape="circle"></yd-checkbox>
    </div>
    <div class="act-box1" style="margin-top: 0;border-top: 0;">
      <p class="act-text" >银联支付</p>
      <yd-checkbox val="允许" shape="circle"></yd-checkbox>
    </div>

    <div class="pro-bottom" @click="paySu">
      <p>
        确认支付
      </p>
    </div>
  </div>
</template>
<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        logonData: {},
        show1: false,
        input6:'',
        input4:'',
         model1: '',
        district: District,
        datetime6: '2017-05-11',
        yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
        monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
        dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
      }
    },
    methods: {
      result1(ret) {
        this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      paySu() {
        this.$router.push({path: '/paysuccess'})
      },
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
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
    background: #fff;
  }
  .act-box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    margin-top:10px;

  }
  .act-text{
    font-size: 16px;color: #333;font-weight: bold;
  }
  .act-text2{
    font-size: 14px;color: #333;font-weight: bold;
  }
  .act-text1{
    border:1px solid #e0e0e0;
    padding: 5px 15px;
    margin: 0;
    font-size: 16px;
    border-radius: 6px;
    margin-right: 5px;
    background: rgb(242,242,242);
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgb(246,246,246);
    margin-top: 15px;
  }
  .pol-content p{
    line-height: 30px;
    color: #333;
    font-size: 16px;

  }
  .appoin-box{
    height: auto;
    padding: 15px 65px;
    background: rgb(242,242,242);
    border:1px solid #e0e0e0;
    border-radius: 25px;
    margin-bottom: 5px;
  }
  .appoin-box p {
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  .pro-bottom{
    height: auto;
    line-height: 35px;
    width: 65%;
    margin: auto;
    border-radius: 35px;
    padding: 10px;
    position: fixed;
    bottom: 10px;
    background: #6f7180;
    left: 17.5%;
    z-index: 100;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
  .pol-content1{
    height: auto;
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-right: 8px;
  }
  .pol-content1 p {
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 10px;
    background: #ffffff;
  }
  .box-topj{
    justify-content: flex-end;
  }
  .box-imgb{
    width:50px;
    height: 60px;
    border: 1px solid #999;
    margin-right: 15px;
  }
  .box-top1{
    padding: 0 10px;
    justify-content: space-around;
    margin-bottom: 5px;
  }
  .box-top2{
    padding: 15px 0;
    flex: 1;
    text-align: center;
  }
  .box-top2j{
    border-bottom: 1px solid #333;
  }
  .se-title1{
    font-size: 16px;
    color: #333;
    line-height: 60px;
  }
  .se-title2{
    color: #999;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .se-title4{
    font-size: 14px;
    color: #666;
    font-weight: bold;
  }
</style>

