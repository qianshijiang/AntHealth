<template>
  <div class="layout pb120 " >
    <div class="my-head">
      <div @click="clearLogin" class="set"></div>
      <div class="head">
        <div class="head-l">
          <img style="height: 60px;width: 60px;border-radius: 30px;" v-if="face" :src="face"/>
          <img v-else src="../../../static/imgs/img39.png"/>
        </div>
        <div class="head-r">
          <h4>{{name}}</h4>
          <p>{{address}}</p>
        </div>
      </div>
      <div class="body">
        <div class="body-l" @click="productIntro(0)">
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
          <li @click="productIntro(1)">
              <div class="img">
                <img src="../../../static/imgs/img42.png"/>
              </div>
              <p>我的资料</p>
          </li>
          <li @click="productIntro(2)">
              <div class="img">
                <img src="../../../static/imgs/img43.png"/>
              </div>
              <p>我的保单</p>
          </li>
          <li @click="productIntro(3)">
              <div class="img">
                <img src="../../../static/imgs/img44.png"/>
              </div>
              <p>地址管理</p>
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

    <div class="my-nav" style="margin-bottom: 80px;">
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
        face: '',
        name: '',
        address: '',
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
      else{
        this.logonData = JSON.parse(localStorage.getItem("data"))
        this.face = localStorage.getItem("avatar_url")
        this.name = localStorage.getItem("display_name")
        this.address = localStorage.getItem("address")
      }
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  a{
    text-align: center;
  }
</style>

