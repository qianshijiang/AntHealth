<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div @click="prev" class=" back"></div>
      </div>
      <div class="center">
        活动订单
      </div>

    </div>
    <div class="actorder">
      <div class="head g-tab-hd">
        <ul>
          <li class="on"><a href="#">全部</a></li>
          <li><a href="#">待审核</a></li>
          <li><a href="#">审核中</a></li>
          <li><a href="#">已验票</a></li>
          <li><a href="#">退票</a></li>
        </ul>
      </div>
      <div class="body g-tab-bd">
        <ul>
          <li @click="goDetail">
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-wait"></div>
          </li>
          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-doing"></div>
          </li>
          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-done"></div>
          </li>
          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-return"></div>
          </li>
        </ul>
      </div>
      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-wait"></div>
          </li>
        </ul>
      </div>

      <div class="body g-tab-bd" style="display: none;">
        <ul>

          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-doing"></div>
          </li>
        </ul>
      </div>
      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-done"></div>
          </li>
        </ul>
      </div>

      <div class="body g-tab-bd" style="display: none;">
        <ul>
          <li>
            <div class="left">
              <h4>上海市东方明珠广场</h4>
              <dl>
                <dt>2018-09-16 10:00～14:00 </dt>
                <dd>上海市东方明珠广场</dd>
              </dl>
            </div>
            <div class="right">
              <h4>免费票</h4>
              <p class="c_green">¥0.00</p>
            </div>
            <div class="img img-return"></div>
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
    name: 'Activeorder',
    data () {
      return {
        logonData: {},
        navflag: 1
      }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/activeorderdetail'})
      },
      prev(){
        this.$router.go(-1)
      },
      goRefund() {
        this.$router.push({path: '/refund'})
      },
      searchList(v){
        this.navflag = v + 1
      }
    },
    mounted: function () {},
    components: {
      FooterBar,
      TopBar
    }
  }
</script>
<style lang="scss" scoped>

</style>

