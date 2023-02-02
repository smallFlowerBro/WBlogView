<template>
    <div id="back"/>
    <el-container  class="blog-container">
        <el-header class="blog-header">
            <Header></Header>
        </el-header>
        <el-main>   
            <RouterView/>
        </el-main>
        <el-footer class="blog-footer" height="200px">
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>
<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/common/Header.vue'
    import Footer from './components/common/Footer.vue'
</script>
<style scoped>
</style>
