<template>
    <div class="layout ">
      <!--<TopBar title="蚂蚁头条"/>-->
      <div class="header header-bg">
        <div class="left">
          <div @click="prev" class="back"></div>
        </div>
        <div class="center">
          <p>蚂蚁头条</p>
        </div>
      </div>
      <div class="topnews">
        <div class="head g-tab-hd">
          <ul>
            <li  v-for="(item,index) in typeData" :key="item.id" v-if="index<5">
              <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.newtypename}}</p>
            </li>
          </ul>
        </div>
        <div class="body g-tab-bd">
          <ul>
            <li @click="goDetail(item.id)" v-for="item in listData" :key="item.id">
                <div class="img">
                  <img :src="item.newImg"/>
                </div>
                <div class="txt">
                  <h4>{{item.newTitle}}</h4>
                  <p>{{item.newIntroduction}}</p>
                  <div class="labels">
                    <div class="left">
                      <label>{{item.newLable}}</label>
                    </div>
                    <div class="right">
                      2018-09-16
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
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Headinfo',
    data () {
      return {
        typeData: [],
        listData:[],
        typeid: ''
      }
    },
    methods: {
      goDetail(id) {
        this.$router.push({path: '/Headinfodetail',  query: {
            id: id
          }})
      },
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
        self.$http.get('/healthymvc/getnewstypenew')
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              let datas = response.data.data
              datas.forEach((item,index) => {
                if(index === 0){
                  this.typeid = item.id
                  this.typeData.push({check: true,id: item.id,newtypename: item.newtypename})
                }
                else {
                  this.typeData.push({check: false,id: item.id,newtypename: item.newtypename})
                }
              })
              this.getList()
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
      getList(){
        let self = this
        self.listData = []
        let paramts = {
          typeid: this.typeid,
          page: 1,
          pagemax: 10
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getnewslist',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.listData = response.data.data
            }else {
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
  .home-box {
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
    background: #fff;
  }
  .box-text{
    font-size: 14px;
    color: #999;
    margin-top: 5px;
    line-height:18px;
    height: 36px;
    overflow: hidden;
    display:-webkit-box;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    white-space:normal;
  }
  .box-content{
    height: auto;
    max-height: 120px;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    border-top:1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px;
  }
  .box-content1{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 10px;
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
  .box-imgb{
    width:120px;
    height:90px;
    border: 1px solid #999;
    margin-right: 15px;
    border-radius: 10px;
  }
  .box-img1{
    width:100%;
    height: 100%;
    border-radius: 15px;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
</style>

