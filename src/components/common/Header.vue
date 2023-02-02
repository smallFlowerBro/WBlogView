<template>
    <el-affix :offset="0">
        <el-row>        
            <!-- <el-col :span="4">
                <el-image :src="logoImg" style="width:80px;height:50px" :fit="fit"></el-image>
            </el-col> -->
            <el-col :span="24">
                <el-menu  :default-active="null"  :ellipsis="false"  class="el-menu-demo top" mode="horizontal" @select="handleSelect">
                    <!-- <el-menu-item index="/"><span>LOGO</span></el-menu-item> -->
                    <el-avatar ><span>LOGO</span></el-avatar>
                    <div class="flex-grow" />
                    <el-input v-model="input2" class="search-input" size="small"  placeholder="Please Input" :suffix-icon="Search"/>
                    <!-- 菜单 -->
                    <el-menu-item index="/">首页</el-menu-item>
                    <template v-for="item in menus">
                        <el-sub-menu  v-if="item.sub_menu.length>0"    :index="item.id" >
                            <el-icon></el-icon><template #title>{{item.name}}</template>
                            <el-menu-item  v-for ="sub_item in item.sub_menu" :index="sub_item.id">{{sub_item.name}}</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="item.id" >{{item.name}}</el-menu-item>
                    </template>
                    <el-menu-item index="/about">关于我</el-menu-item>
                </el-menu>          
            </el-col>
        </el-row>
    </el-affix>
</template> 

<script setup>
    import {ref} from 'vue'
    import {Search} from '@element-plus/icons-vue'
    import fetch from '../../lib/fetch';
    import api from '../../api';
    import router from '../../lib/router';
    
    let input2 = ref('');
    let menus =  ref([]);
    let fit = ref("fill");

    // 默认激活
    const handleSelect = (key, keyPath) => {
        let exclude =new Set(['/',"/about"])
        if(exclude.has(key)){
            router.goToPage(key,{})
        }else{
            router.goToPage("articalList",{id:keyPath[keyPath.length-1]})
        }   
    }
    //获取菜单列表
    fetch.post(api.homeMenu,{}).then((result)=>{
                let _menu=result.menu;
                menus.value=_menu;
                console.log(menus)
            },(error)=>{
                console.log(error)
            })
    
</script>
<style scoped>

.flex-grow {
  flex-grow: 1;
}
.search-input{
    width: 200px;
    height: 40px;
    margin: auto;
}

.el-menu-demo {
    background-color: #ebebeb;
}
</style>