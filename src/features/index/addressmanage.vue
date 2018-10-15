<template>
  <div class="layout ">
    <div class="header">
      <div class="left">
        <div @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>地址管理</p>
      </div>
      <div class="right">
        <p @click="newAdderess" style="display: block; color: #fff; font-size: 0.28rem;">新建地址</p>
      </div>
    </div>
    <div class="myaddr">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <div class="body">
            <h4>{{item.name}}<small>{{item.phone}}</small></h4>
            <p>{{item.address}}</p>
          </div>
          <div class="foot">
            <div class="foot-l">
              <label class="radio_box">
                <img v-if="item.status == 3" @click="setAddress(0,item.id)" class="himg" src="../../assets/imgs/img29.png">
                <img v-if="item.status == 0" @click="setAddress(3,item.id)" class="himg" src="../../assets/imgs/img30.png">
                <em>设置默认</em>
              </label>
            </div>
            <div class="foot-r">
              <a @click="updateAddress(item)" class="edit">编辑</a>
              <a @click="delAddress(item.id)" class="del">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Addressmanage',
    data () {
      return {
        listData:{},
        imgs: '../../assets/imgs/img29.png',
      }
    },
    methods: {
      result1(ret) {
        this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      prev(){
        this.$router.go(-1)
      },
      newAdderess(){
        this.$router.push({path: '/addressmanage1'})
      },
      updateAddress(item){
        this.$router.push({path: '/addressmanage2',query: {
            item:item
          }})
      },
      getList(){
        let self = this
        // this.listData.push({id : '1', checkflag : false})
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getmyaddresslist',{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.listData = response.data.data
              this.listData.forEach(item => {
                if(item.status == 3){
                  localStorage.setItem('address', item.address)
                }
              })
            }
            if(response.data.msg == 'token错误'){
              this.$router.push({path: '/login'})
            }
            this.$dialog.toast({
              mes: response.data.msg,
              timeout: 1500
            })
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      setAddress(status,id){
        let self = this
        let paramts = {
          myaddressid: id,
          status: status
        }
        this.$dialog.loading.open('设置中...')
        self.$http.post('/healthymvc/upmyaddressState',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.getList()
            }
            this.$dialog.toast({
              mes: response.data.msg,
              timeout: 1500
            })
            if(response.data.msg == 'token错误'){
              this.$router.push({path: '/login'})
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      delAddress(id){
        let self = this
        let paramts = {
          myaddressid: id
        }
        this.$dialog.loading.open('删除中...')
        self.$http.post('/healthymvc/demyaddress',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.getList()
            }
            this.$dialog.toast({
              mes: response.data.msg,
              timeout: 1500
            })
            if(response.data.msg == 'token错误'){
              this.$router.push({path: '/login'})
            }
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
    },
    mounted: function () {
      this.getList()
    },
    components: {
      TopBar
    }
  }
</script>
<style lang="scss" scoped>
  .himg{
    height: .4rem;width: .4rem;vertical-align:middle;
  }
</style>

