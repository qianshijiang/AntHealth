<template>
  <div class="layout pb120">
    <div class="header header-bg">
      <div class="center">
        <p>活动</p>
      </div>
    </div>
    <div class="actlist" style="margin-bottom: 60px;">
      <ul>
        <li v-for="item in listData" :key="item.activateid" @click="goDetail(item.activateid)">
            <div class="head">
              <!--<img src="../../../static/imgs/img79.jpg"/>-->
              <img style="width: 100%;height: 220px;border-radius: 6px;" :src="item.activity_img"/>
            </div>
            <div class="body">
              <h4>{{item.activity_name}}</h4>
              <div class="labels">
                <span v-for="(label,index) in item.activity_titles" :key="index">{{label.title}}</span>
              </div>
              <dl>
                <dt>{{item.activity_time}} </dt>
                <dd>{{item.activity_address}}</dd>
              </dl>
              <label class="c_green">¥{{item.activity_price}}</label>
            </div>
        </li>
      </ul>
    </div>
    <FooterBar pageTag="2"/>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  export default {
    name: 'Activedetail',
    data () {
      return {
        listData: [],
      }
    },
    methods: {
      //获取活动列表下拉分页
      getActiveInfo(){
        this.$dialog.loading.open('获取中...')
          let self = this
          let params = {
            page:1,
            pagemax:10
          }
        self.$http.post('/healthymvc/getactivitytop',params, {emulateJSON: true})
          .then(function (response) {
            this.$dialog.loading.close()
            if(response.body.status == true){
              this.listData = response.data.data.activitys
            }
            else{
              this.$dialog.toast({
                mes:  response.data.msg,
                timeout: 1500
              })
            }
          }
        ).catch(function (error) {
          this.$dialog.loading.close()
          console.log(error)
        })
      },
      //进入活动详情页面
      goDetail(id) {
        this.$router.push({path: '/activedetail',query: {id: id}})
      }
    },
    mounted: function () {
      //页面加载就执行
      this.getActiveInfo();

    },
    components: {
      FooterBar
    }
  }
</script>
<style lang="scss" scoped>
  .home-box {
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-radius: 5px;
    display: flex;
    background: rgb(242,242,242);
    flex-direction: column;
    margin-top: 15px;
  }
  .box-imgb{
    height: 200px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    background: rgb(242,242,242);
  }
  .box-img1{
    width:100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .box-tb{
    height: 150px;
    width: 100%;
    display: flex;
    background: rgb(255,255,255);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 15px 10px;
    flex-direction: column;
  }
  .box-title1{
    font-size: 12px;color:#999
  }
  .box-tb2{
    border:1px solid #e0e0e0;
    padding: 6px;
    border-radius: 6px;
    margin-right: 10px;
  }
  .box-title2{
    font-size: 12px;
    color: #999;
    margin-top: 15px;
  }
  .box-title3{
    font-size: 14px;
    color: #666;
  }
  .box-title4{
    font-size: 14px;
    color: #333;
  }
  .se-title1 span{
   font-weight: bold;
  }
</style>

