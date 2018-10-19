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
              <img src="../../assets/imgs/banner.png"/>
              <div class="txt">
                <h3>专家认为多吃水果健康</h3>
                <h4>你所不知道的十大误区之食物相克</h4>
                <a class="btn" href="#">查看详情</a>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/imgs/banner.png"/>
              <div class="txt">
                <h3>专家认为</h3>
                <h4>你所不知道的十大误区之食物相克</h4>
                <a class="btn" href="#">查看详情</a>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../../assets/imgs/banner.png"/>
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
              <img src="../../assets/imgs/img21.png"/>
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
              <img src="../../assets/imgs/img23.png"/>
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
              <img src="../../assets/imgs/img24.png"/>
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

</style>

