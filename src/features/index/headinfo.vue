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
            <yd-infinitescroll  :callback="getList" ref="infinitescrollDemo">
              <yd-list theme="1" slot="list">
            <li @click="goDetail(item.id)" v-for="item in list" :key="item.id">
                <div class="img">
                  <img :src="item.newImg"/>
                </div>
                <div class="txt">
                  <h4>{{item.newTitle}}</h4>
                  <p class="hnm ndy">{{item.newIntroduction}}</p>
                  <div class="labels" style="margin-top: 5px;">
                    <div class="left">
                      <label>{{item.newLable}}</label>
                    </div>
                    <div class="right">
                     {{item.newDate | momentFilter}}
                    </div>
                  </div>
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
    </div>
</template>
<script>
  import Vue from 'vue';
  import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';
  /* 使用px：import {InfiniteScroll} from 'vue-ydui/dist/lib.px/infinitescroll'; */

  Vue.component(InfiniteScroll.name, InfiniteScroll);
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Headinfo',
    data () {
      return {
        typeData: [],
        list:[],
        page:1,
        pagesize:10,
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
       this.page = 1
       this. pagesize = 10
        this.list = []
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
                  this.getList()
                  this.typeData.push({check: true,id: item.id,newtypename: item.newtypename})
                }
                else {
                  this.typeData.push({check: false,id: item.id,newtypename: item.newtypename})
                }
              })

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
        let page = this.page > 1 ? this.page - 1 : this.page
        let paramts = {
          typeid: this.typeid,
          page: page,
          pagemax: this.pagesize
        }
        this.$dialog.loading.open('获取中...')
        self.$http.post('/healthymvc/getnewslist',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            this.$dialog.loading.close()
            if (response.data.status == true) {
              this.list = response.data.data
              const _list = response.data.data

              this.list = [...this.list, ..._list];

              if (_list.length < this.pageSize || this.page == 3) {
                /* 所有数据加载完毕 */
                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                return;
              }

              /* 单次请求数据完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

              this.page++;
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
  .hnm{
    height: auto!important;
    line-height: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .ndy{
     overflow: hidden;
/*   white-space: nowrap; */
  text-overflow: ellipsis;
  -webkit-line-clamp:2;
  word-break:break-all;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  }
</style>

