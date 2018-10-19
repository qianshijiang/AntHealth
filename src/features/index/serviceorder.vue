<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>服务订单</p>
      </div>
      <div class="right">

      </div>
    </div>
    <div class="servlist">
      <div class="head g-tab-hd">
        <ul>
          <li :class="{'on':navflag == 0}" @click="searchList(0)"><a>进行中</a></li>
          <li :class="{'on':navflag == 4}" @click="searchList(4)"><a >已完成</a></li>
          <li :class="{'on':navflag == 6}" @click="searchList(6)"><a >已取消</a></li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li v-for="item in listData" :key="item.orderno">
            <div class="bd">
              <div class="bd-l">
                <img :src="item.technicianAurl"/>
              </div>
              <div class="bd-r">
                <h3>技师：{{item.technicianName}}</h3>
                <h4>服务：{{item.serviceName}}</h4>
                <p>服务时间：{{item.serviceTime | momentFilter}}</p>
                <label>￥{{item.totalPrice}}</label>
              </div>
            </div>
            <div class="ft">
              <div class="ft-l">
                {{item.serviceAddress}}
              </div>
              <div class="ft-r" style="margin-left: 10px;">
                <!--<input type="button" name="" id="" value="取消" />-->
                <p style="text-align: center;color:#00CE9F;line-height: 23px;font-size: 12px;" @click="goRefund">取消</p>
              </div>
              <div class="ft-r">
                <p style="text-align: center;color:#00CE9F;line-height: 23px;font-size: 12px;" @click="goPay">支付</p>
              </div>
            </div>
          </li>

        </ul>
      </div>

    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Serviceorder',
    data () {
      return {
        listData: [],
        cancelData: {},
        navflag: 0,
        orderno: '123456'
      }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/serviceorderdetail'})
      },
      goPay(){
        this.$router.push({path: '/pay',query: {
            orderid:this.$route.query.orderid, type: this.$route.query.type
          }})
      },
      goRefund() {
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'serviceorder'
            }})
          return
        }
        let paramts = {
          orderno: this.orderno,
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/cancelserviceorder',paramts,{ emulateJSON: true, headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.$router.push({path: '/refund'})
              this.cancelData = response.data.data
            }
            else {
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'serviceorder'}})
              }
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      searchList(v){
        this.navflag = v
        this.getList()
      },
      prev(){
        this.$router.go(-1)
      },
      getList(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'serviceorder'
            }})
          return
        }
        this.listData = []
        let self = this
        let paramts = {
          status: this.navflag,
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getmyserviceorderlist',paramts,{ emulateJSON: true, headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.listData = response.data.data
            }
            else {
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'serviceorder'}})
              }
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
      if(this.$route.query.flag){
        this.navflag = this.$route.query.flag
      }
      this.getList()
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
    width: 100%;

  }
  .or-box1{
    display: flex;flex-direction: column;padding: 10px 20px;
  }
  .or-box2{
    margin: 10px;
  }
  .or-text{
    padding: 8px 0;
    line-height: 20px;
  }
  .or-text1{
    font-weight: bold;
    color: #999;
    font-size: 16px;
    text-align: center;
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e0e0e0;
    padding: 20px;
    background: rgb(255,255,255);
  }
  .box-imgb{
    width:40px;
    height: 50px;
    border: 1px solid #999;
    margin-right: 15px;
    margin-top: 25px;
  }
  .pol-content p{
    line-height: 30px;
    color: #333;
    font-size: 16px;

  }
  .pol-content1{
    height: auto;
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-right: 8px;
    background-color: rgb(242,242,242);
  }
  .pol-content1 p {
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-top:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    background: #ffffff;
  }
  .box-topj{
    border-bottom:1px solid #e0e0e0;
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
  .se-title1{
    font-size: 16px;
    color: #333;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .se-title4{
    font-size: 16px;
    color: #666;
    font-weight: bold;
    line-height: 35px;
  }
  .box-bottom{
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding: 5px 10px;
  }
  .box-topj{
    padding: 10px 25px;
  }
</style>

