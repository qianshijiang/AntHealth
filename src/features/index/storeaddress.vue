<template>
  <div class="layout">
    <div class="header actaddr-header" style="z-index: 999999">
      <div class="left">
        <div @click="prev" class=" back back1"></div>
      </div>
    </div>

    <div class="actaddr">
      <div id="allmap" class="bm-view"></div>
      <!--<div class="actaddr-vw">-->
        <!--<img src="../../assets/imgs/img83.jpg"/>-->
        <!--<label></label>-->
      <!--</div>-->
      <div class="actaddr-hd">
        <dl>
          <dt><i></i></dt>
          <dd class="d1">{{detailData.storeaddress}}</dd>
          <dd class="d2">{{detailData.storephone}}</dd>
        </dl>
      </div>
      <div class="actaddr-bd">
        <ul>
          <li v-for="item in listData" :key="item.activateid" @click="goDetail(item.activateid)">
            <a>
            <div class="img">
              <!--<img src="../../assets/imgs/img66.png"/>-->
              <img style="height: 90px;width: 90px;" :src="item.activity_img"/>
            </div>
            <div class="txt" style="width: 75%;">
              <h4>{{item.activity_name}}</h4>
              <p>{{item.activity_time | momentFilter}} </p>
              <label class="c_green">{{item.activity_address}}</label>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BMap from 'BMap'
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Storeaddress',
    data () {
      return {
        listData: [],
        detailData: {},
      }
    },
    methods: {
      changePwd: function () {
        this.showChangePwdPanel = true
      },
      prev(){
        this.$router.replace({path: '/activedetail',query: {
           id:this.$route.query.id
          }})
      },
      getInfo(){
        let self = this
        let params = {
          storeid : this.$route.query.storeid,
          page:1,
          pagemax:10
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/storeactivity',params, {emulateJSON: true})
          .then(function (response) {
            this.$dialog.loading.close()
              if(response.body.status == true){
                this.listData = response.data.data.activitys
                this.detailData = response.data.data
                this.getMap()
              }
              else{
                this.$dialog.toast({
                  mes:  response.data.msg,
                  timeout: 1500
                })
                this.getMap()
              }
            }
          ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      },
      getMap(){
        let lng = this.detailData.storeLongitude //经度 长的
        let lat = this.detailData.storeLatitude
        let map = new BMap.Map("allmap")
        let point = new BMap.Point(lng,lat)
        map.centerAndZoom(point, 15)

        //创建小狐狸
        let pt = new BMap.Point(lng, lat)
        // let marker = new BMap.Marker(point)  // 创建标注
        // map.addOverlay(marker)           // 将标注添加到地图中
        // map.centerAndZoom(point, 15)
        let myIcon = new BMap.Icon("../static/imgs/img44.png", new BMap.Size(30,150))
        let marker2 = new BMap.Marker(pt,{icon:myIcon})  // 创建标注
        map.addOverlay(marker2)
      },
      goDetail(id) {
        this.$router.push({path: '/activedetail',query: {id: id}})
      }
    },
    mounted: function () {
      // this.getMap()
      this.getInfo()

    },
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .bm-view {
    width: 100%;
    height: 400px;
    /*margin-top: -1.1rem;*/
  }
</style>

