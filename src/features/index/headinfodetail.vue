<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div  @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>头条详情</p>
      </div>
    </div>

    <div class="newsd">
      <div class="head">
        <h4>{{detailData.newTitle}}</h4>
        <p>2018 09/17  08:02</p>
      </div>
      <div class="body">
        <!--<p><img src="../../../static/imgs/img67.jpg"/></p>-->
        <p><img style="width: 100%;height: 210px;border-radius: 6px;" :src="detailData.newImg"/></p>
        <p>{{detailData.newcontent}}</p>


      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Headinfodetail',
    data () {
      return {
        detailData: {}
      }
    },
    methods: {
      prev(){
        this.$router.go(-1)
      },
      getDetail(){
        let self = this
        let paramts = {
          newid: this.$route.query.id,
        }
        self.$http.post('/api/getnewsdetails',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            if (response.data.status == true) {
              this.detailData = response.data.data
            }else {
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          })
          .catch(function (error) {
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

