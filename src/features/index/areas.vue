<template>
  <div class="layout">
    <div class="header header-bg">
      <div class="left">
        <a @click="prev" class="back"></a>
      </div>
      <div class="center">
        <p>选择用户类型</p>
      </div>
      <div class="right">
        <a class="addr">{{this.nowposition}}</a>
      </div>
    </div>
    <div class="selectype">
      <div class="head">
        <ul>
          <li :class="{'on': areaflag == 1}" @click="selArea(1)"><a>社区用户</a></li>
          <li :class="{'on': areaflag == 2}" @click="selArea(2)"><a >园区用户</a></li>
        </ul>
      </div>
      <yd-cell-item arrow type="label" >
        <span slot="left">省份：</span>
        <select slot="right" v-model="provinceid" required @change="selAreas(provinceid,1)">
          <option value="">请选择省份</option>
          <option
            v-for="item in province"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </option>
        </select>
      </yd-cell-item>
      <yd-cell-item arrow type="label">
        <span slot="left">城市：</span>
        <select slot="right" v-model="cityid" required @change="selAreas(cityid,2)">
          <option value="">请选择城市</option>
          <option
            v-for="item in cityy"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </option>
        </select>
      </yd-cell-item>
      <yd-cell-item arrow type="label">
        <span slot="left">区（县）：</span>
        <select slot="right" v-model="countryid" required >
          <option value="">请选择区（县）</option>
          <option
            v-for="item in countryy"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </option>
        </select>
      </yd-cell-item>
     <div class="hnm" @click="getShequ"><p>确定</p></div>
      <div class="body">
        <!--<form action="" method="post">-->
          <input type="text"  class="text" v-model="searchs" @keyup.enter="submit" placeholder="输入搜索内容"/>
          <!--<input type="reset" class="res"  value="取消" />-->
        <!--</form>-->
      </div>
      <div class="foot">
        <ul>
          <!--<li v-for="item in shequData" :key="item.id" style="display: flex;flex-direction: row">-->
            <!--<img v-if="item.checked == true" style="height: 24px;width: 24px;margin-right: 5px;" src="../../assets/imgs/img29.png" />-->
            <!--<img v-if="item.checked == false" @click=selShequ(item) style="height: 24px;width: 24px;margin-right: 5px;" src="../../assets/imgs/img30.png" />-->
            <!--<a>-->
              <!--<h4>{{item.name}}</h4>-->
              <!--<p>{{item.address}}/{{item.linkman}}</p>-->
            <!--</a>-->
          <!--</li>-->
          <li v-for="item in shequData" :key="item.id">
            <!--<div class="img">-->
              <!--<img src="../../assets/imgs/img11.jpg"/>-->

            <!--</div>-->
            <div style="display: flex;flex-direction: row">
              <img style="height: 70px;width: 70px;margin-top: 8px;" :src="item.images"/>
              <div style="display: flex;flex-direction: column">
                <div class="body">
                  <h4>{{item.name}}<small>{{item.phone}}</small></h4>
                  <p style="line-height: 18px;">{{item.address}}</p>
                </div>
                <div class="foot" style="margin-top: 0;display: flex;flex-direction: row">
                  <!--<div class="foot-l">-->
                    <!--<div class="radio_box" style="margin-top: 0;">-->
                      <img v-if="item.checked == true" style="height: 24px;width: 24px;margin-top: 8px;"  src="../../assets/imgs/img29.png">
                      <img v-if="item.checked == false" style="height: 24px;width: 24px;margin-top: 8px;" @click=selShequ(item) class="himg" src="../../assets/imgs/img30.png">
                      <em style="margin-top: 10px;margin-left: 5px;">设置默认</em>
                    <!--</div>-->
                  <!--</div>-->
                </div>
              </div>

            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Areas',
    data () {
      return {
        listData: [],
        areaflag: 1,
        nowposition: '定位中...',
        province: [],
        provinceid: '',
        city: [],
        cityid: '',
        cityy:[],
        countryid:'',
        country:[],
        countryy:[],
        areaid: '',
        shequData:[],
        searchs:'',
        hhd:[],
        communData:{},
        parkData:{},
      }
    },
    methods: {
      prev(){
        this.$router.go(-1)
      },
      selArea(v){//设置社区或园区
        this.provinceid = ''
        this.cityid = ''
        this.countryid = ''
        this.cityy = []
        this.countryy = []
        this.areaflag = v
        this.getShequ()
      },
      getPosition(){//定位
        let self = this
        let map = new BMap.Map("allmap")

        let geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            self.nowposition = r.address.city
          }
          else {
            this.nowposition = '定位失败'
            this.$dialog.toast({
              mes:  '定位失败',
              timeout: 1500
            })
          }
        },{enableHighAccuracy: true})
      },
      selAreas(id,v) {//匹配区域
        if(v == 1){
          this.cityy = []
          this.countryy = []
          this.city.forEach(item => {
            if(id == item.pid){
              this.cityy.push({id:item.id,name:item.name,pid:item.pid})
            }

          })
        }
       else if(v == 2){
          this.countryy = []
          this.country.forEach(item => {
            if(id == item.pid){
              this.countryy.push({id:item.id,name:item.name,pid:item.pid})
            }

          })
        }
      },
      submit(){//名字检索
        if(this.searchs !== ''){
          let nmm = this.hhd
          this.shequData = []
          nmm.forEach(item => {
            if(item.name.indexOf(this.searchs)>=0){
              this.shequData.push({id:item.id,area_id:item.area_id,name:item.name,linkman:item.linkman,
                telephone:item.telephone ,images:item.images,address:item.address,remark:item.remark,lng:item.lng,
                lat:item.lat,checked:false})
            }
          })
        if(this.shequData.length == 0){
            this.$dialog.toast({
              mes:  '没有您要找的信息',
              timeout: 1500
            })
          }
        }else{
          let itemss = this.hhd
          itemss.forEach(items => {
            this.shequData.push({id:items.id,area_id:items.area_id,name:items.name,linkman:items.linkman,
              telephone:items.telephone ,images:items.images,address:items.address,remark:items.remark,lng:items.lng,
              lat:items.lat,checked:false})
          })
        }
      },
      getShequ(){//获取社区或园区
        let self = this
        this.hhd = []
        this.shequData = []
        if(this.countryid !== ''){
          this.areaid = this.countryid
        }else if(this.cityid !== ''){
          this.areaid = this.cityid
        }else if(this.provinceid !== ''){
          this.areaid = this.provinceid
        }else{
          this.$dialog.toast({
            mes:  '请选择地区',
            timeout: 1500
          })
          return
        }
        this.$dialog.loading.open('获取中...')
        let paramts = {
          areaid: this.areaid
        }
        let url = '/healthymvc/getcommunity'
        if(this.areaflag == 1){
          url = '/healthymvc/getcommunity'
        }
        else if(this.areaflag == 2){
          url = '/healthymvc/getparks'
        }
        self.$http.post(url,paramts, {emulateJSON: true})
          .then(function (response) {
            this.$dialog.loading.close()
            if(response.body.status == true){
              let item = response.body.data
              item.forEach(items => {
                this.shequData.push({id:items.id,area_id:items.area_id,name:items.name,linkman:items.linkman,
                  telephone:items.telephone ,images:items.images,address:items.address,remark:items.remark,lng:items.lng,
                  lat:items.lat,checked:false})
              })
              this.hhd = response.body.data
            }
            else{
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
      selShequ(item){//设置社区
        let self = this
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'areas'
            }})
          return
        }
        this.shequData.forEach(items => {
          if(items.id == item.id){
            items.checked = true
          }else{
            items.checked = false
          }
        })
        let url = ''
        let paramts = {}
        if(this.areaflag == 1){
          url = '/healthymvc/updateusercommunity'
          paramts.communityid = item.id
        }
        else if(this.areaflag == 2){
          url = '/healthymvc/updateuserpack'
          paramts.parkid = item.id
        }
        this.$dialog.loading.open('设置中...')
        self.$http.post(url,paramts,{ emulateJSON: true,headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")} })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              if(this.areaflag == 1) {
                this.communData = response.data.data
                localStorage.setItem('communityid', response.data.data.communityid)
                localStorage.setItem('commaddress', response.data.data.address)
              }
              else if(this.areaflag == 2){
                this.parkData = response.data.data
                localStorage.setItem('parksid', response.data.data.parksid)
                localStorage.setItem('parkaddress', response.data.data.address)
              }
            }
            // else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
              if(response.data.msg == 'token错误'){
                this.$router.push({path: '/login',query:{url:'areas'}})
              }
            // }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getArea(){//获取区域
        if(localStorage.getItem('areas')){
          let datas = JSON.parse(localStorage.getItem('areas'))
          datas.forEach(item =>{
            if(item.level == 1){
              this.province.push({id:item.id,name:item.name,pid:item.pid})
            }
            if(item.level == 2){
              this.city.push({id:item.id,name:item.name,pid:item.pid})
            }
            if(item.level == 3){
              this.country.push({id:item.id,name:item.name,pid:item.pid})
            }
          })
          return
        }
        this.$dialog.loading.open('获取中...')
        let self = this
        self.$http.get('/healthymvc/getarea', {emulateJSON: true})
          .then(function (response) {
              this.$dialog.loading.close()
              if(response.body.status == true){
                localStorage.setItem('areas', JSON.stringify(response.data.data))
                let datas = response.data.data
                datas.forEach(item =>{
                  if(item.level == 1){
                    this.province.push({id:item.id,name:item.name,pid:item.pid})
                  }
                  if(item.level == 2){
                    this.city.push({id:item.id,name:item.name,pid:item.pid})
                  }
                  if(item.level == 3){
                    this.country.push({id:item.id,name:item.name,pid:item.pid})
                  }
                })
              }
              // else{
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
              // }
            }
          ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      }
    },
    mounted: function () {
      //页面加载就执行
      this.getArea()
      this.getPosition()

    },
    components: {

    }
  }
</script>
<style lang="scss" scoped>
 .hnm{
   height: auto;
   width:89%;
   border-radius: 25px;
   margin-top: 15px;
   padding: 9px;
   /*float: right;*/
   margin-left: 4%;
   background: #00ce9f;
   disply: flex;
   flex: 1;
   margin-bottom: 5px;
 }
  .hnm p{
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
 .selectype .body .text{
   /*width: 78% !important;*/
   margin-left: 0;
 }
 .selectype .body .text:focus{
   width: 96%;
 }
  span{
    padding-bottom: .2rem !important;
  }
</style>

