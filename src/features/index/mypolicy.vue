<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>我的保单</p>
      </div>
    </div>
    <div class="myorder">
      <div class="head g-tab-hd">
        <ul style="display: flex;flex-direction: row;line-height: 35px;">
          <li style="flex: 1" v-for="(item,index) in typeData" :key="item.id" v-if="index<5">
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li v-for="item in listData" :key="item.id">
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font class="c_red">即将到期</font>
              </div>
            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
            </div>
          </li>
          <li class="on">
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>

            </div>
            <div class="body-bd">
              <p>乐享晚年-长护险（2018）<br/>
                被保人：赵云<br/>
                保障期限：2018-09-17 零时至 2018-10-11
              </p>
              <label>保费：<font class="c_green">¥158</font></label>
            </div>
            <div class="body-ft">
              <a href="#">再保一年</a>
              <a href="#">自助理赔</a>
              <a href="#" class="on">保单信息</a>
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
    name: 'Service',
    data () {
      return {
        typeData: [],
        listData:[],
        navflag: true
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
      prev(){
        this.$router.go(-1)
      },
      getListType(){
        let self = this
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getinseranceType')
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
        let paramts = {
          typeid: 1,
          page: 1,
          pagemax: 10
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getinseranceTypeList',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.listData = response.data.data
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
    },
    mounted: function () {
      this.getListType()
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
  .xhh{
    color: #333;
  }
</style>

