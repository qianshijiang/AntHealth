<template>
  <div class="layout ">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>我的资料</p>
      </div>
    </div>
    <div class="myinfo">
      <form action="" method="post">
        <div class="body">
          <ul class="body-hd">
            <li style="overflow: hidden">
              <div class="left">
                头像
              </div>
              <div class="right">
                <div class="myinfo-ava">
                  <img v-if="face"  @click="uploadImg" :src="face" style="height:.8rem;width:.8rem;border-radius:.4rem"/>
                  <img v-else @click="uploadImg" src="../../assets/imgs/img39.png"/>
                </div>
              </div>
            </li>
          </ul>
          <yd-cell-item style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
            <span class="hhd" slot="left">昵称：</span>
            <yd-input slot="right" v-model="nickname" :show-clear-icon="false" required placeholder="请输入昵称" ></yd-input>
          </yd-cell-item>
          <yd-cell-item @click.native="updPhone" :show-clear-icon="false"  style="background-color: #fff;border-bottom: 1px solid #e0e0e0;position:relative;top:0;">
            <span class="hhd" slot="left">手机号：</span>
            <yd-input slot="right" v-model="phone" readonly :show-clear-icon="false"  placeholder="请输入手机号码"></yd-input>
            <img slot="right" style="position: absolute;top:18px;right: 12px;color: #c9c9c9;height: 12px;width: 8px;" src="../../assets/imgs/img12.png"/>
          </yd-cell-item>
          <yd-cell-item arrow style="background: #fff;">
            <span class="hhd" slot="left">出生日期：</span>
            <yd-datetime type="date" start-date="1941-01-01" v-model="datetime" slot="right"></yd-datetime>
          </yd-cell-item>
          <yd-cell-item @click.native="myaddress" style="background-color: #fff;border-bottom: 1px solid #e0e0e0;">
            <span class="hhd" slot="left">所在地区：</span>
            <yd-input slot="right" v-model="address" readonly :show-clear-icon="false"></yd-input>
            <img  slot="right" style="position: absolute;top:18px;right: 12px;color: #c9c9c9;height: 12px;width: 8px;" src="../../assets/imgs/img12.png"/>
          </yd-cell-item>
          <!--<yd-cell-group style="margin-bottom: 0;">-->
            <!--<yd-cell-item arrow>-->
              <!--<span slot="left">所在地区：</span>-->
              <!--<input slot="right" type="text" @click.stop="show1 = true" v-model="address" readonly placeholder="请选择地区">-->
            <!--</yd-cell-item>-->
          <!--</yd-cell-group>-->
          <!--<yd-cityselect style="overflow: scroll" v-model="show1" :callback="result1" :items="district"></yd-cityselect>-->
        </div>
        <div class="foot" @click="submit">
          <div class="hh">确认修改</div>
        </div>
      </form>
    </div>
    <input id="upfile" name="file" type="file" style="display:none;margin-bottom: 45px" accept="image/png,image/gif,image/jpeg" @change="update"/>
  </div>
</template>
<script>
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Service',
    data () {
      return {
        logonData: {},
        show1: false,
        nickname:'',
        phone: '',
        address: '',
        face: '',
        district: District,
        datetime: '',
      }
    },
    methods: {
      result1(ret) {
        this.address = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
      },
       times (val) {
        let date = new Date(val);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = date.getHours() + ':'
        let m = date.getMinutes() + ':'
        let s = date.getSeconds()
        return Y + M + D
      },
      prev(){
        this.$router.replace({path: '/my'})
      },
      updPhone(){
        this.$router.push({path: '/updatePhone'})
      },
      myaddress(){
        this.$router.push({path: '/areas'})
      },
      uploadImg: function() {
        document.getElementById("upfile").click();
      },
      update(e) {
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'myinfo'
            }})
          return
        }
        this.$dialog.loading.open('上传中...')
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append("photo", file, file.name); //通过append向form对象添加数据
        param.append("orderno", "10001"); //添加form表单中其他数据
        // console.log(param.get("photo")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去

        this.$http.post("/healthymvc/avatar_url", param, { emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token") }})
          .then(function(res) {
            this.$dialog.loading.close()
            if(res.body.status==true){
              this.face =  res.body.data.avatar_url
              localStorage.setItem("avatar_url", res.body.data.avatar_url)
            }
            else{
              this.$dialog.toast({
                mes: response.data,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'myinfo'}})
              }
            }
          },
          function(res) {
            this.$dialog.loading.close()
            console.log(res)
            // 处理失败的结果
          }
          );
      },
      getInfo(){
        // debugger
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'myinfo'
            }})
          return
        }
        let datas = {}
        datas = JSON.parse(localStorage.getItem("data"))
        let comm = ''
        let park = ''
        if(localStorage.getItem("commaddress")){
          comm = localStorage.getItem("commaddress")
        }
        if(localStorage.getItem("parkaddress")){
          park = localStorage.getItem("parkaddress")
        }
        if(comm !== '' || park !== ''){
          this.address = comm +' '+ park
        }else{
          this.address = '点击设置'
        }
        this.face = localStorage.getItem("avatar_url")
        this.nickname = localStorage.getItem("display_name")
        // this.address = localStorage.getItem("address")
        this.phone = localStorage.getItem("phone")
        let date = new Date(Number(datas.birthday))
        this.datetime = this.times(date)
      },
      submit(){
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'myinfo'
            }})
          return
        }
        let paramts = {
          display_name: this.nickname,
          birthday: this.datetime,
          // address: this.address,
        }
        this.$dialog.loading.open('提交中...')
        self.$http.post('/healthymvc/updateHealthyUser',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              localStorage.setItem("display_name", response.body.data.display_name)
              // localStorage.setItem("address", response.body.data.address)
            }
            else{
              this.$dialog.toast({
                mes: response.data,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'myinfo'}})
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
      this.getInfo()
    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .hh{
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
  .myinfo .body li{
    overflow: scroll;
  }
  .hhd{
    padding-top: 0 !important;
  }
</style>

