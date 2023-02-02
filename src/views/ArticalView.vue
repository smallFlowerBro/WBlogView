<script setup>
    import { ref } from 'vue';
    import {useStore} from 'vuex';
    import fetch from '../lib/fetch'
    import api from '../api'
    import markdown from '../lib/markdown'
    import {Base64} from 'js-base64'
    import router from '../router';

    let t_html = ref("");
    let catalog_html = ref("");
    let t_copy = ref({
      isCopy :true
    })
    let isShow = ref(true);
    let store = useStore();
    store.setAttr("userInfo",{});
    let id =ref(router.currentRoute.value.query.aid);
    console.log(id)
    let t_artical ="";  
    fetch.post(api.artical,{
      id:id.value
    }).then((result)=>{
      t_html.value = markdown.toHtml(Base64.decode( result.content)); 
      catalog_html.value =markdown.toHtml(Base64.decode( result.catalog)); 
      isShow.value = true
    },(error)=>{
      isShow.value = false
    })  

    

</script>
<template>
<div class="artical">
  <el-affix class="blog-catalog" offset="20" target=".blog-header"  position="top" v-html="catalog_html"></el-affix>
  <div  v-if="isShow" v-copy="t_copy"  v-html="t_html" class="blog-detail" ></div>
  <div v-else class="blog-detail"><el-empty description="文章无内容"/></div>
</div>
</template>
<style>
@media (min-width: 1024px) {
  .artical {
    min-height: 100vh;
    display: flex;
    justify-content: left;
  }
}
.blog-catalog{
  width: 25%;
  
}
.blog-catalog  ul{
  display: block;
  box-shadow: 0 2px 3px gainsboro;
}
.blog-detail{
  margin-left: 3%;
  width: 70%;
  box-shadow: 0 3px 4px gainsboro;
  padding: 10px;
}
</style>

 