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
        <ul>
          <li v-for="item in typeData" :key="item.id">
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li>
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
          <li>
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
          <li>
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font >已过期</font>
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

      <div class="body g-tab-bd" style="display: none;">
        <ul>

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


      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="body-hd">
              <div class="left">
                保单号：9200100010608429
              </div>
              <div class="right">
                <font >已过期</font>
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
        navflag: true
      }
    },
    methods: {
      searchList(v){
        this.navflag = v
      },
      prev(){
        this.$router.go(-1)
      },
      getListType(){
        let self = this
        self.$http.get('/api/getinseranceType')
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.status == true) {
             let datas = response.data.data
              datas.forEach((item,index) => {
                if(index === 0){
                  this.typeData.push({check: true,id: item.id,typename: item.typename})
                }
                else {
                  this.typeData.push({check: false,id: item.id,typename: item.typename})
                }
              })
              console.log(this.typeData)
              // this.typeData = response.data.data
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getList(){
        let self = this
        let paramts = {
          typeid: 1,
          page: 1,
          pagemax: 10
        }
        self.$http.post('/api/getinseranceTypeList',paramts,{ emulateJSON: true })
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
    mounted: function () {
      this.getListType()
      this.getList()
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

