<template>
  <div class="home-box">
    <div class="layout pb120">
      <div class="g-bg-wrap">

        <div class="header header-bg1">
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

      <div class="h-naver">
        <ul>
          <li>
            <a href="#">
              <div class="txt">
                <h4>我的保单</h4>
                <p>一键轻松管理保单</p>
              </div>
              <div class="img">
                <img src="../../../static/imgs/img21.png"/>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="txt">
                <h4>福利商城</h4>
                <p>一键轻松管理保单</p>
              </div>
              <div class="img">
                <img src="../../../static/imgs/img23.png"/>
              </div>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <div class="txt">
                <h4>平价药店</h4>
                <p>让买药变轻松的事</p>
              </div>
              <div class="img">
                <img src="../../../static/imgs/img24.png"/>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="txt">
                <h4>一键急救</h4>
                <p>遇到危险点这里</p>
              </div>
              <div class="img">
                <img src="../../../static/imgs/img22.png"/>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="h-news">
        <em>蚂蚁<br>头条</em>
        <ul>
          <li>
            <a href="#">
              <label>快讯</label>国庆福利大放送，为60岁以上老年人免费体检
            </a>
          </li>
        </ul>
      </div>
      <div class="h-act">
        <div class="head">
          <h2>最新活动</h2>
          <a class="more" href="#">查看全部</a>
        </div>
        <div class="body h-act-list">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="#">
                  <div class="img">
                    <img src="../../../static/imgs/img09.jpg"/>
                  </div>
                  <p>到店送免费体检服务一次</p>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <div class="img">
                    <img src="../../../static/imgs/img09.jpg"/>
                  </div>
                  <p>如何合理膳食</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="h-related">
        <div class="head">
          <h2>重磅推荐</h2>
        </div>
        <div class="body">
          <ul>
            <li>
              <a href="#">
                <div class="img">
                  <img src="../../../static/imgs/img11.jpg"/>
                </div>
                <div class="txt">
                  <h4>企业员工意外险</h4>
                  <p>3人以上即可投保，轻松转移企业风险</p>
                  <label class="c_green">¥71.00起</label>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="img">
                  <img src="../../../static/imgs/img10.jpg"/>
                </div>
                <div class="txt">
                  <h4>长期护理险</h4>
                  <p>小区居家照护、养老机构照护、住院医疗护理等</p>
                  <label class="c_green">¥300.00起</label>
                </div>
              </a>
            </li>
          </ul>
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
        if( v === 3 ){
          this.$router.push({path: '/aidcardt'})
        }
        if( v === 4 ){
          this.$router.push({path: '/active'})
        }
        if( v === 5 ){
          this.$router.push({path: '/activedetail'})
        }
        if( v === 6 ){
          this.$router.push({path: '/oldbai'})
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
    /*margin-top:30px;*/
    background-image:none;
    height: auto;
    width: 100%;
    /*overflow: hidden;*/
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
  .home-img1{
    height: 100%;
    width: 100%;
    /*max-width: 59px;*/
    border-radius: 30px;
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
    text-align: center;display:table-cell;vertical-align: middle;
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

