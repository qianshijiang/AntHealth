<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        活动订单
      </div>
    </div>
    <div class="orderd">

      <div class="orderd-vw">
        <div class="head">
          {{detailData.ticketname}}
        </div>
        <div class="body">
          <img src="../../assets/imgs/qrcode.png"/>
          <p>验票码：{{detailData.ticketorder}}</p>
        </div>
        <div class="foot">
          <img src="../../assets/imgs/img95.png"/>
          <!--待审核-->
        </div>
      </div>

      <div class="orderd-hd">
        <h4>{{detailData.activitename}}</h4>
        <dl>
          <dt>{{detailData.activitetime | momentFilter}}</dt>
          <dd>{{detailData.activiteaddress}}</dd>
        </dl>
      </div>
      <div class="orderd-bd">
        <p>姓名：{{detailData.guestname}}</p>
        <p>手机：{{detailData.guestphone}}</p>
      </div>

    </div>
    <div class="orderd-f">
      购票时间：{{detailData.creattime | momentFilter}}
      <p style="float: right;margin-right: 25px;font-size: 14px;color: #333;font-weight: bold" @click="delOrder">取消</p>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Aidcard',
    data () {
      return {
        detailData: {},
        show2: false,
        radio2: 2
      }
    },
    methods: {
      goRefund() {
        this.$router.push({path: '/refund'})
      },
      delOrder(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'activeorderdetail'
            }})
          return
        }
        this.$dialog.loading.open('提交中...')
        let paramts ={
          myticketid: this.detailData.ticketorder,
          status: this.$route.query.status
        }
        self.$http.post('/healthymvc/activityordercancel',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.$router.push({path: '/refund'})
            }
            else {
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'activeorderdetail',item:this.$route.query.item}})
              }
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
            this.getList()
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      goAppoin() {
        this.$router.push({path: '/appointment'})
      },
      prev(){
        this.$router.go(-1)
      }
    },
    mounted: function () {
      // console.log(JSON.stringify(this.$route.query.item))
      this.detailData = this.$route.query.item
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>

</style>

