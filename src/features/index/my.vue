<template>
  <div class="layout pb120 ">
    <div class="my-head">
      <a href="#" class="set"></a>
      <div class="head">
        <div class="head-l">
          <img src="../../../static/imgs/img39.png"/>
        </div>
        <div class="head-r">
          <h4>王力宏</h4>
          <p>新华园 上海网络科技有限公司</p>
        </div>
      </div>
      <div class="body">
        <div class="body-l">
          <i><img src="../../../static/imgs/img16.png"/></i>
          <font>医疗急救卡</font>
        </div>
        <div class="body-r">
          <img src="../../../static/imgs/img15.png"/>
        </div>
      </div>
    </div>
    <div class="my-nav on">
      <div class="head">
        <div class="head-l">
          我的资料
        </div>
        <div class="head-r">
          <a href="#">更多</a>
        </div>
      </div>
      <div class="body">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img42.png"/>
              </div>
              <p>我的资料</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img43.png"/>
              </div>
              <p>我的保单</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img44.png"/>
              </div>
              <p>地址管理</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img45.png"/>
              </div>
              <p>积分明细</p>
            </a>
          </li>
        </ul>

      </div>
    </div>
    <div class="my-nav">
      <div class="head">
        <div class="head-l">
          商城订单
        </div>
        <div class="head-r">
          <a href="#">进入商城</a>
        </div>
      </div>
      <div class="body">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img46.png"/>
              </div>
              <p>待付款</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img47.png"/>
              </div>
              <p>待发货</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img48.png"/>
                <sup>1</sup>
              </div>
              <p>待收货</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img49.png"/>
              </div>
              <p>售后/退款</p>
            </a>
          </li>
        </ul>
      </div>
    </div>


    <div class="my-nav">
      <div class="head">
        <div class="head-l">
          上门订单
        </div>
        <div class="head-r">
          <a href="#">全部</a>
        </div>
      </div>
      <div class="body">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img50.png"/>
              </div>
              <p>进行中</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img51.png"/>
              </div>
              <p>已完成</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img52.png"/>
              </div>
              <p>已取消</p>
            </a>
          </li>

        </ul>
      </div>
    </div>

    <div class="my-nav">
      <div class="head">
        <div class="head-l">
          活动预约
        </div>
        <div class="head-r">
          <a href="#">更多</a>
        </div>
      </div>
      <div class="body">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img53.png"/>
              </div>
              <p>待参加</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img54.png"/>
              </div>
              <p>待审核</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img55.png"/>
              </div>
              <p>已验票</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img56.png"/>
              </div>
              <p>退票</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="my-nav">
      <div class="head">
        <div class="head-l">
          福利
        </div>

      </div>
      <div class="body">
        <ul>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img57.png"/>
              </div>
              <p>商城优惠券</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img58.png"/>
              </div>
              <p>服务优惠券</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../../../static/imgs/img59.png"/>
              </div>
              <p>分享赚积分</p>
            </a>
          </li>

        </ul>
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
      },
      clearLogin(){
        localStorage.clear()
        this.$dialog.toast({
          mes: "已退出登录！",
          timeout: 1500
        })
        this.getLogon()
      },
      getLogon(){
        if(!localStorage.getItem("token")){
          this.$router.replace({path: '/login'})
        }
        else{

        }
      }
    },
    mounted: function () {
      if(!localStorage.getItem("token")){
        this.$router.replace({path: '/login'})
      }
    },
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
    position: relative;
    top: 0;
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

