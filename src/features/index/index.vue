<template>
  <div class="home-box">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>

    <!-- Unnamed (矩形) -->
    <div class="home-box1">
      <div class="home-box2" @click="productIntro(2)">
        <div class="u186_div">
          <p class="home-title1">ICON</p>
        </div>
        <p class="home-title2">我的保单</p>
      </div>
      <div class="home-box2">
        <div class="u186_div">
          <p class="home-title1">ICON</p>
        </div>
        <p class="home-title2">福利商城</p>
      </div>
      <div class="home-box2">
        <div class="u186_div">
          <p class="home-title1">ICON</p>
        </div>
        <p class="home-title2">平价药房</p>
      </div>
      <div class="home-box2">
        <div class="u186_div">
          <p class="home-title1">ICON</p>
        </div>
        <p class="home-title2">一键急救</p>
      </div>
  </div>


    <div class="home-box3" @click="productIntro(0)">
      <p>
        <span class="home-title3"></span>
        <span class="home-title4"> 蚁塔头条</span>
      </p>
      <p class="home-title5">
        <span class="home-title6">页面中常用的文字、图片等基础元素</span>
      </p>
    </div>


    <!-- Unnamed (矩形) -->
    <div class="u197">
      <div class="u197_text ">
        <p class="text1">最新活动</p>
        <p class="text2">更多</p>
      </div>
      <div class="home-box-tow">
        <div class="box-tow1">
          <img class="box-img1" src="http://static.ydcss.com/uploads/ydui/2.jpg">
          <div class="box-tow2">
            <p class="text3">
              到店送免费服务一次
            </p>
          </div>
        </div>
        <div class="box-tow1">
          <img class="box-img1" src="http://static.ydcss.com/uploads/ydui/3.jpg">
          <div class="box-tow2">
            <p class="text3">
              到店送免费服务一次
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="u197" style="margin-bottom: 60px;">
      <div class="u197_text ">
        <p class="text1"><span>重磅推荐</span></p>
      </div>
      <div class="home-box-tow">
        <div class="box-tow3" @click="productIntro(1)">
          <p class="text4">
            企业员工意外险
          </p>
          <p class="text5">
            3人以上即可投保,轻松转移企业风险
          </p>
          <p class="text6">
            71元起
          </p>
        </div>
        <div class="box-tow3" @click="productIntro(1)">
          <p class="text4">
            长期护理脸
          </p>
          <p class="text5">
            区居家照护、养老机构照护、住院医疗护理等
          </p>
          <p class="text6">
            300元起
          </p>
        </div>
      </div>
    </div>
    <FooterBar pageTag="0"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  export default {
    name: 'Product',
    data () {
      return {
        logonData: {}
      }
    },
    methods: {
      productIntro(v) {
        if( v === 0 ){
          this.$router.push({path: '/headinfo'})
        }
        if( v === 1 ){
          this.$router.push({path: '/product'})
        }
        if( v === 2 ){
          this.$router.push({path: '/mypolicy'})
        }
      }
    },
    mounted: function () {},
    components: {
      FooterBar
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
  }
  .home-box-tow{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-around;
  }
  .box-tow1{
    height: 113px;
    width: 168px;
    background: rgb(204,204,204);
    border-radius: 8px;
    position: relative;
    top: 0;
  }
  .box-img1{
    width:100%;
    height: 100%;
    border-radius: 8px;
  }
  .box-tow2{
    height: 32px;
    width: 168px;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: #e0e0e0
  }
  .box-tow3{
    height: 113px;
    width: 168px;
    background: rgb(242,242,242);
    border-radius: 8px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column
  }
  .text1{
    font-size: 16px;
    font-weight: bold
  }
  .text2{
    color: #999;
    font-size: 12px;
    margin-right: 20px;
  }
  .text3{
    font-size: 14px;
    color: #999;
    text-align: center;
    line-height: 32px;
  }
  .text4{
    font-size: 14px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
  }
  .text5{
    font-size: 12px;
    color: #999;
    line-height: 15px;
    margin-top: 7px;
  }
  .text6{
    font-size: 12px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
    margin-top: 10px;
  }
  .home-box1 {
    height: auto;
    min-height:89px;
    padding:10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #ffffff
  }
  .home-box2{
    display: flex;
    flex-direction: column;
  }
  .home-title1{
    font-size: 12px;
    text-align: center;
    line-height: 59px
  }
  .home-title2{
    font-size: 12px;
    color: #333;
    text-align: center;
    margin-top: 4px;
  }
  .home-title3{
    font-family:'FontAwesome';
    font-weight:400;
    font-size:16px;
    color:#999;
  }
  .home-title4{
    font-family:'Arial Normal', 'Arial';
    font-weight:400;font-size:12px;
    color:#999;
  }
  .home-title5{
    font-size:12px;
    margin-top: 10px;
  }
  home-title6{
    font-family:'微软雅黑';
    font-weight:400;
    font-style:normal;
    color:#CCC;
  }
  .home-box3{
    display: flex;
    height: auto;
    width: 100%;
    padding:20px;
    flex-direction: column;
    background: #fff;
    margin-top: 15px;
  }
  .u186_div {
    width:59px;
    height:59px;
    background-color:rgba(228, 228, 228, 1);
    border-radius:29px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-family:'微软雅黑';
    font-weight:400;
    font-style:normal;
    font-size:12px;
    color:#999999;
  }

  .u197 {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction:column;
    background: #ffffff;
    padding: 20px 10px;
    font-family:'Microsoft YaHei UI Bold', 'Microsoft YaHei UI Regular', 'Microsoft YaHei UI';
    margin-top: 15px;
  }
  .u197_text {
    font-style:normal;
    color:#666666;
    white-space:nowrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

