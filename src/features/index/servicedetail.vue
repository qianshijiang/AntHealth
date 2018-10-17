<template>
  <div class="layout pb120">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>保健养生</p>
      </div>
      <div class="right">
      </div>
    </div>
    <div class="servpage">
      <div class="head">
        <div class="head-l">
          <img :src="technicians.technicianAvatar_url"/>
        </div>
        <div class="head-r">
          <h2>
            <span>{{technicians.technicianName}} </span>
            <i class="ico-star" v-if="technicians.starGrade>0"></i>
            <i class="ico-star" v-if="technicians.starGrade>1"></i>
            <i class="ico-star" v-if="technicians.starGrade>2"></i>
            <i class="ico-star" v-if="technicians.starGrade>3"></i>
            <i class="ico-star" v-if="technicians.starGrade>4"></i>
          </h2>
          <h4>
            <span>{{technicians.technicianAge}}</span>
            <span>|</span>
            <span>{{technicians.nativePlace}}</span>
            <span>|</span>
            <span>{{technicians.occupationTitle}}</span>
          </h4>
          <p style="line-height: 16px;overflow: hidden">{{technicians.introduction}}</p>
        </div>
      </div>
      <div class="head-f">
        <div class="bd">
          <div class="tit">
            <div class="left">
              <p>{{services.serviceName}}</p>
            </div>
            <div class="right" style="margin-top: 5px;">
              <font class="c_green">￥{{technicians.price}}</font>/60分钟
            </div>
          </div>
          <div class="conter">
            <p style="line-height: 16px;overflow: hidden">{{services.serviceIntroduction}}</p>
          </div>
        </div>

      </div>
      <div class="body" style="margin-bottom: 60px;">
        <div class="hd">
          <p>服务介绍</p>
        </div>
        <div class="bd" v-for="(item ,index) in detailData.introductions" :key="index">
          <h4 class="c_green">{{item.name}}</h4>
          <p style="line-height: 18px;overflow:hidden;">{{item.contents}}</p>
        </div>
      </div>
      <div class="foot">
        <div class="foot-l">
          <strong class="c_green">¥{{technicians.price}}</strong>/60分钟
        </div>
        <div class="foot-r">
          <div @click="goAppoin(detailData.technicians.serviceId,detailData.technicians.technicianid)" class="foot-btn" style="margin-top: 0;margin-left: 0;text-align: center">立即预约</div>
        </div>
      </div>
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
        detailData: {},
        timeData: {},
        technicians:{},
        services: {},
      }
    },
    methods: {
      goAppoin(id,tid) {
        this.$router.push({path: '/appointment',query: {
          id:id, tid: tid
          }})
      },
      prev(){
        this.$router.go(-1)
      },
      getInfo(){
        let self = this
        let paramts = {
          technicianid: this.$route.query.tid,
          serviceid: this.$route.query.id
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getServices',paramts,{ emulateJSON: true,headers: { "Content-Type": "multipart/form-data"} })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.detailData = response.data.data
              this.technicians = response.data.data.technicians
              this.services = response.data.data.services
            }else{
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

    },
    mounted: function () {
      this.getInfo()
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
   margin-top:30px;
   flex-direction: column;
  }
  .product-boxj2{
    padding: 0;
  }
  .home-img1{
    height: 100%;
    width: 100%;
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
    background: rgb(153,153,153);
    left: 17.5%;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
</style>

