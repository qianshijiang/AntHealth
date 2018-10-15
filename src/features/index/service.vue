<template>
  <div class="layout pb120">
    <div class="header header-bg">
      <div class="left">
        <p class="address">上门地址：<span>{{myaddress}}</span></p>
      </div>
      <div class="center">

      </div>
      <div class="right" @click="goAddre">
        <a class="changeaddr border_2"><span>更换地址</span></a>
      </div>
    </div>
    <div class="selectaddr">
      <div class="head">
        <ul>
          <li  v-for="item in typeData" :key="item.id">
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body" style="margin-bottom: 60px;">
        <ul>
          <li v-for="item in listData" :key="item.id" @click="goDetail(item.serviceId,item.technicianid)">
              <div class="img">
                <!--<img src="../../assets/imgs/img77.png"/>-->
                <img :src="item.technicianAvatar_url"/>
              </div>
              <div class="txt">
                <h2>{{item.technicianName}}</h2>
                <h4>
                  <span>{{item.technicianAge}}岁</span>
                  <span>|</span>
                  <span>{{item.nativePlace}}</span>
                  <span>|</span>
                  <span>{{item.occupationTitle}}</span>
                </h4>
                <p>{{item.introduction}}</p>
                <address>{{item.distance}}</address>
              </div>
          </li>

        </ul>
      </div>
    </div>
    <FooterBar pageTag="1"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        typeData: [],
        listData:[],
        typeid: '',
        navflag: 1,
        address:'',
        myaddress:'请选择服务地址'
      }
    },
    methods: {
      searchList(id){
        this.typeData.forEach(item => {
          if(item.id === id){
            item.check = true
          }else {
            item.check = false
          }
        })
        this.typeid = id
        this.getList()
      },
      getListType(){
        let self = this
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getservicetypename',{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              let datas = response.data.data
              datas.forEach((item,index) => {
                if(index === 0){
                  this.typeid = item.id
                  this.typeData.push({check: true,id: item.id,typename: item.typename})
                }
                else {
                  this.typeData.push({check: false,id: item.id,typename: item.typename})
                }
              })
            }
            else {
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
      getList(){
        this.listData = []
        let self = this
        let adds = this.address
        if(adds){
          adds = adds.replace(/\s+/g,"")
        }
        else {
          adds = ''
        }
        let paramts = {
          typeid: this.typeid,
          page: 1,
          pagemax: 10,
          address: adds
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/gettechnicianbytype',paramts,{ emulateJSON: true, headers: { "Content-Type": "multipart/form-data"}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.listData = response.data.data
            }
            else {
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
      goDetail(id,tid) {
        this.$router.push({path: '/servicedetail',query: {
            id: id,tid: tid
          }})
      },
      goAddre(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'service'
            }})
        }else {
          this.$router.push({path: '/addressmanage'})
        }
      },
    },
    mounted: function () {
      this.getListType()
      if(localStorage.getItem('address')){
        this.address = localStorage.getItem('address')
        this.myaddress = localStorage.getItem('address')
      }
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

