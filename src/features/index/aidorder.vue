<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        最近急救信息
      </div>
    </div>
    <div class="orderd">
      <div class="orderd-vw">
        <div class="orderd-bd" style="padding: 8px">
          <p style="margin-top: 15px;font-size: 14px;">救援人姓名：{{detailData.rescuers_name}}</p>
          <p style="margin-top: 15px;font-size: 14px;">救援人电话：{{detailData.rescuers_phone}}</p>
          <p style="margin-top: 15px;font-size: 14px;">救援地址：{{detailData.firstaid_address}}</p>
          <p style="margin-top: 15px;font-size: 14px;">状态：
           <span v-if="detailData.status == 0">待处理</span>
            <span v-if="detailData.status == 1">服务中</span>
            <span v-if="detailData.status == 2">已完成</span>
            <span v-if="detailData.status == 3">已取消</span>
          </p>
        </div>
        <div style="display: none" @click="goList" class="hh"><p>明细列表</p></div>
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
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'aidorder'
            }})
          return
        }
        this.$dialog.loading.open('查询中...')
        self.$http.get('/healthymvc/getFirstAidOrder', {emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token") }})
          .then(function (response) {
              this.$dialog.loading.close()
              if(response.body.status == true){
                this.detailData = response.data.data
              }
              else{
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
                if(response.data.msg == 'token错误'){
                  this.$router.push({path: '/login',  query: {
                      url: 'aidorder'
                    }})
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
  .hh{
    width: 200px;
    height: 35px;
    background-color: #00CE9f;
    border-radius: 100px;line-height: 35px;
    justify-content: center;
    margin-left: 15%;
  }
  .hh p{
    color: #FFf;
    font-size: 16px;
    text-align: center;

  }
</style>

