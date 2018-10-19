<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        积分明细
      </div>
    </div>
    <div class="orderd">
      <div class="orderd-vw" >
        <div v-if="detailData !== null">
          <div class="orderd-bd">
            <p style="margin-top: 5px;font-size: 16px;color: #00CE9F">剩余可用积分：{{detailData.all_integral}}</p>
            <p style="margin-top: 15px;font-size: 16px;color: #aa0000">冻结积分：{{detailData.freezing_integral}}</p>
            <p style="margin-top: 15px;font-size: 16px;">已使用积分：{{detailData.used_integral}}</p>
          </div>
          <div @click="goList" class="hh"><p>明细列表</p></div>
        </div>
        <div style="height: auto;width: 100%;padding: 50px;" v-else>
          <p style="text-align: center;font-size: 16px;">暂无积分！</p>
        </div>
      </div>
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
      goList() {
        this.$router.push({path: '/integraldetail'})
      },
      prev(){
        this.$router.go(-1)
      },
      getDetail(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'integral'
            }})
          return
        }
        this.$dialog.loading.open('获取中...')
        let self = this
        self.$http.get('/healthymvc/getmyintegral',{ emulateJSON: true ,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.detailData = response.data.data
            }else {
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url: 'integral'}})
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
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .hh{
    width: 200px;
    height: 35px;
    background-color: #00CE9f;
    border-radius: 100px;
    line-height: 35px;
    justify-content: center;
    margin-left: 15%;
  }
  .hh p{
    color: #FFf;
    font-size: 16px;
    text-align: center;

  }
</style>

