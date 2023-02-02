<script setup>
import router from '../router/index';
import {computed, ref, watch} from 'vue'
import fetch from '../lib/fetch';
import api from '../api';
//标签id
let cid =computed(()=>{return router.currentRoute.value.query.id});
let currentPage =ref(1);
let pageSize = ref(10);
let totalPage =ref(0)
let totalElements =ref(1000)

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

let tableData = ref([]);
//获取相应id下的文章列表
const  getArticalList = ()=>{
  fetch.post(api.articalList ,{
    id:cid.value,
    pageSize:pageSize.value,
    currentPage:currentPage.value
  }).then(
    (result)=>{
      totalPage.value = parseInt(result.totalPage) 
      totalElements.value =parseInt(result.totalElements)
      tableData.value  =result.detail
    },
    (error)=>{
      console.log(error)
    })
}

watch(cid, async(newP,oldP)=>{
  if(newP !=oldP){
    getArticalList();
  }
})


const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

const handleClick =(params,row)=>{
  console.log(params,row)
  router.goToPage("/artical",{aid:row.id})
}

getArticalList()

</script>
<template>
    <div class="home">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="id" fixed="right" label="Operations" width="120">
        <template #default="scop">
        <el-button link type="primary" size="small" @click="handleClick(scop.$index,scop.row)">Detail</el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
      </el-table>


      <div class="demo-pagination-block">
        <div class="demonstration">Total item count</div>
          <el-pagination
            v-model:current-page="currentPage"
            :page-size="pageSize"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, prev, pager, next"
            :total="totalElements"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"/>
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

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>