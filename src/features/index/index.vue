<template>
  <!--<div class="home-box">-->
    <div class="layout pb120">
      <div class="g-bg-wrap">

        <div class="header header-bg1">
          <div class="center">
            <p><span class="header-tit">{{nowposition}}</span></p>
          </div>
        </div>
        <yd-slider autoplay="3000" style="height: 140px;width: 92%;margin: auto;border-radius: 5px;margin-top: -45px;">
          <yd-slider-item v-for="item in bannerData" :key="item.id">
            <a :href="item.htmlUrl">
              <img style="width: 100%;height: 120px" :src="item.imgUrl">
            </a>
          </yd-slider-item>
        </yd-slider>
      </div>

      <div class="h-naver">
        <ul>
          <li @click="productIntro(2)">
            <div class="txt">
              <h4>我的保单</h4>
              <p style="line-height: 18px;">一键轻松管理保单</p>
            </div>
            <div class="img">
              <img src="../../assets/imgs/img21.png"/>
            </div>
          </li>
          <li @click="productIntro(10)">
            <div class="txt">
              <h4>福利商城</h4>
              <p style="line-height: 18px;">一键轻松管理保单</p>
            </div>
            <div class="img">
              <img src="../../assets/imgs/img23.png"/>
            </div>
          </li>
        </ul>
        <ul>
          <li @click="productIntro(9)">
            <div class="txt">
              <h4>平价药店</h4>
              <p style="line-height: 18px;">让买药变轻松的事</p>
            </div>
            <div class="img">
              <img src="../../assets/imgs/img24.png"/>
            </div>
          </li>
          <li>
            <div @click="productIntro(3)">
              <div class="txt">
                <h4>一键急救</h4>
                <p style="line-height: 18px;">遇到危险点这里</p>
              </div>
              <div class="img">
                <img src="../../assets/imgs/img22.png"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="h-news" @click="productIntro(0)">
        <em>蚂蚁<br>头条</em>
        <yd-rollnotice autoplay="4000" align="left" height="42" style="margin-left: 50px;margin-top: 2px;width: 80%" >
          <yd-rollnotice-item style="font-size: 12px;"  v-for="item in newsData" :key="item.id">
            <p class="kx">{{item.newLable}}</p>
            <span style="width:100%">{{item.newTitle}}</span>
            <!--<span style="width:100%">{{item.newTitle}}<span>-->
          </yd-rollnotice-item>
        </yd-rollnotice>
      </div>
      <div class="h-act">
        <div class="head">
          <h2>最新活动</h2>
          <p class="more" @click="productIntro(4)">查看全部</p>
        </div>
        <div class="body h-act-list" >
          <div class="swiper-container">
            <div class="swiper-wrapper" style="">
              <div class="swiper-slide swiper-slide-next" @click="productIntro(5,item.activateid)" v-for="item in activeData" :key="item.activateid">
                <div >
                  <div class="img">
                    <img style="width: 230px;height: 130px" :src="item.activity_img"/>
                  </div>
                  <p class="ndyy">{{item.activity_name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="h-related" style="margin-bottom: 80px;">
        <div class="head">
          <h2>重磅推荐</h2>
          <p class="wh" @click="productIntro(8)">查看全部</p>
        </div>
        <div class="body">
          <ul>
            <li v-for="item in productData" :key="item.id" @click="productIntro(1,item.id)">
                <div class="img">
                  <!--<img src="../../assets/imgs/img11.jpg"/>-->
                  <img :src="item.insruanceimg"/>
                </div>
                <div class="txt">
                  <h4>{{item.insuranceName}}</h4>
                  <p style="line-height: 16px;">{{item.insuranceIntroduction}}</p>
                  <label class="c_green" style="line-height: 32px;">{{item.insruanceprice}}</label>
                </div>
            </li>
          </ul>
        </div>
      </div>
      <div style="display: none" id="allmap"></div>
    <FooterBar pageTag="0"/>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import Vue from 'vue';
  import FooterBar from '../components/FooterBar.vue'
  export default {
    name: 'Product',
    data () {
      return {
        newsData: {},
        bannerData: {},
        activeData: {},
        productData: [],
        nowposition: '定位中...',
      }
    },
    methods: {
      productIntro(v,id) {
        if( v === 0 ){
          this.$router.push({path: '/headinfo'})
        }
        if( v === 1 ){
          this.$router.push({path: '/product',query: {id: id}})
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
          this.$router.push({path: '/activedetail',query: {id: id}})
        }
        if( v === 6 ){
          this.$router.push({path: '/oldbai'})
        }
        if( v === 7 ){
          this.$router.push({path: '/lookall'})
        }
        if( v === 8 ){
          this.$router.push({path: '/insurance'})
        }
        if( v === 9 ){
          this.$router.push({path: '/oldbai'})
        }
        if( v === 10 ){
          this.$router.push({path: '/market'})
        }
      },
      getBanner(){
        let self = this
        let paramts = {
          page: 1,
          pagemax: 10
        }
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/gettopbanner')
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.bannerData = response.data.data
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getProduct(){
        let self = this
        let paramts = {
          page: 1,
          pagemax: 2
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/gettopInsurance',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.productData = response.data.data
            }
            else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getActive(){
        let self = this
        let paramts = {
          page: 1,
          pagemax: 2
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/gettopactivity',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.activeData = response.data.data
            }
            else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getNews(){
        let self = this
        let paramts = {
          page: 1,
          pagemax: 2
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/gettopnews',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              self.newsData = response.data.data
            }
            else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getPosition(){
        let self = this
        let map = new BMap.Map("allmap")

        let geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            self.nowposition = r.address.province+' '+r.address.city
            let point = new BMap.Point(r.point.lng,r.point.lat)
            let gc = new BMap.Geocoder()
            gc.getLocation(point, function(rs){
              let addComp = rs.addressComponents;
              console.log(rs.address)//地址信息
              localStorage.setItem('jsaddress',rs.address)//弹出所在地址
            });
          }
          else {
            localStorage.setItem('jsaddress','')
            this.nowposition = '定位失败'
            this.$dialog.toast({
              mes:  '定位失败',
              timeout: 1500
            })
          }
        },{enableHighAccuracy: true})
      },
      getArea(){//获取区域
        let self = this
        self.$http.get('/healthymvc/getarea', {emulateJSON: true})
          .then(function (response) {
              this.$dialog.loading.close()
              if(response.body.status == true){
                localStorage.setItem('areas', JSON.stringify(response.data.data))
              }
            }
          ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      }
    },
    mounted: function () {
      // let mySwiper = new Swiper('.swiper-container', {
      //   autoplay:true,
      //   loop:true
      // })
      let swiper = new Swiper('.h-act-list .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
      this.getPosition()
      this.getBanner()
      this.getProduct()
      this.getActive()
      this.getNews()
      this.getArea()
    },
    components: {
      FooterBar
    }
  }
</script>
<style>
  .yd-slider-pagination, .yd-slider-pagination-vertical{
    justify-content: flex-end!important;
  }
  .yd-slider-pagination{
    bottom:25px;
    left: -15px;
  }
</style>
<style lang="scss" scoped>
  .kx{
    font-size: .2rem;
    color: #00CE9F;
    border: 1px solid #00CE9F;
    padding: 2px 0 0 8px;
    margin-right: .1rem;
    line-height: 16px;
    width: 46px;
    margin-top: 5px;
  }
  .kxk{
    font-size: 12px;
    color: #333333;
    line-height: .89rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
 .wh{
   display: inline-block;
   float: right;
   font-size: .24rem;
   color: #999999;
   background: url(../../assets/imgs/img31.png) no-repeat right center;
   background-size: .24rem .24rem;
   padding-right: .3rem;
   margin-top: .1rem;
 }
  .ndyy{
    overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp:1;
      word-break:break-all;
      display:-webkit-box;
      -webkit-box-orient:vertical;
  }
</style>

