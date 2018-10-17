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
        <ul style="display: flex;justify-content: space-around">
          <!--<li :class="{'xh' : statusflag === 99}" @click="searchList(99)"><p>全部</p></li>-->
          <li :class="{'xh' : statusflag === 0}" @click="searchList(0)"><p>待审核</p></li>
          <!--<li :class="{'xh' : statusflag === 4}" @click="searchList(4)"><p>审核中</p></li>-->
          <li :class="{'xh' : statusflag === 1}" @click="searchList(1)"><p>已验票</p></li>
          <li :class="{'xh' : statusflag === 3}"  @click="searchList(3)"><p>退票</p></li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <yd-infinitescroll  :callback="getActiveOrder" ref="infinitescrollDemo">
            <yd-list theme="1" slot="list">
          <li v-for="(item,index) in list" :key="index" @click="goDetail(item)">
            <div class="left">
              <h4>{{item.activitename}}</h4>
              <dl>
                <dt>{{item.activitetime | momentFilter}} </dt>
                <dd>{{item.activiteaddress}}</dd>
              </dl>
            </div>
            <div class="right">
              <h4>{{item.ticketname}}</h4>
              <p class="c_green">¥{{item.unitprice}}</p>
            </div>
            <div class="ft-r">
              <p style="text-align: center;color:#00CE9F;line-height: 23px;font-size: 12px;" @click="goPay">支付</p>
            </div>
            <div class="img img-wait" v-if="statusflag == 0"></div>
            <div class="img img-doing" v-if="statusflag == 4"></div>
            <div class="img img-done" v-if="statusflag == 7"></div>
            <div class="img img-return" v-if="statusflag == 9"></div>
          </li>
            </yd-list>
            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">~~没有数据啦~~</span>

            <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
          </yd-infinitescroll>
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
        list: [],
        page:1,
        pagesize:10,
        statusflag: 0
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
      goPay(){
        this.$router.push({path: '/pay',query: {
            orderid:this.$route.query.orderid, type: this.$route.query.type
          }})
      },
      getActiveOrder(){
        this.$dialog.loading.open('获取中...')
        let self = this
        let page = this.page > 1 ? this.page - 1 : this.page
        let params = {
          status: this.statusflag,
          page: page,
          pagemax:this.pagesize
        }
        self.$http.post('/healthymvc/getmyticket',params, {emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                this.list = response.data.data.tickets
                const _list = response.data.data.tickets

                  this.list = [...this.list, ..._list];

                if (_list.length < this.pageSize || this.page == 3) {
                  /* 所有数据加载完毕 */
                  this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                  return;
                }

                /* 单次请求数据完毕 */
                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

                this.page++;
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
        this.page = 1
        this. pagesize = 10
        this.list = []
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

