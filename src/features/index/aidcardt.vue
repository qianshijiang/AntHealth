<template>
  <div class="layout ">
    <div class="h-bg" v-if="pageflag == 2">
    <div class="header onetouch-head">
      <div class="left">
        <div @click="prev" class="back back2"></div>
      </div>
      <div class="center">
        <p>一键急救</p>
      </div>
    </div>
    <div class="onetouch">
      <div class="head">
        <div class="head-hd">
          <div class="img">
            <img style="height: 70px;width: 70px;border-radius: 35px;margin-top: 10px;" v-if="face" :src="face"/>
            <img v-else src="../../assets/imgs/img38.png"/>
            <sub>{{aidData.sex}}</sub>
          </div>
          <div class="txt">
            <h4>{{aidData.name}}</h4>
            <p class="tel">{{aidData.sosPhone}}</p>
          </div>
        </div>
        <div class="head-bd">
          <ul>
            <li>
              <h4>{{aidData.height}}</h4>
              <p>身高(cm)</p>
            </li>
            <li>
              <h4>{{aidData.blood}}</h4>
              <p>血型</p>
            </li>
            <li>
              <h4>{{aidData.weight}}</h4>
              <p>体重(kg)</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="body">
        <ul>
          <li>
            <div class="body-hd">
              医疗状况备注
            </div>
            <div class="body-bd">
              <p>{{aidData.medicalRemarks}}</p>
            </div>
          </li>
          <li>
            <div class="body-hd">
              过敏反应备注
            </div>
            <div class="body-bd">
              <p class="c_red">{{aidData.allergyRemarks}}</p>
            </div>
          </li>
          <li>
            <div class="body-hd">
              在使用的药物
            </div>
            <div class="body-bd">
              <p>{{aidData.medicine}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="body-f">
        <span>{{aidData.sosAddress}}</span>
      </div>
      <yd-button @click.native="nowAid(aidData.sosc,aidData.storeId)"  class="foot" style="background-color: rgba(1,1,1,0);width: 100%">
        <a style="text-align: center">{{titles}}</a>
      </yd-button>
      <yd-popup v-model="show1" position="center" class="hh1" width="92%">
        <div class="hh2">
          <p class="hh3">
           在线接入中......
          </p>
          <p class="hh7" >
            您正在呼叫急救，马上就有工作人员呼叫您，并赶到您的身边。
          </p>
          <yd-button @click.native="chstatus" class="hh4">
            <p style="font-size: 14px;line-height: 24px;">确定</p>
          </yd-button>
        </div>
      </yd-popup>
      <yd-popup v-model="show2" position="center" class="hh1" width="92%">
        <div class="hh2">
          <p v-if="chData.status == 0" class="hh3">
            创建成功
          </p>
          <p  v-if="chData.status == 4" class="hh3">
            处理中
          </p>
          <p  v-if="chData.status == 5" class="hh3">
            接入成功
          </p>
          <p  v-if="chData.status == 6" class="hh3">
            正在取消
          </p>
          <p  v-if="chData.status == 7" class="hh3">
            已取消
          </p>
          <p class="hh7" v-if="chData.status == 0 || chData.status == 4">
            系统会第一时间联系急救人员，如响应超过2分钟，请立即拨打电话服务或拨打120急救电话
          </p>
          <div v-if="chData.status == 5">
            <div class="hh5">
              <p class="hh6">
                救护员电话：{{chData.rescuers_phone}}
              </p>
            </div>
            <p style="text-align: center;color: #999;" >
              救护员 <span style="color: #333">{{chData.rescuers_name}}</span>飞速赶往<span style="color: #333">{{chData.firstaid_address}}</span>
            </p>
          </div>
        </div>
      </yd-popup>
    </div>
    <div class="onetouch-f">
      <label class="check_box">
        <input type="checkbox" id="check_1" checked="">
        <label for="check_1"></label>
        <em>已阅读并同意</em>
        <a href="#">《用户服务协议》</a>
      </label>
    </div>
  </div>
    <div v-if="pageflag == 1">
      <div class="g-bg-wrap">
        <div class="header header-bg1">
          <div class="left">
            <div @click="prev" class="back"></div>
          </div>
          <div class="center">
            <p><span class="header-tit">上海 新华园</span></p>
          </div>
        </div>
        <yd-slider autoplay="3000" style="height: 140px;width: 92%;margin: auto;border-radius: 5px;margin-top: -45px;">
          <yd-slider-item v-for="item in bannerData" :key="item.id">
            <a :href="item.htmlUrl">
              <img style="width: 100%;height: 120px" :src="item.imgUrl">
            </a>
          </yd-slider-item>
        </yd-slider>
        <div class="h-slider " style="display: none">
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
                <img src="../../assets/imgs/img27.png"/>
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
            <div class="img">
              <img src="../../assets/imgs/img21.png"/>
            </div>
            <div class="txt">
              <h4>我的保单</h4>
              <p>一键轻松管理保单</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/imgs/img23.png"/>
            </div>
            <div class="txt">
              <h4>福利商城</h4>
              <p>更多的优惠属于你</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/imgs/img24.png"/>
            </div>
            <div class="txt">
              <h4>平价药店</h4>
              <p>让买药变轻松的事</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    name: 'Aidcard',
    data () {
      return {
        aidData: {},
        show1:false,
        show2:false,
        pageflag: 0,
        nowData: {},
        chData:{},
        bannerData:[],
        titles:'立即急救',
        face:''
      }
    },
    methods: {
      getInfo(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'aidcardt'
            }})
          return
        }
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getmyFirstAid',{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token") }})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.aidData = response.data.data
              if(response.data.data == null){
                this.pageflag = 1
                this.getBanner()
              }else {
                this.pageflag = 2
                if(response.data.data.sosc == 1){
                  this.titles = '最近急救信息'
                }

              }
            }
            else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',  query: {
                    url: 'aidcardt'
                  }})
              }
            }

          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      nowAid(id,sid){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'aidcardt'
            }})
          return
        }
        if(id == 1){
          this.$router.push({path: '/aidorder'})
          return
        }
        let parksid = 0
        let communityid = 0
        if(localStorage.getItem('parksid')){
          parksid = localStorage.getItem('parksid')
        }
        if(localStorage.getItem('communityid')){
          communityid = localStorage.getItem('communityid')
        }
        let params = {
          parksid: parksid,
          communityid: communityid,
          firstaidId : this.aidData.id,
          name : this.aidData.name,
          address: this.aidData.sosAddress,
          storeId: sid
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/CreatFirstAidOrder',params, {emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token") }})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                this.show1 = true
                this.getInfo()
                this.nowData = response.data.data
              }
              else{
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
                if(response.data.msg == 'token错误'){
                  this.$router.push({path: '/login',  query: {
                      url: 'aidcardt'
                    }})
                }
                if(response.data.msg == '您有未完成的急救单'){
                  this.$router.push({path: '/aidorder'})
                }
              }
            }
          ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      },
      chstatus(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'aidcardt'
            }})
          return
        }
        let params = {
          firstaidorderid : this.nowData.firstaidorderid,
        }
        this.$dialog.loading.open('查询中...')
        self.$http.get('/healthymvc/getFirstAidOrder', {emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token") }})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                this.show1 = false
                this.show2 = true
                this.chData = response.data.data
              }
              else{
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
                if(response.data.msg == 'token错误'){
                  this.$router.push({path: '/login',  query: {
                      url: 'aidcardt'
                    }})
                }
              }
            }
          ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      },
      prev(){
        this.$router.go(-1)
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
    },
    mounted: function () {
      let mySwiper = new Swiper('.swiper-container', {
        autoplay:true,
        loop:true
      })
      if(!localStorage.getItem("token")){
        this.$router.push({path: '/login',  query: {
            url: 'aidcardt'
          }})
      }else {
        if(localStorage.getItem('avatar_url')){
          this.face = localStorage.getItem('avatar_url')
        }
        this.getInfo()
      }
    },
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

  .hh1{
    margin:auto;border:1px solid #303133;border-radius: 8px;
  }
  .hh2{
    background-color:#fff;border:1px solid #303133;border-radius: 8px;padding: 25px;
  }
  .hh3{
    font-weight: bold;font-size: 36px;color: #666;line-height: 35px;text-align: center;
  }
  .hh4{
    background-color: #00CE9F;border-radius: 50px;height:30px;margin-top:25px;width: 100px;padding: 0;
  }
  .hh5{
    display: flex;padding: 15px 40px;background: rgb(242,242,242);border:1px solid #e0e0e0;border-radius: 25px;margin: 25px auto;
  }
  .hh6{
    text-align: center;font-size: 14px;color: #333;
  }
  .hh7{
    text-align: center;color: #999;margin-top: 15px;font-size: 14px;
  }
</style>

