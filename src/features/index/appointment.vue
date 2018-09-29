<template>
  <div class="home-box">
    <TopBar title="我的资料"/>
    <div class="act-box1">
      <p class="act-text">余额充足</p>
      <p class="act-text2">
        158元/60分钟
      </p>
      <p class="act-text">
        <span class="act-text1" style="">-</span>
        <span class="act-text1" style="background: #fff;">1</span>
        <span class="act-text1">+</span>
      </p>
    </div>
    <div class="act-box1" style="justify-content: flex-start">
      <p class="act-text" style="color: #999;margin-right: 40px;">按摩师</p>
      <yd-checkbox val="刘晓国 "></yd-checkbox>
    </div>
    <div class="act-box1" style="margin-top: 0;border-top:0;justify-content: flex-start">
      <p class="act-text" style="color: #999;margin-right: 20px;">当前技师无法服务时，允许更换技师</p>
      <yd-checkbox val="允许" shape="circle"></yd-checkbox>
    </div>
    <div class="pol-content">
      <yd-cell-group >
        <yd-cell-item style="border-bottom: 1px solid #e0e0e0;">
          <span slot="left">联系电话：</span>
          <yd-input slot="right" v-model="input6" placeholder="15025154119"></yd-input>
          <div slot="right" style="display: flex;justify-content: space-between;flex-direction: row">
            <img style="height: 11px;width: 9px;" src="../../assets/image/right.png">
          </div>
        </yd-cell-item>
        <yd-cell-item arrow style="border-bottom: 1px solid #e0e0e0;">
          <span slot="left">服务地址：</span>
          <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择收货地址">
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">上门时间：</span>
          <yd-datetime v-model="datetime6" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right"></yd-datetime>
        </yd-cell-item>
        <div class="act-box1" style="justify-content:center;border-top: 0;padding: 5px;">
          <div class="appoin-box">备注留言</div>
        </div>

      </yd-cell-group>
      <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    </div>
    <div class="pol-content" style="margin-bottom: 60px;z-index:1;">
      <yd-cell-group >
        <yd-cell-item style="border-bottom: 1px solid #e0e0e0;">
          <span slot="left">优惠卷：</span>
          <yd-input slot="right" v-model="input6" placeholder="15025154119"></yd-input>
          <div slot="right" style="display: flex;justify-content: space-between;flex-direction: row">
            <img style="height: 11px;width: 9px;" src="../../assets/image/right.png">
          </div>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">预计实付：</span>
          <yd-input slot="right" v-model="input4"  placeholder=""></yd-input>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="pro-bottom" @click="goPay">
      <p>
        确认预约
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
      goPay() {
        this.$router.push({path: '/payshure'})
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
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
  }
  .act-box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    margin-top:10px;
    background: #fff;

  }
  .act-text{
    font-size: 16px;color: #333
  }
  .act-text2{
    font-size: 14px;color: #999
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

