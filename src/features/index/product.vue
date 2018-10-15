<template>
  <div class="layout pb120">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>产品详情</p>
      </div>
    </div>
    <div class="prod">
      <div class="prod-vw">
        <div class="img">
          <img src="../../assets/imgs/img75.jpg"/>
        </div>
        <div class="txt">
          <h4>{{detailData.insurance_title}}</h4>
          <p>{{detailData.introduction}}</p>
        </div>
      </div>
      <div class="prod-txt">
        <div class="head">
          投保方案
        </div>
        <div class="body">
          <ul>
            <li>
              <div class="left">保障计划</div>
              <div class="right">{{detailData.insurance_label}}</div>
            </li>
            <li>
              <div class="left">被保人年龄</div>
              <div class="right">{{detailData.insured_age}}周岁</div>
            </li>
            <li>
              <div class="left">保障期间</div>
              <div class="right">{{detailData.guarantee_period}}年</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="prod-txt">
        <div class="head">
          保障范围
        </div>
        <div class="body">
          <ul>
            <li v-for="(item,index) in detailData.guarantees" :key="index">
              <div class="left">{{item.insuranceTitle}}</div>
              <div class="right">{{item.insuranceContent}}</div>
            </li>
            <li>
              <div class="left">医院范围</div>
              <div class="right">二级或二级以上公立医院普通部</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="prod-tabs">
        <div class="head g-tab-hd">
          <ul>
            <li :class="{'on' : flag === 1}" @click="getclass(1)"><a>产品介绍</a></li>
            <li :class="{'on' : flag === 2}" @click="getclass(2)"><a >保险案例</a></li>
            <li :class="{'on' : flag === 3}" @click="getclass(3)"><a >理赔须知</a></li>
          </ul>
        </div>
        <div class="body g-tab-bd" style="margin-bottom: 60px;">
          <!--<p><img src="../../assets/imgs/img73.jpg"/></p>-->
          <p><img style="height: 220px;width: 100%;" :src="detailData.htmlurls"/></p>
          <p style="overflow: hidden" v-if="flag == 1">{{detailData.insured_introduction}}</p>
          <p style="overflow: hidden" v-if="flag == 2">{{detailData.insured_case}}</p>
          <p style="overflow: hidden" v-if="flag == 3">{{detailData.insured_notes}}</p>
        </div>




      </div>
      <div class="prod-ft">
        <a>立即投保</a>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'My',
    data () {
      return {
        detailData: {},
        flag: 1,
      }
    },
    methods: {
      getclass(v){
        this.flag = v
      },
      prev(){
        this.$router.go(-1)
      },
      getDetail(){
        let self = this
        let paramts = {
          inseranceid : this.$route.query.id,
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getinseranceDetails',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.detailData = response.data.data
            }else {
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
      this.getDetail()
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
  .home-img1{
    height: 100%;
    width: 100%;
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
  .product-boxj2{
    padding: 0;
  }
  .product-boxj{
    height: auto;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    flex-direction: column;
    background: #fff;
    padding: 10px 15px;
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
    color: #999999;
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
</style>

