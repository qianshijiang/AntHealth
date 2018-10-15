<template>
  <div>
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
      <div class="servf">
        <form action="" method="post">
          <div class="body">
            <ul>
              <li>
                <div class="label">
                  {{services.serviceName}}
                </div>
                <div class="input">
                  {{technicians.price}}/60分钟
                  <!--<input class="spinnerExample" type="" name=""  value="1" />-->
                  <!--插件-->
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="label">
                  {{technicians.occupationTitle}}
                </div>
                <div class="input">
                  <!--<img src="../../assets/imgs/img77.png"/>-->
                  <img :src="technicians.technicianAvatar_url"/>
                  {{technicians.technicianName}}
                </div>
              </li>
              <li>
                <div class="label c_gray">
                  当前技师无法服务时，允许更换技师
                </div>

                <div class="input">
                  <input type="checkbox"  class="choose-btn"  />
                  <label  class="choose-label" :class="{'nmm' : flags === true}" @click="flags = !flags"></label>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="label">
                  联系电话
                </div>
                <div class="input input-arr">
                  <input type="text"  v-model="phone" />
                </div>
              </li>
                <yd-cell-group style="margin-bottom: 0;">
                  <yd-cell-item arrow>
                    <span slot="left">服务地址：</span>
                    <input slot="right" type="text" @click.stop="show1 = true" v-model.trim="address" readonly placeholder="请选择收货地址">
                  </yd-cell-item>
                </yd-cell-group>
              <yd-cityselect style="overflow: scroll;height: auto" v-model="show1" :callback="result1" :items="district"></yd-cityselect>
              <!--</li>-->
              <li>
                <div class="label">
                  上门时间
                </div>
                <div class="input input-arr" @click="getTime">
                  <input type="text" readonly name="" v-model="addtime" placeholder="请选择上门时间"/>
                </div>
              </li>
              <li>
                <div class="label">
                  备注留言
                </div>
                <div class="input memo">
                  <input v-model="remarks" placeholder="请输入备注"/>
                </div>
              </li>
            </ul>
            <ul>
              <li @click="couponBock">
                <div class="label">
                  优惠券
                </div>
                <div class="input input-arr" @click="coupons = true">
                  <p style="text-align: right">{{this.couponl}}张</p>
                  <!--<input type="text" readonly name="" id="" value="" placeholder="0张"/>-->
                </div>
              </li>
              <li>
                <div class="label">
                  预计实付
                </div>
                <div class="input">
                  <input type="text" class="c_green number"  name="" id="" value="158元" />
                </div>
              </li>
            </ul>
          </div>
          <div class="foot foot-fixd">
            <div class="foot-l left">
              合计金额：<strong>¥158</strong>
            </div>
            <div class="foot-r right" @click="goPay">
              <p  class="foot-btn" >立即预约</p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="shade"></div>
    <!--<div class="">-->
    <div class="actd-ft body" v-if="coupons === true" style="display: block;bottom: 60px;background: rgb(250,250,250)">
      <dl>
        <dt>选择优惠卷券</dt>
        <span @click="coupons = false"  style="font-size: 0.5rem;float: right;margin-top: -44px;margin-right: 20px;color: #666;">&times;</span>
        <dd  style="position: relative;top: 0;">
          <img  style="position: absolute;top: 30px;left: 8px;height: 25px;width: 25px;" src="../../assets/imgs/img29.png"/>
          <div class="left" style="width: 3.2rem;margin-left: 15px">
            <h4>优惠卷类型：gg</h4>
            <p>优惠卷名称: <span> gg</span></p>
          </div>
          <div class="right">
            <p class="decrease">卷值<span style="color: rgb(148,97,93);margin: auto 2px;font-size: 18px;">90</span>元</p>
          </div>
        </dd>
        <!--<dd v-for="(item,index) in couponData" :key="item.id" v-if="index < 4" style="position: relative;top: 0;">-->
          <!--<img @click="nsel(item)" v-if="item.checked == true" style="position: absolute;top: 30px;left: 8px;height: 25px;width: 25px;" src="../../assets/imgs/img29.png"/>-->
          <!--<img @click="sel(item)" v-if="item.checked == false" style="position: absolute;top: 30px;left: 8px;height: 25px;width: 25px;" src="../../assets/imgs/img30.png"/>-->
          <!--<div class="left" style="width: 3.2rem;margin-left: 15px">-->
            <!--<h4>{{item.couponName}} <span v-if="item.ticketprice > 0">{{item.ticketprice}}</span></h4>-->
            <!--<p>类型：{{item.couponType}}</p>-->
          <!--</div>-->
          <!--<div class="right">-->
            <!--<div class="spinner">-->
              <!--<p class="decrease">金额</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</dd>-->
      </dl>
    </div>
    <!--</div>-->
    <div class="section_time" v-if="timeflag == true" style="display: block">
      <div class="hd">
        <div class="hd-left">
          <a @click="timeflag = false">取消</a>
        </div>
        <div class="hd-mid">
          <p>选择上门时间</p>
        </div>
        <div class="hd-right" @click="addTime">
          <a>确认</a>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item,index) in timeData" :key="item.weekdays" :class="{'on' : item.checked === true}" @click="selTimes(item)" >
            <a >
              <p class="time-s">{{item.datetimestr | seltime}}</p>
              <p class="time-x">{{item.weekdays}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="bd">
        <ul style="justify-content: flex-start;padding: 0 0 10px 0">
          <li style="margin:0.4rem 0.15rem 0 0.15rem" v-for="(itemd,index) in timeD" @click="selHh(itemd)" :key="itemd.serviceTime" :class="{'on' : itemd.check === true,'no-more':itemd.schedulingType == 2 || itemd.schedulingType == 1}">
            <a v-if="itemd.schedulingType==0">{{itemd.serviceTime | seltimess}}</a>
            <a v-if="itemd.schedulingType==2 ">约满</a>
            <a v-if="itemd.schedulingType==1 ">取消</a>
          </li>
          <!--<li class="no-more"><a href="#">约满</a></li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        timeData: [],
        timeD:[],
        timeflag: false,
        dates:'',
        hours: '',
        addtime: '',
        coupons:false,
        couponl:'',
        couponData:[],
        phone:'',
        flags: false,
        detailData: {},
        show1: false,
        replacetype: 0,
        address: '',
        remarks: '',
        coupon: 0,
        servicenum: 1,
        district: District,
        technicians:{},
        services: {},
      }
    },
    filters: {
      seltime: function (val) {
        let a = ''
        a = val.toString()
        return a.substr(5,a.length-1)
      },
      seltimess: function (val) {
        let a = ''
        a = val.toString()
        return a.substr(11,15)
      },
    },
    methods: {
      result1(ret) {
        this.address = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      goPay() {
        this.submit()

      },
      couponBock(){
        this.coupons = true
      },
      goCoupon(){
        this.$router.push({path: '/coupon'})
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
      submit(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'appointment'
            }})
          return
        }
        let self = this
        let hbh = 0
        if(this.flags == false){
          hbh = 0
        }else{
          hbh = 1
        }
        if(!this.phone){
          this.$dialog.toast({
            mes:  '请填写预留号码',
            timeout: 1500
          })
          return
        }
        if(!this.address){
          this.$dialog.toast({
            mes:  '请选择服务地址',
            timeout: 1500
          })
          return
        }
        if(!this.addtime){
          this.$dialog.toast({
            mes:  '请选择服务时间',
            timeout: 1500
          })
          return
        }
        let adds = this.address
        adds = adds.replace(/\s+/g,"")
        let paramts = {
          technicianid: this.$route.query.tid,
          serviceid: this.$route.query.id,
          replaceType: hbh,
          guestPhone: this.phone,
          serviceAddress: adds.trim(),
          serviceTime: this.addtime,
          remarks: this.remarks,
          couponId: 0,
          serviceNum: 1
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/creatServiceOrder',paramts,{emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.$router.push({path: '/pay',query: {
                  orderid:response.data.data, type: 1
                }})
            }
            this.$dialog.toast({
              mes:  response.data.msg,
              timeout: 1500
            })
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getTime(){
        let self = this
        let paramts = {
          technicianid: this.$route.query.tid,
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getservicetime',paramts,{ emulateJSON: true,headers: { "Content-Type": "multipart/form-data"} })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.timeflag = true
              let times = response.data.data.days
              times.forEach((item,index) => {
                if(index == 0){
                  this.timeD = []
                  this.dates = item.datetimestr
                  this.timeData.push({datetimestr: item.datetimestr,weekdays: item.weekdays,hours: item.hours,checked:true})
                  let hh = item.hours
                  hh.forEach((items,indexs) => {
                    if(indexs == 0){
                      this.hours = items.serviceTime
                      this.timeD.push({schedulingType: items.schedulingType,serviceTime: items.serviceTime,check:true})
                    }else{
                      this.timeD.push({schedulingType: items.schedulingType,serviceTime: items.serviceTime,check:false})
                    }

                  })
                }
                else {
                  this.timeData.push({datetimestr: item.datetimestr,weekdays: item.weekdays,hours: item.hours,checked:false})
                }
              })
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
      selTimes(item){
        this.timeD = []
        this.dates = item.datetimestr
        let hh = item.hours
        hh.forEach((items,indexs) => {
          if(indexs == 0){
            this.hours = items.serviceTime
            this.timeD.push({schedulingType: items.schedulingType,serviceTime: items.serviceTime,check:true})
          }else{
            this.timeD.push({schedulingType: items.schedulingType,serviceTime: items.serviceTime,check:false})
          }
        })
        this.timeData.forEach(items => {
          if(items.weekdays == item.weekdays){
            items.checked = true
          }
          else {
            items.checked = false
          }
        })
      },
      selHh(item){
        this.hours = item.serviceTime
        this.timeD.forEach(items => {
          if(items.serviceTime == item.serviceTime){
            items.check = true
          }
          else {
            items.check = false
          }
        })
      },
      addTime(){
        this.timeflag = false
        this.addtime = this.hours
      },
      getCoupon(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'appointment'
            }})
          return
        }
        let self = this
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getmycoupon',{emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
              this.$dialog.loading.close()
              if(response.body.status == true){
                self.couponl = response.data.data.length
                let datas = response.data.data
                datas.forEach( item => {
                  this.couponData.push({id: item.id,couponName: item.couponName, couponValue: item.couponValue,
                    couponType: item.couponType, checked: false})
                })
                // this.ticketData = response.data.data.tickets
              }
              else{
                if(response.data.msg == 'token错误'){
                  this.$router.push({path: '/login',  query: {
                      url: 'appointment'
                    }})
                }
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
              }
            }
          ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      },
      nsel(item){
        item.checked = false
        this.coupon = 0
      },
      sel(item){
        this.couponData.forEach(items => {
          if(items.id = item.id){
            items.checked = true
            this.coupon = items.id
          }else{
            items.checked = false
          }
        })
      },
    },
    mounted: function () {
      this.getInfo()
      this.getCoupon()
      if(localStorage.getItem('address')){
        this.address = localStorage.getItem('address')
      }
      if(localStorage.getItem('phone')){
        this.phone = localStorage.getItem('phone')
      }
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style>
  .yd-cityselect-content yd-cityselect-move-animate yd-cityselect-prev li{
    height: auto!important;
    overflow: scroll!important;
  }

</style>
<style lang="scss" scoped>
  .nmm{
    background-color: #00CE9f;
  }
  .servf .body ul li{
    height: auto !important;
  }
  .myinfo .body li{
    overflow: scroll;
  }
  .myinfo .body-bd li{
    height: auto;
    padding: 0;
  }
  .yd-cell-right .yd-datetime-input, .yd-cell-right input[type=date], .yd-cell-right input[type=datetime-local], .yd-cell-right input[type=email], .yd-cell-right input[type=number]:not(.yd-spinner-input), .yd-cell-right input[type=password], .yd-cell-right input[type=tel], .yd-cell-right input[type=text], .yd-cell-right input[type=time], .yd-cell-right input[type=url]{
    text-align: right;
  }
</style>

