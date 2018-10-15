<template>
  <div class="layout ">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>保险</p>
      </div>
    </div>
    <div class="h-related">
      <div class="head g-tab-hd" style="padding-top: 0;">
        <ul style="display: flex;flex-direction: row;line-height: 35px;">
          <li style="flex: 1" v-for="(item,index) in typeData" :key="item.id" v-if="index<5">
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li v-for="item in listData" :key="item.id" @click="goDetail(item.id)">
            <div class="img">
              <!--<img src="../../assets/imgs/img11.jpg"/>-->
              <img style="height: 110px;width: 110px;" :src="item.insruanceimg"/>
            </div>
            <div class="txt">
              <h4>{{item.insuranceName}}</h4>
              <p>{{item.insuranceIntroduction}}</p>
              <label class="c_green">¥{{item.insruanceprice}}起</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Addressmanage',
    data () {
      return {
        typeData: [],
        listData:{},
        typeid:'',
      }
    },
    methods: {
      prev(){
        this.$router.go(-1)
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
                  this.getList()
                  this.typeData.push({check: true,id: item.id,typename: item.typename})
                }
                else {
                  this.typeData.push({check: false,id: item.id,typename: item.typename})
                }
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
        let paramts = {
          typeid: this.typeid,
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
            else{
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
      goDetail(id) {
        this.$router.push({path: '/product',  query: {
            id: id
          }})
      },
    },
    mounted: function () {
      this.getListType()
    },
  }
</script>
<style lang="scss" scoped>
  .himg{
    height: .4rem;width: .4rem;vertical-align:middle;
  }
     .xq{
       color:#999;
       padding: 0 10px;
       text-align: center;
     }
  .xh{
    color: #333;
    border-bottom: 1px solid #00CE9F
  }
</style>

