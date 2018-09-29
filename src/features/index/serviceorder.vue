<template>
  <div class="home-box">
    <TopBar title="服务订单"/>
    <div class="box-top box-top1">
      <div class="box-top2" :class="{'box-top2j': navflag === 1}" @click="searchList(0)">
        <p class="se-title3">进行中</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 2}" @click="searchList(1)">
        <p class="se-title3">已完成</p>
      </div>
      <div class="box-top2" :class="{'box-top2j': navflag === 3}" @click="searchList(2)">
        <p class="se-title3">已取消</p>
      </div>
    </div>
    <div style="margin-top: 15px;">
      <div class="box-top">
        <p class="se-title1">09年9月12日 12：69<span style="margin-left: 5px;font-weight: bold">进行中</span></p>
      </div>
      <div class="pol-content" @click="goDetail">
        <img class="box-imgb" src="http://static.ydcss.com/uploads/ydui/2.jpg">
        <div style="display: flex;flex-direction: column">
          <p>服务：<span>杠杠滴</span></p>
          <p>技师：<span>赵云</span></p>
          <p>服务时间：<span>2018-09-17 </span></p>
        </div>
      </div>
      <div class="box-top box-topj">
        <p class="se-title4">￥ 230.00</p>
        <yd-button class="pol-content1"  @click.native="show2 = true" >
          <p>取消</p>
        </yd-button>
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

  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Serviceorder',
    data () {
      return {
        logonData: {},
        show2: false,
        radio2: 2,
        navflag: 1
    }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/serviceorderdetail'})
      },
      goRefund() {
        this.$router.push({path: '/refund'})
      },
      searchList(v){
        this.navflag = v + 1
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
    width: 100%;

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
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e0e0e0;
    padding: 20px;
    background: rgb(255,255,255);
  }
  .box-imgb{
    width:40px;
    height: 50px;
    border: 1px solid #999;
    margin-right: 15px;
    margin-top: 25px;
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
    background: rgb(242,242,242);
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
    border-top:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    background: #ffffff;
  }
  .box-topj{
    border-bottom:1px solid #e0e0e0;
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
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .se-title4{
    font-size: 16px;
    color: #666;
    font-weight: bold;
    line-height: 35px;
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
</style>

