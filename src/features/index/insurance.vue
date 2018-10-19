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
      <div  style="padding: 4px 8px;">
        <ul style="display: flex;flex-direction: row;line-height: 35px;flex-wrap: wrap;justify-content: flex-start">
          <li style="flex: 1" v-for="(item,index) in typeData" :key="item.id">
            <p class="xq" :class="{'xh' : item.check === true}" @click="searchList(item.id)">{{item.typename}}</p>
          </li>
        </ul>
      </div>
      <div class="body" v-show="list.length !== 0">
        <ul>
          <yd-infinitescroll  :callback="getList" ref="infinitescrollDemo">
            <yd-list theme="1" slot="list">
          <li v-for="item,index in list" :key="index+page" @click="goDetail(item.id)">
            <div class="img" >
              <!--<img src="../../assets/imgs/img11.jpg"/>-->
              <img style="height: 100px;width: 100px;margin-right: 5px;" :src="item.insruanceimg"/>
            </div>
            <div class="txt">
              <h4>{{item.insuranceName}}</h4>
              <p>{{item.insuranceIntroduction}}</p>
              <label class="c_green">¥{{item.insruanceprice}}起</label>
            </div>
          </li>
            </yd-list>
            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip" v-show="page > 1">~~没有数据啦~~</span>

            <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
          </yd-infinitescroll>
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
        list:[],
        page:1,
        pagesize:10,
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
        this.page = 1
        this. pagesize = 10
        this.typeid = id
        this.list = []
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
      getList(){
        let self = this
        let page = this.page > 1 ? this.page - 1 : this.page
        let paramts = {
          typeid: this.typeid,
          page: page,
          pagemax: this.pagesize
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getinseranceTypeList',paramts,{ emulateJSON: true })
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              // this.list = response.data.data
              const _list = response.data.data

                this.list = [...this.list, ..._list];

              if (_list.length < this.pagesize) {
                /* 所有数据加载完毕 */
                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                return;
              }

              /* 单次请求数据完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

              this.page++;
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
    height: .4rem;
    width: .4rem;
    vertical-align:middle;
  }
     .xq{
       color:#999;
       padding: 0 10px;
       text-align: center;
       /*width: 50px;*/
     }
  .xh{
    color: #333;
    border-bottom: 1px solid #00CE9F
  }
</style>

