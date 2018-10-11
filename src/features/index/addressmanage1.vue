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
              <yd-input slot="right" v-model="nickname" placeholder="请输入昵称"></yd-input>
            </yd-cell-item>
            <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
              <span slot="left">手机号：</span>
              <yd-input slot="right" v-model="phone" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <yd-cell-group style="margin-bottom: 0">
              <yd-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="address" readonly placeholder="请选择收货地址">
              </yd-cell-item>
            </yd-cell-group>
            <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
            <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
              <span slot="left">详细地址：</span>
              <yd-input slot="right" v-model="addressdetail" placeholder="请输入详细地址"></yd-input>
            </yd-cell-item>
        </div>
        <div class="foot">
          <input type="submit" name="" id="" value="确 定" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import District from 'ydui-district/dist/jd_province_city_area_id'
    export default {
    name: 'Addressmanage',
    data () {
      return {
        nickname: '',
        phone: '',
        show1: false,
        address: '',
        addressdetail: '',
        district: District
      }
    },
    methods: {
      result2(ret) {
        this.address = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
      },
      prev(){
        this.$router.go(-1)
      },
      submit(){
        let self = this
        let paramts = {
          page: 1,
          pagemax: 20
        }
        self.$http.post('api/gettopnews',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.data) {
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
    mounted: function () {},
    // components: {
    //   TopBar
    // }
  }
</script>
<style lang="scss" scoped>
  .myinfo .body-bd li{
    height: auto;
    padding: 0;
  }
  .home-box {
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
  }
  .add-box{
    border-bottom: 1px solid #e0e0e0;width: 95%;margin: auto;padding: 5px 0;
  }
  .add-text{
    margin-bottom: 10px;
  }
  .add-text2{
    color: #666;margin-right: 10px;
  }
  .add-box1{
    border-bottom: 1px solid #e0e0e0;width: 95%;margin: auto;
  }
  .add-box2{
    line-height: 30px;display: flex;flex-direction: row;margin-top: 10px;
  }
  .add-box3{
    height: 25px;width: 25px;background: rgb(242,136,147);border-radius:12.5px;position: relative;top: 5px;right: 5px;
  }
  .add-box3j{
    background: #fff;
    border:1px solid #e0e0e0;
  }
  .add-box4{
    position: absolute;top: -2px;left:3px;
  }
  .add-text1{
    font-size: 14px;line-height: 35px;
  }
  .add-box5{
    display: flex;flex-direction: row;justify-content: flex-end;align-items: center;margin-top: 5px;
  }
  .pol-content{
    height: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgb(246,246,246);
    margin-top: 15px;
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
    /*padding: 15px;*/
  }
  .box-top{
    height: auto;
    width: 100%;
   margin-top: 10px;
    background: #ffffff;
  }
  .box-topj{
    justify-content: flex-end;
  }
  .box-imgb{
    width:50px;
    height: 60px;
    border: 1px solid #999;
    margin-right: 15px;
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
    line-height: 60px;
  }
  .se-title2{
    color: #999;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .se-title4{
    font-size: 14px;
    color: #666;
    font-weight: bold;
  }
</style>

