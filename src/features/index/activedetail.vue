<template>
  <div class="layout pb120">
    <div class="header">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        活动详情
      </div>
    </div>
    <div class="actd">
      <div class="actd-vw">
        <!--<img src="../../assets/imgs/img79.jpg"/>-->
        <img style="width: 100%;height: 240px;" :src="detailData.activity_img"/>
      </div>
      <div class="actd-hd">
        <h2>{{detailData.activity_name}}</h2>
        <div class="label">
          <span v-for="(item,index) in detailData.activity_titles" :key="index">{{item.title}}</span>
        </div>
        <label class="c_green">¥{{detailData.activity_price}}</label>
      </div>
      <div class="actd-nv">
        <ul>
          <li>
            <div @click="goAddress(detailData.store_id)">
              <i><img src="../../assets/imgs/img81.png"/></i>主办门店
            </div>
            <a href="#" class="more"></a>
          </li>
          <li>
            <i><img src="../../assets/imgs/img103.png"/></i>
            {{detailData.activity_time}}
          </li>
          <li>
            <i><img src="../../assets/imgs/img82.png"/></i>
            {{detailData.activity_address}}
          </li>
        </ul>
      </div>
      <div class="actd-bd" style="margin-bottom:60px;">
        <div class="head">
          详情
        </div>
        <div class="body" >
          <!--<p><img src="../../../static/imgs/img73.jpg"/></p>-->
          <p style="overflow: hidden">{{detailData.activity_details}}</p>

        </div>
      </div>
      <div class="actd-ft">
        <div class="body" v-if="ticket === true" style="background: rgba(255,255,255,1);display: block">
          <dl>
            <dt>选择票券</dt>
            <span @click="close"  style="font-size: 0.5rem;float: right;margin-top: -44px;margin-right: 20px;color: #666;">&times;</span>
            <dd v-for="(item,index) in ticketData" :key="item.ticketid" v-if="index < 4" style="position: relative;top: 0;">
              <img @click="nsel(item)" v-if="item.checked == true" style="position: absolute;top: 30px;left: 8px;height: 25px;width: 25px;" src="../../assets/imgs/img29.png"/>
              <img @click="sel(item)" v-if="item.checked == false" style="position: absolute;top: 30px;left: 8px;height: 25px;width: 25px;" src="../../assets/imgs/img30.png"/>
              <div class="left" style="width: 3.2rem;margin-left: 15px">
                <h4>{{item.ticketName}} <span v-if="item.ticketprice > 0">{{item.ticketprice}}</span></h4>
                <p>库存：{{item.ticketnum}}张</p>
              </div>
              <div class="right">
                <div class="spinner">
                  <input type="button" class="decrease" @click="reduces(item)">
                  <input class="spinnerExample value passive" v-model="item.num" maxlength="2">
                  <input type="button" @click="add(item)" class="increase">
                </div>
              </div>
            </dd>
          </dl>
        </div>
        <div class="foot" v-if="ticket==false">
          <p @click="goOpen" style="display: block;height: .8rem;line-height: .8rem; text-align: center;color: #fff; font-size: .32rem;background: #00CE9F; -moz-border-radius: .42rem; border-radius: .42rem;">我要报名</p>
        </div>
        <div class="foot" v-if="ticket==true">
          <p @click="submit" style="display: block;height: .8rem;line-height: .8rem; text-align: center;color: #fff; font-size: .32rem;background: #00CE9F; -moz-border-radius: .42rem; border-radius: .42rem;">下一步</p>
        </div>
      </div>
      <div class="mask"></div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Activedetail',
    data () {
      return {
        detailData: {},
        ticket : false,
        ticketnum: 1,
        ticketData:[]
      }
    },
    methods: {
      goOpen() {
        this.ticket = true
        this.getTicket()
        // this.$router.push({path: '/payshure'})
      },
      close(){
        this.ticket = false
      },
      goAddress(storeid ) {
        this.$router.push({path: '/storeaddress',query: {
            storeid: storeid
          }})
      },
      prev(){
        this.$router.go(-1)
      },
      getDetail(){
        this.$dialog.loading.open('获取中...')
        let self = this
        let paramts = {
          activityid: this.$route.query.id,
        }
        self.$http.post('/healthymvc/activityDetails',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.detailData = response.data.data.activitys
              this.detailData = this.detailData
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
      getTicket(){
        let self = this
        this.$dialog.loading.open('获取中...')
        let params = {
          activityid: this.$route.query.id,
        }
        self.$http.post('/healthymvc/activityticket',params, {emulateJSON: true})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                let datas = response.data.data.tickets
                datas.forEach( item => {
                  this.ticketData.push({ticketid: item.ticketid,ticketName: item.ticketName, ticketprice: item.ticketprice,
                    ticketnum: item.ticketnum, num: 1, checked: false})
                })
                // this.ticketData = response.data.data.tickets
              }
              else{
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
      reduces(item){
        if(item.num < 2){
          this.$dialog.toast({
            mes:  '至少购买一张',
            timeout: 1500
          })
          return
        }
        item.num--
      },
      add(item){
        if(item.num > item.ticketnum){
          this.$dialog.toast({
            mes:  '购买数量不能超过总数量',
            timeout: 1500
          })
          return
        }
        item.num++
      },
      nsel(item){
        item.checked = false
      },
      sel(item){
        if(item.ticketnum > 0){
          item.checked = true
        }
        else {
          this.$dialog.toast({
            mes:  '票量不足',
            timeout: 1500
          })
          return
        }
      },
      submit(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'activedetail'
            }})
          return
        }
        let ticketjson = []
        let ticketres = {}
        this.ticketData.forEach( item => {
          if(item.checked == true){
            ticketjson.push({ticketId: item.ticketid ,ticketnum: item.num})
          }
        })
        ticketres.ticketres = ticketjson
        if(ticketjson.length == 0){
          this.$dialog.toast({
            mes:  '至少选择一张票',
            timeout: 1500
          })
          return
        }
        let self = this
        this.$dialog.loading.open('提交中...')
        let paramts = {
          activityid : self.$route.query.id,
          ticketjson :  JSON.stringify(ticketres)
        }
        self.$http.post('/healthymvc/creatActivityOrder',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.$router.push({path: '/pay',query: {
                  orderid:response.data.data.order.orderno, type: 2
                }})
              // this.$router.push({path: '/activeorder'})
            }else {
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',  query: {
                    url: 'activedetail'
                  }})
              }
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
    }
  }
</script>
<style lang="scss" scoped>
</style>

