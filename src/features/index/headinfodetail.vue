<template>
  <div class="layout ">
    <div class="header header-bg">
      <div class="left">
        <div  @click="prev" class="back"></div>
      </div>
      <div class="center">
        <p>头条详情</p>
      </div>
    </div>

    <div class="newsd">
      <div class="head">
        <h4>金秋是吃螃蟹最好的季节，但是有一些禁忌，讨海人来告诉你</h4>
        <p>2018 09/17  08:02</p>
      </div>
      <div class="body">
        <p><img src="../../../static/imgs/img67.jpg"/></p>
        <p>现在9月份入秋的季节，也是吃螃蟹最好的季节，螃蟹不只是美味，还是很营养的一道海鲜，螃蟹不仅含有丰富的蛋白质，氨基酸，还含有丰富的钙，铁，锌，硒，钾，维生素A，维生素B等，其蛋白质的含量是猪肉和鱼肉的几倍，螃蟹体内的维生素A和核黄素的含量，在人们的食谱中是也首屈一指的。</p>

        <p>但是并不是所有螃蟹都能那么营养，而且也不是什么人都可以吃螃蟹，除了海鲜过敏的人，还有一些胆固醇过高的人群，也要尽量少吃螃蟹，当然这些都是已知的禁忌，今天主要来说说一些鲜为人知的吃螃蟹禁忌，这可是讨海人的经验之谈，大家好好收藏。</p>

        <p>首先螃蟹一定要挑新鲜的，很多人因为没有办法看到螃蟹咋煮之前，到底是不是活蹦乱跳的，所以很是吃亏，虽然沿海地方基本上都是一些新鲜的螃蟹在市场是哪个，难免也会混入一些不良的商家，将死了很久的螃蟹夹杂在其中，这就让大家很是头痛。</p>

        <p>为什么别吃死蟹？因为死蟹体内的寄生细菌，会繁殖并扩散到蟹肉中，使得蛋白质分解产生组织胺。蟹死的时间越长，体内积累的组织胺越多，毒性越大。即使把死蟹煮熟煮透，毒素仍然不易被破坏，食用后会引起恶心呕吐，面颊潮红，心跳加速等。</p>

        <p>不要吃隔夜蟹，螃蟹为含组胺酸较多的食物，隔夜的剩蟹种组氨酸在某些维生素的作用下，会分解为组胺，回锅加热随可杀灭病源微生物，却不能破坏毒素，从而导致组氨酸中毒。因此，蟹最好现蒸现吃，一般不要超过4小时。还有不能吃生蟹和醉蟹。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import FooterBar from '../components/FooterBar.vue'
  import TopBar from '../components/TopBar.vue'
  export default {
    name: 'Headinfodetail',
    data () {
      return {
        logonData: {}
      }
    },
    methods: {
      changePwd: function () {
        this.showChangePwdPanel = true
      },
      prev(){
        this.$router.go(-1)
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
  .home-box {
    /*margin-top:45px;*/
    background-image:none;
    height: auto;
    min-height: 100%;
    width: 100%;
    background: #ffffff;
  }
  .home-img1{
    height: 100%;
    width: 100%;
  }
  .product-box{
    height: 150px;
    width: 100%;
    background: rgb(242,242,242);
    padding: 20px 15px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0;
  }
  .product-boxj{
    height: auto;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    flex-direction: column;
    background: #fff;
    padding: 10px 15px;
  }
  .product-boxj2{
    padding: 0;
  }
 .product-box1{
    height: auto;
    width: 100%;
   border-top:1px solid #e0e0e0;
    display: flex;
   background: #fff;
   margin-top: 10px;
   flex-direction: column;
  }
 .product-box-son{
   width: 100%;
   border-bottom: 1px solid #e0e0e0;
   display: flex;
   justify-content: space-between;
 }
  .pro-text1{
    font-size: 16px;
    color: #333;
  }
  .pro-text2{
    font-size: 14px;
    color: #999;
    margin-top: 8px;
  }
  .pro-text3{
    color: #333;
    line-height: 45px;
    margin-left: 15px;
    font-weight: bold;
  }
  .pro-text3j{
    color: #999999;
    font-weight: normal;
  }
  .pro-text4{
    font-size: 14px;color: #333;
    line-height: 45px;
    margin-right: 15px;
  }
  .product-box2{
    height: 250px;
    background: #e0e0e0;
    width: 85%;
    margin: auto;
    border: 1px solid #999;
  }
  .box-top{
    height: auto;
    width: 100%;
    border-bottom:1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px 10px;
    background: #ffffff;
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
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  .box-content1 div{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
  .se-title1 span{
    font-weight: bold;
  }
  .se-title3{
    font-size: 14px;
    color: #999;
  }
  home-title6{
    font-family:'微软雅黑';
    font-weight:400;
    font-style:normal;
    color:#CCC;
  }
  .pro-bottom{
    height: auto;
    line-height: 35px;
    width: 65%;
    margin: auto;
    border-radius: 35px;
    padding: 10px;
    position: fixed;
    bottom: 10px;
    background: #6f7180;
    left: 17.5%;
  }
  .pro-bottom p{
    text-align: center;
    color: #ffffff;
    font-size: 16px;
  }
</style>

