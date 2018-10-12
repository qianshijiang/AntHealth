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
        <li>
          <div class="body">
            <h4>王力宏<small>13888860877</small></h4>
            <p>上海市静安区延长中路801号A12室</p>
          </div>
          <div class="foot">
            <div class="foot-l">
              <label class="radio_box" @click="setAddress">
                <img class="himg" src="../../../static/imgs/img29.png">
                <em>设置默认</em>
              </label>
            </div>
            <div class="foot-r">
              <a @click="updateAddress" class="edit">编辑</a>
              <a @click="delAddress" class="del">删除</a>
            </div>
          </div>
        </li>
        <li>
          <div class="body">
            <h4>王力宏<small>13888860877</small></h4>
            <p>上海市静安区延长中路801号A12室</p>
          </div>
          <div class="foot">
            <div class="foot-l">
              <label class="radio_box">
                <input type="radio"  name="radio" checked="true">
                <label ></label>
                <em>设置默认</em>
              </label>
            </div>
            <div class="foot-r">
              <a href="#" class="edit">编辑</a>
              <a href="#" class="del">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  // import Vue from 'vue';
  // import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.rem/preview';
  /* 使用px：import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.px/preview'; */

  // Vue.component(Preview.name, Preview);
  // Vue.component(PreviewHeader.name, PreviewHeader);
  // Vue.component(PreviewItem.name, PreviewItem);
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Addressmanage',
    data () {
      return {
        listData:{},
        btns: [

        ]
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
      updateAddress(){
        this.$router.push({path: '/addressmanage2'})
      },
      getList(){
        let self = this
        this.listData.push({id : '1', checkflag : false})
        self.$http.get('api/getmyaddresslist',{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.data) {
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      setAddress(){
        let self = this
        let paramts = {
          myaddressid: '1',
          state: '2'
        }
        self.$http.post('api/upmyaddressState',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
          .then(function (response) {
            console.log(JSON.stringify(response))
            if (response.data.data) {
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      delAddress(){
        let self = this
        let paramts = {
          myaddressid: '1'
        }
        self.$http.post('api/demyaddress',paramts,{ emulateJSON: true , headers: { "Content-Type": "multipart/form-data","token":localStorage.getItem("token")}})
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

