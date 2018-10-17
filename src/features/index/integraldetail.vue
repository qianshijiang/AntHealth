<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        积分详细
      </div>

    </div>
    <div class="actorder">
      <div class="body g-tab-bd">
        <ul>
          <li v-for="(item,index) in listData" :key="index">
            <div class="left">
              <h4>积分值：{{item.integral}} 分</h4>
              <p style="display: flex;flex-direction: column;color: #666;">
                <span>发生时间：{{item.create_date | momentFilter}}</span>
                <span style="margin-top: 10px;">备注：{{item.remarks}}</span>
              </p>
            </div>
            <div class="right">
              <h4 v-if="item.objtype == 1">类型：加</h4>
              <h4 v-if="item.objtype == 2">类型：减</h4>
              <p class="c_green" style="margin-top: 15px;" v-if="item.status == 0">状态：正常</p>
              <p class="c_green" style="margin-top: 15px;" v-if="item.status == 1">状态：冻结</p>
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
    name: 'Activeorder',
    data () {
      return {
        listData: [],
      }
    },
    methods: {
      prev(){
        this.$router.go(-1)
      },
      getDetail(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'integraldetail'
            }})
          return
        }
        this.$dialog.loading.open('获取中...')
        this.listData = []
        let self = this
        let params = {
          page:1,
          pagemax:10
        }
        self.$http.post('/healthymvc/getmyintegrallog',params, {emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                this.listData = response.data.data
              }
              else{
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
                if(response.data.msg == 'token错误'){
                  this.$router.push({path: '/login',query:{url: 'integraldetail'}})
                }
              }
            }
          ).catch(function (error) {
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
  .xq{
    color:#999;
  }
  .xh{
    color: #333;
    border-bottom: 1px solid #00CE9F
  }
</style>

