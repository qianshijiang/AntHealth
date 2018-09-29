<template>
  <div class="home-box">
    <TopBar title="我的资料"/>

    <div class="box-top">
      <p class="se-title1">头像</p>
      <img class="box-imgb" src="http://static.ydcss.com/uploads/ydui/2.jpg">
    </div>

    <div class="pol-content">
      <yd-cell-group >
        <yd-cell-item style="border-bottom: 1px solid #e0e0e0;">
          <span slot="left">修改昵称：</span>
          <yd-input slot="right" v-model="input6" placeholder="美女"></yd-input>
        </yd-cell-item>
        <yd-cell-item style="border-bottom: 1px solid #e0e0e0;">
          <span slot="left">手机号：</span>
          <yd-input slot="right" v-model="input6" placeholder="15025154119"></yd-input>
          <div slot="right" style="display: flex;justify-content: space-between;flex-direction: row">
            <span style="width: 80px;margin-right: 2px;font-size: 14px;color: #999">更换绑定</span>
            <img style="height: 11px;width: 9px;margin-top: 2px;" src="../../assets/image/right.png">
          </div>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">出生日期：</span>
          <yd-datetime v-model="datetime6" :yearFormat="yearFormat" :month-format="monthFormat" :day-format="dayFormat" type="date" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">选择所在地区：</span>
          <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择收货地址">
        </yd-cell-item>
      </yd-cell-group>
      <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    </div>
    <yd-button style="width:90%;margin: auto;margin-top: 20px;"  size="large" type="disabled" disabled>确认修改</yd-button>
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
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
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

