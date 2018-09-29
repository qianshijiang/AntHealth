<template>
  <div class="home-box">
    <TopBar title="用户中心"/>
    <div class="my-box">
      <div class="box-imgb">
        <img class="box-img2" src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </div>
      <div class="box-content1">
        <div>
          <p style="font-size: 14px;color: #fff;">
            设置
          </p>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: space-between">
          <div style="display: flex;flex-direction: column">
            <p style="font-size: 16px;color: #fff;margin-top: 5px;font-weight: bold">
              15025154119<span style="margin-left: 8px;margin-top: 5px;font-size: 14px;">500积分</span>
            </p>
            <p style="font-size: 16px;color: rgb(204,204,204);margin-top: 5px;">
              高科技股份有限公司
            </p>
          </div>
          <img style="height: 14px;width: 12px;margin-right: 20px;margin-top: 22px;" src="../../assets/image/right1.png">
        </div>
      </div>
      <div class="my-gg">
        <p @click="productIntro(0)" style="margin-top: 20px;">医疗急救卡</p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div class="u197">
      <div class="u197_text ">
        <p class="text1">我的资料</p>
        <div style="display: flex;flex-direction: row;">
          <p class="text2" style="margin-right: 5px;color:#333;">更多</p>
          <img style="height: 14px;width: 12px;margin-right: 20px;" src="../../assets/image/right.png">
        </div>

      </div>
      <div class="home-box1">
        <div class="home-box2" @click="productIntro(1)">
          <div class="u186_div">
            <!--<p class="home-title1">ICON</p>-->
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">我的资料</p>
        </div>
        <div class="home-box2" @click="productIntro(2)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">我的保单</p>
        </div>
        <div class="home-box2" @click="productIntro(3)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">地址管理</p>
        </div>
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">积分明细</p>
        </div>
       </div>
    </div>
    <div class="u197">
      <div class="u197_text ">
        <p class="text1">商城订单</p>
        <div style="display: flex;flex-direction: row;">
          <p class="text2" style="margin-right: 5px;">进入商城</p>
          <img style="height: 14px;width: 12px;margin-right: 20px;" src="../../assets/image/right.png">
        </div>

      </div>
      <div class="home-box1">
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">待付款</p>
        </div>
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">待发货</p>
        </div>
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">待收货</p>
        </div>
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">售后/退款</p>
        </div>
      </div>
    </div>
    <div class="u197">
      <div class="u197_text ">
        <p class="text1">上门订单</p>
      </div>
      <div class="home-box1">
        <div class="home-box2" @click="productIntro(4)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">进行中</p>
        </div>
        <div class="home-box2" @click="productIntro(4)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">已完成</p>
        </div>
        <div class="home-box2" @click="productIntro(4)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">已取消</p>
        </div>
      </div>
    </div>
    <div class="u197">
      <div class="u197_text ">
        <p class="text1">活动预约</p>
        <div style="display: flex;flex-direction: row;">
          <p class="text2" style="margin-right: 5px;">更多</p>
          <img style="height: 14px;width: 12px;margin-right: 20px;" src="../../assets/image/right.png">
        </div>

      </div>
      <div class="home-box1">
        <div class="home-box2" @click="productIntro(5)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">待参加</p>
        </div>
        <div class="home-box2" @click="productIntro(5)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">待审核</p>
        </div>
        <div class="home-box2" @click="productIntro(5)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">已验票</p>
        </div>
        <div class="home-box2" @click="productIntro(5)">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=469540469,3618755683&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">退票</p>
        </div>
      </div>
    </div>
    <div class="u197" style="margin-bottom: 60px;">
      <div class="u197_text ">
        <p class="text1">福利</p>
      </div>
      <div class="home-box1">
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">商城优惠卷</p>
        </div>
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">服务优惠卷</p>
        </div>
        <div class="home-box2">
          <div class="u186_div">
            <img class="home-img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3042089157,635750329&fm=26&gp=0.jpg">
          </div>
          <p class="home-title2">分享赚积分</p>
        </div>
      </div>
    </div>




    <FooterBar pageTag="3"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'My',
    data () {
      return {
        logonData: {}
      }
    },
    methods: {
      productIntro(v) {
        if( v === 0 ){
          this.$router.push({path: '/aidcard'})
        }
        if( v === 1 ){
          this.$router.push({path: '/myinfo'})
        }
        if( v === 2 ){
          this.$router.push({path: '/mypolicy'})
        }
        if( v === 3 ){
          this.$router.push({path: '/addressmanage'})
        }
        if( v === 4 ){
          this.$router.push({path: '/serviceorder'})
        }
        if( v === 5 ){
          this.$router.push({path: '/activeorder'})
        }
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
  .my-box{
    height: auto;
    width: 100%;
    background: rgb(102,102,102);
    padding: 20px 15px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0;
  }
  .my-gg{
    position: absolute;
    height: 50px;
    width: 140px;
    border-top:1px solid rgb(121,121,121);
    border-right:1px solid rgb(121,121,121);
    border-left:1px solid rgb(121,121,121);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom: 0;
    border-bottom-radius:0;
    background: #fff;
    right: 25px;
    bottom:-10px;
    text-align: center;
    /*line-height: 60px;*/
  }
  .box-content1{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
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
  .box-imgb{
    width:60px;
    height: 60px;
    border: 1px solid #999;
    margin-right: 25px;
    margin-top: 30px;
    margin-left: 15px;
  }
  .box-img2{
    width:100%;
    height: 100%;
  }
  .se-title1 span{
    font-weight: bold;
  }
  .text1{
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
  .text2{
    color: #999;
    font-size: 12px;
    margin-right: 20px;
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
    background: #ffffff;
    margin-top: 7px;
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
    margin-top: 10px;
  }
  home-title6{
    font-family:'微软雅黑';
    font-weight:400;
    font-style:normal;
    color:#CCC;
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
    border-bottom: 1px solid #e0e0e0;

  }
  .u197_text {
    font-style:normal;
    color:#666666;
    white-space:nowrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .home-img1{
    height: 100%;
    width: 100%;
    /*max-width: 59px;*/
    border-radius: 30px;
  }
</style>

