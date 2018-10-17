<template>
  <div class="layout pb120">
    <div class="header header-bg">
      <div class="left">
        <p class="address">上门地址：<span>{{myaddress}}</span></p>
      </div>
      <div class="center">

      </div>
      <div class="right" @click="goAddre">
        <a class="changeaddr border_2"><span style="top: 38%;">更换地址</span></a>
      </div>
    </div>
    <div class="selectaddr">
      <div class="head">
        <ul>
          <li  v-for="item in typeData" :key="item.id">
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body" style="margin-bottom: 60px;">
        <ul>
          <yd-infinitescroll  :callback="getList" ref="infinitescrollDemo">
            <yd-list theme="1" slot="list">
          <li v-for="item in list" :key="item.id" @click="goDetail(item.serviceId,item.technicianid)">
              <div class="img">
                <!--<img src="../../assets/imgs/img77.png"/>-->
                <img :src="item.technicianAvatar_url"/>
              </div>
              <div class="txt">
                <h2>{{item.technicianName}}</h2>
                <h4>
                  <span>{{item.technicianAge}}岁</span>
                  <span>|</span>
                  <span>{{item.nativePlace}}</span>
                  <span>|</span>
                  <span>{{item.occupationTitle}}</span>
                </h4>
                <p style="line-height: 16px;">{{item.introduction}}</p>
                <address>{{item.distance}}</address>
              </div>
          </li>
            </yd-list>
            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">~~没有数据啦~~</span>

            <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
          </yd-infinitescroll>
        </ul>
      </div>
    </div>
    <FooterBar pageTag="1"/>
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
        list:[],
        page:1,
        pagesize:10,
        typeid: '',
        navflag: 1,
        address:'',
        myaddress:'请选择服务地址'
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
      getListType(){
        let self = this
        this.$dialog.loading.open('获取中...')
        self.$http.get('/healthymvc/getservicetypename',{ emulateJSON: true })
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
            else {
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
            this.page = 1
            this. pagesize = 10
            this.list = []
            this.getList()
          })
          .catch(function (error) {
            this.$dialog.loading.close()
            console.log(error)
          })
      },
      getList(){
        let self = this
        let adds = this.myaddress
        // str = str.replace(/,/g, "");//取消字符串中出现的所有逗号
        // return str;
        if(adds){
          adds = adds.replace(/\s+/g,"")
          adds = adds.replace(/,/g, "")
          adds = adds.replace(/，/g, "")
        }
        else {
          adds = ''
        }
        let parksid = 0
        let communityid = 0
        if(localStorage.getItem('parksid')){
          parksid = localStorage.getItem('parksid')
        }
        if(localStorage.getItem('communityid')){
          communityid = localStorage.getItem('communityid')
        }
        let page = this.page > 1 ? this.page - 1 : this.page
        // alert(parksid + communityid)
        let paramts = {
          typeid: this.typeid,
          page: page,
          pagemax: this.pagesize,
          address: adds,
          parksid:parksid,
          communityid:communityid,
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/gettechnicianbytype',paramts,{ emulateJSON: true, headers: { "Content-Type": "multipart/form-data"}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.list = response.data.data
              const _list = response.data.data

                this.list = [...this.list, ..._list];

              if (_list.length < this.pageSize || this.page == 10) {
                /* 所有数据加载完毕 */
                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                return;
              }

              /* 单次请求数据完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

              this.page++;
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
      goDetail(id,tid) {
        this.$router.push({path: '/servicedetail',query: {
            id: id,tid: tid
          }})
      },
      goAddre(){
        if(!localStorage.getItem("token")){
          this.$router.push({path: '/login',  query: {
              url: 'service'
            }})
        }else {
          this.$router.push({path: '/areas',query:{url:'service'}})
        }
      },
    },
    mounted: function () {
      this.getListType()
      if(localStorage.getItem('address')){
        this.address = localStorage.getItem('address')

        // this.myaddress = localStorage.getItem('address')
      }
      let comm = ''
      let park = ''
      if(localStorage.getItem("commaddress")){
        comm = localStorage.getItem("commaddress")
      }
      if(localStorage.getItem("parkaddress")){
        park = localStorage.getItem("parkaddress")
      }
      if(comm !== '' || park !== ''){
        this.myaddress = comm +' '+ park
      }else{
        this.myaddress = '点击我的资料设置'
      }
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

