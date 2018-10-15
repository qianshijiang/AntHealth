<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        活动订单
      </div>

    </div>
    <div class="actorder">
      <div class="head g-tab-hd">
        <ul>
          <li :class="{'xh' : statusflag === 99}" @click="searchList(99)"><p>全部</p></li>
          <li :class="{'xh' : statusflag === 0}" @click="searchList(0)"><p>待审核</p></li>
          <li :class="{'xh' : statusflag === 4}" @click="searchList(4)"><p>审核中</p></li>
          <li :class="{'xh' : statusflag === 7}" @click="searchList(7)"><p>已验票</p></li>
          <li :class="{'xh' : statusflag === 9}"  @click="searchList(9)"><p>退票</p></li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li v-for="(item,index) in listData" :key="index" @click="goDetail(item)">
            <div class="left">
              <h4>{{item.activitename}}</h4>
              <dl>
                <dt>{{item.activitetime}} </dt>
                <dd>{{item.activiteaddress}}</dd>
              </dl>
            </div>
            <div class="right">
              <h4>{{item.ticketname}}</h4>
              <p class="c_green">¥{{item.unitprice}}</p>
            </div>
            <div class="img img-wait" v-if="statusflag == 0"></div>
            <div class="img img-doing" v-if="statusflag == 4"></div>
            <div class="img img-done" v-if="statusflag == 7"></div>
            <div class="img img-return" v-if="statusflag == 9"></div>
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
    name: 'Activeorder',
    data () {
      return {
        status: 0,
        listData: [],
        statusflag: 99
      }
    },
    methods: {
      goDetail(item) {
        this.$router.push({path: '/activeorderdetail',query: {
            item: item
          }})
      },
      prev(){
        this.$router.go(-1)
      },
      getActiveOrder(){
        this.$dialog.loading.open('获取中...')
        this.listData = []
        let self = this
        let params = {
          status: this.statusflag,
          page:1,
          pagemax:10
        }
        self.$http.post('/healthymvc/getmyticket',params, {emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                this.listData = response.data.data.tickets
              }
              else{
                if(response.data.msg == 'token错误'){
                  this.$router.push({path: '/login'})
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
      goRefund() {
        this.$router.push({path: '/refund'})
      },
      searchList(v){
        this.statusflag = v
        this.getActiveOrder()
      }
    },
    mounted: function () {
      if(this.$route.query.flag){
        this.statusflag = this.$route.query.flag
      }
      this.getActiveOrder()
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .xq{
    color:#999;
  }
  .xh{
    color: #333;
    border-bottom: 1px solid #00CE9F
  }
</style>

