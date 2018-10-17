<template>
  <div class="layout ">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>地址管理</p>
      </div>
    </div>
    <div class="myinfo">
      <form action="" method="post">
        <div class="body">
            <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
              <span slot="left">昵称：</span>
              <yd-input slot="right" v-model="nickname" required placeholder="请输入昵称"></yd-input>
            </yd-cell-item>
            <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
              <span slot="left">手机号：</span>
              <yd-input slot="right" v-model="phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <yd-cell-group style="margin-bottom: 0">
              <yd-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="address" readonly placeholder="请选择收货地址">
              </yd-cell-item>
            </yd-cell-group>
            <yd-cityselect style="overflow: scroll" v-model="show1" :callback="result1" :items="district"></yd-cityselect>
            <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
              <span slot="left">详细地址：</span>
              <yd-input slot="right" required v-model="addressdetail" placeholder="请输入详细地址"></yd-input>
            </yd-cell-item>
        </div>
        <div class="foot" @click="submit">
          <div class="hhs">确 定</div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import District from 'ydui-district/dist/jd_province_city_area_id'
    export default {
    name: 'Addressmanage2',
    data () {
      return {
        nickname: '',
        phone: '',
        show1: false,
        address: '',
        addressdetail: '',
        status: 0,
        district: District,
        infoData: {},
        province:'',
        city:'',
        area:'',
      }
    },
    methods: {
      result1(ret) {
        this.address = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
        this.province = ret.itemName1
        this.city = ret.itemName2
        this.area = ret.itemName3
      },
      prev(){
        this.$router.go(-1)
      },
      getinfo(){
        this.nickname = this.infoData.name
        this.phone = this.infoData.phone
        this.status = this.infoData.status
        this.address = this.infoData.address
        this.addressdetail = this.infoData.detailedAddress
      },
      submit(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'addressmanage2'
            }})
          return
        }
        if(!this.address){
          this.$dialog.toast({
            mes: '请选择地址',
            timeout: 1500
          })
          return
        }
        if(!this.nickname || !this.phone || !this.addressdetail){
          this.$dialog.toast({
            mes: '信息未填写完！',
            timeout: 1500
          })
          return
        }
        let adds = this.address
        adds = adds.replace(/\s+/g,"")
        let paramts = {
          myaddressid: this.infoData.id,
          name: this.nickname,
          phone: this.phone,
          status: this.infoData.status,
          province:this.province,
          city:this.city,
          area:this.area,
          address: adds,
          detailed_address: this.addressdetail,
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/upmyaddress',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.$router.replace({path: '/addressmanage',query:{url:this.$route.query.url}})
            }
            else{
              this.$dialog.toast({
                mes: response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'addressmanage2'}})
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
      this.infoData = this.$route.query.item
      this.getinfo()
    }
  }
</script>
<style>
  /*.myinfo .body li{*/
    /*overflow: scroll;*/
  /*}*/
</style>
<style lang="scss" scoped>
  .myinfo .body li{
    overflow: scroll;
  }
  .myinfo .body-bd li{
    height: auto;
    padding: 0;
  }

 .hhs{
   height: .84rem;
   line-height: .84rem;
   text-align: center;
   border: 0;
   background: #00CE9F;
   border-radius: .42rem;
   width: 100%;
   font-size: .3rem;
   color: #fff;
 }
  span{padding-bottom: 0.12rem!important;}
</style>

