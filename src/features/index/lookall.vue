<template>
  <div class="layout ">
    <div class="g-bg-wrap">
      <div class="header header-bg1">
        <div class="left">
          <div @click="prev" class="back"></div>
        </div>
        <div class="center">
          <p><span class="header-tit">上海 新华园</span></p>
        </div>
      </div>
      <div class="h-slider ">
        <!--swiper-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../../static/imgs/banner.png"/>
              <div class="txt">
                <h3>专家认为多吃水果健康</h3>
                <h4>你所不知道的十大误区之食物相克</h4>
                <a class="btn" href="#">查看详情</a>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../../../static/imgs/banner.png"/>
              <div class="txt">
                <h3>专家认为</h3>
                <h4>你所不知道的十大误区之食物相克</h4>
                <a class="btn" href="#">查看详情</a>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../../../static/imgs/banner.png"/>
              <div class="txt">
                <h3>专家认为多吃水</h3>
                <h4>你所不知道的十大误区之食物相克</h4>
                <a class="btn" href="#">查看详情</a>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>

    <div class="h-menu">
      <ul>
        <li>
          <a href="#">
            <div class="img">
              <img src="../../../static/imgs/img21.png"/>
            </div>
            <div class="txt">
              <h4>我的保单</h4>
              <p>一键轻松管理保单</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="img">
              <img src="../../../static/imgs/img23.png"/>
            </div>
            <div class="txt">
              <h4>福利商城</h4>
              <p>更多的优惠属于你</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="img">
              <img src="../../../static/imgs/img24.png"/>
            </div>
            <div class="txt">
              <h4>平价药店</h4>
              <p>让买药变轻松的事</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Activedetail',
    data () {
      return {
        logonData: {},
        show2: false,
        radio2: 2,
        spinner3:1,
      }
    },
    methods: {
      goPay() {
        this.$router.push({path: '/payshure'})
      },
      goAddress() {
        this.$router.push({path: '/storeaddress'})
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
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
    background: #ffffff;
  }
  .home-img1{
    height: 100%;
    width: 100%;
  }
  .act-box1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px;
  }
  .act-text{
    font-size: 12px;color: #999
  }
  .act-text1{
    border:1px solid #e0e0e0;
    padding: 5px 15px;
    margin: 0;
    font-size: 16px;
  }
  .adetail-box{
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .ad-text1{
    font-size: 16px;
    color: #666;
    font-weight: bold;
    line-height: 24px;
  }
  .box-tb2{
    border:1px solid #e0e0e0;
    padding: 6px;
    border-radius: 6px;
    margin-right: 10px;
  }
  .box-title1{
    font-size: 12px;color:#999
  }
  .act-box{
    height: auto;
    display: flex;
    background: #fff;
    width: 96%;
    margin: 5px auto;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    flex-direction: column;
  }
  .box-title2{
    font-size: 12px;
    color: #999;
    margin-top: 15px;
  }
  .ad-text2{
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
  .product-boxj{
    height: auto;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    flex-direction: column;
    background: #fff;
    padding: 10px 15px;
  }
  .product-boxj2{
    padding: 0;
  }
 .product-box1{
    height: auto;
    width: 100%;
   border-top:1px solid #e0e0e0;
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
   padding: 5px 0;
 }
  .pro-text1{
    font-size: 16px;
    color: #333;
  }
  .pro-text2{
    font-size: 14px;
    color: #999;
    margin-top: 8px;
  }
  .pro-text3{
    color: #333;
    line-height: 45px;
    margin-left: 15px;
    font-weight: bold;
  }
  .pro-text3j{
    color: #333;
    font-weight: normal;
  }
  .pro-text4{
    font-size: 14px;color: #333;
    line-height: 45px;
    margin-right: 15px;
  }
  .product-box2{
    height: 250px;
    background: #e0e0e0;
    width: 85%;
    margin: auto;
    border: 1px solid #999;
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
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 10px;
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
  .se-title1 span{
    font-weight: bold;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
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
    background: rgb(153,153,153);
    left: 17.5%;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
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

