<template>
  <div class="home-box">
    <TopBar title="保健养生"/>
    <div class="product-box">
    </div>
    <div class="product-box1">
      <div class="product-box-son product-box-sonj">
        <p class="pro-text3 pro-text3j">
          全身推拿理疗
        </p>
        <P class="pro-text4">
          158元/60分钟
        </P>
      </div>
      <div class="product-box-son" style="border: 0;">
          <p class="pro-text5">
            深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。
          </p>
      </div>
    </div>

    <div class="product-box1" style="border-top:1px solid #e0e0e0;">
      <div class="product-box-son" style="justify-content: center">
        <p class="pro-text3" style="text-align: center;font-weight: normal">
          技师信息
        </p>
      </div>
      <div class="sed-box1">
        <div class="sed-box2">
          <img style="height: 100%;width: 100%;border-radius: 40px;" src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </div>
        <p class="sed-text1">
         大哥哥
        </p>
        <div style="margin-top: 5px;">
          <yd-icon name="star" size="20px" color="#FF685D"></yd-icon>
          <yd-icon name="star" size="20px" color="#FF685D"></yd-icon>
          <yd-icon name="star" size="20px" color="#16AA6B"></yd-icon>
          <yd-icon name="star" size="20px" color="#16AA6B"></yd-icon>
        </div>
      </div>
      <div class="product-box-son">
        <p class="pro-text5" style="font-size: 12px;">
          深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。
        </p>
      </div>
    </div>
    <div class="product-box1" style="margin-top: -2px;">
      <div class="product-box-son" style="justify-content: center;padding-top: 45px;border-bottom-color:#333;">
        <p class="pro-text3" style="text-align: center;font-weight: normal">
          服务介绍
        </p>
      </div>
      <div class="product-box-son" style="padding: 10px;flex-direction: column">
        <p style="color: green;padding: 5px 0;">
          针对部位:
        </p>
        <p class="pro-text5">
          深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。
        </p>
        <p style="color: green;padding: 5px 0;">
          调理急症:
        </p>
        <p class="pro-text5">
          深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，专业按摩师上门为您进行深度的中医按摩服务，缓解疲劳、身体病痛，改善健康状况。
        </p>
      </div>
      <div class="product-box-son" style="padding: 10px;flex-direction: column;margin-top: 15px;">
        <p style="color: green;padding: 5px 0;width: 96%;margin:auto;text-align: left;border-bottom: 1px solid #e0e0e0;">
          服务内容:
        </p>
        <p class="pro-text5" style="margin-top: 8px;">
          1、深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，
        </p>
        <p class="pro-text5" style="margin-top: 8px;">
          2、专业按摩师上门为您进行深度的中医按摩服务，
        </p>
        <p style="color: green;padding: 5px 0;width: 96%;margin:auto;text-align: left;border-bottom: 1px solid #e0e0e0;">
          服务内容:
        </p>
        <p class="pro-text5" style="margin-top: 8px;">
          1、深度全身理疗是由点到专业理疗医师团队悉心打造的上门按摩服务项目，
        </p>
        <p class="pro-text5" style="margin-top: 8px;">
          2、专业按摩师上门为您进行深度的中医按摩服务，
        </p>
      </div>
    </div>
    <div class="pro-bottom">
      <p>
        立即预约
      </p>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Servicedetail',
    data () {
      return {
        logonData: {}
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
    margin:0px;
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
    background: #ffffff;
  }
  .sed-box1{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
  }
  .sed-box2{
    height: 80px;
    width: 80px;
    border: 1px solid #e0e0e0;
    border-radius: 40px;
  }
  .sed-text1{
    font-size: 16px;
    color: #333;
    margin-top: 5px;
  }
  .product-box{
    height: 150px;
    width: 100%;
    background: rgb(242,242,242);
    padding: 20px 15px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0;
  }
 .product-box1{
    height: auto;
    width: 100%;
   /*border-top:1px solid #e0e0e0;*/
    display: flex;
   background: #fff;
   margin-top: 10px;
   flex-direction: column;
  }
 .product-box-son{
   width: 100%;
   border-bottom: 1px solid #e0e0e0;
   display: flex;
   justify-content: space-between;
   padding: 5px;
   margin: 0 auto;
 }
 .product-box-sonj{
   width: 96%;
 }
  .pro-text3{
    color: #333;
    line-height: 45px;
    margin-left: 15px;
    font-weight: bold;
  }
  .pro-text5{
    color: #999;
    line-height: 20px;
    margin: 5px 0;
  }
  .pro-text3j{
    color: #333;
  }
  .pro-text4{
    font-size: 14px;color: #333;
    line-height: 45px;
    margin-right: 15px;
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
    position: fixed;
    bottom: 10px;
    background: #6f7180;
    left: 17.5%;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
</style>

