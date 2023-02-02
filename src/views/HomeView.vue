<script setup>
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  let store = useStore()
  let imgURLs = ref([
    new URL("../static/img/banner1.jpg",import.meta.url).href,
    new URL("../static/img/banner2.jpg",import.meta.url).href
  ])

</script>
<template>
  <div class="home">
    <div class="home-slider">
      <el-carousel :interval="4000"  height="400px">
      <el-carousel-item v-for="item in imgURLs" :key="item">
        <el-image :src="item" class="banner-img" loading="lazy"></el-image>
      </el-carousel-item>
    </el-carousel>  
    </div> 
    <div class ="new">
      <div class="tile">New</div>
      <div class ="content">
        <div v-for="item in 8" class = "content-item"></div>
      </div>
    </div>    
  </div>
</template>
<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display:block;
  }
}
/*图片 */
.banner-img{
  width: 100%;
  height: 100%;
}

.home-slider .el-carousel-item{
  border-radius: 10px;
}
.home .new{
  width: 100%;
  display: block;
}
.content{
  width: 100%;
  display: grid;
  /* flex-wrap: wrap;
  justify-content:space-around */
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

}

.content-item{
  
  display: inline-block;
  margin: auto;
  margin-top: 30px;
  width: 300px;
  height: 300px;
  background-color: #475669;
  border-radius: 10px;
}

.home-slider{
  width: 100%;
  height: 410px;
  margin-top: 1vh;
}
.el-carousel__item h3 {
  width: 1024px;
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

