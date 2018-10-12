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
          <li v-for="item in typeData" :key="item.id" >
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li>
            <div class="img">
              <img src="../../../static/imgs/img11.jpg"/>
            </div>
            <div class="txt">
              <h4>企业员工意外险</h4>
              <p>3人以上即可投保，轻松转移企业风险</p>
              <label class="c_green">¥71.00起</label>
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
        self.$http.get('/api/getinseranceType')
          .then(function (response) {
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
          typeid: this.typeid,
          page: 1,
          pagemax: 10
        }
        self.$http.post('/api/getinseranceTypeList',paramts,{ emulateJSON: true })
          .then(function (response) {
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
  }
</script>
<style lang="scss" scoped>
  .himg{
    height: .4rem;width: .4rem;vertical-align:middle;
  }
     .xq{
       color:#999;
       padding: 0 10px;
     }
  .xh{
    color: #333;
    border-bottom: 1px solid #00CE9F
  }
</style>

