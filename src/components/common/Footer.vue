<script setup>  
    import { ref } from "vue";
    import { ArrowUp, ChatDotSquare} from "@element-plus/icons-vue";
    import { ElMessage } from 'element-plus';
    //变量定义
    const drawer  = ref(false);
    //// 发送内容
    let  name = ref("");
    let  email = ref("");
    let  subject = ref("");
    let  content = ref("");

    /********定义方法******/
    //返回顶部
    const backToTop = ()=>{
      document.getElementById("back").scrollIntoView();
    }
    //发送邮件
    const send = ()=>{
      //TODO待实现功能
      ElMessage({message:"发送成功",type:"info",offset:500},)
    }
</script>
<template>
    <div class='footer'>
      <span class="scroll"></span>
      <!-- <span id="star-five" class="scroll"></span> -->
      <el-divider></el-divider>
      <span>法律声明</span>
      <el-divider direction="vertical"></el-divider>
      <span>友情链接</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="drawer = true">联系我</span>
      <br/>
      <br/>
      <span class="copyright">&copy;版权所有 小花</span>
  </div> 
  <el-drawer v-model="drawer" title="联系我" custom-class="w-10"  :with-header="false">
        <div class="container">
            <div class="contact-info w-100">
                <div class="single-info">
                    <h5>Phone</h5>
                    <p>(86) -13953117953</p>
                </div>
                <div class="single-info">
                    <h5>Email</h5>
                    <p>1262405508@qq.name</p>
                </div>
                <div class="single-info">
                    <h5>Address</h5>
                    <p>30 Heathcote Vista, Cassinfort, LA</p>
                </div>
                <div class="single-info">
                    <h5>Social</h5>
                    <p>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                    </p>
                </div>
                <el-divider border-style="dashed" />
                <div class="" >
                    <el-input style="margin-top:20px" v-model="name" placeholder="Name" clearable/>
                    <el-input style="margin-top:20px" v-model="email" placeholder="Email"/>
                    <el-input style="margin-top:20px" v-model="subject" placeholder="Subject"/>
                    <el-input style="margin-top:20px" v-model="content" type="textarea" placeholder="Message"></el-input>
                    <el-button style="margin-top:20px"  @click="send"  type="primary" >
                      发送 <el-icon class="el-icon--right"><ChatDotSquare />
                    </el-icon></el-button>
                </div>
            </div>
    </div>
      </el-drawer>
  <el-affix class="back-top"  offset="0" position="bottom" @click="backToTop">
    <el-button type="info">回顶部<el-icon class="el-icon--right"><ArrowUp/></el-icon></el-button>
  </el-affix>
</template>

<style scoped>
  .footer{
        height: 150px;
        text-align: center;
        font-size: 16px;
        padding: 0px 100px;
        position: relative;
    }
    .footer{
      cursor: pointer;
    }
    .copyright{
      font-size: 12px;
    }
    .info{
      font-size: 14px;
      color: #72767b;
      line-height: 25px;
    }
    .footer .scroll{
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border:2px solid #eaeaea;
      /* background-color: rgba(216, 16, 109,0.6); */
      position: absolute;
      left: 5%;
      top: -25px;
      z-index: 10;
      animation: scrollA infinite 20s linear alternate;
    }
    @keyframes scrollA {
      0% {left: 5%;transform: rotate(180deg);};
      10% {left: 5%;transform: rotate(270deg);}
      20% {left: 5%;transform: rotate(450deg);}
      25% {left: 10%;transform: rotate(540deg);}
      30% {left: 20%;transform: rotate(720deg);}
      35% {left: 30%;transform: rotate(900deg);}
      40% {left: 40%;transform: rotate(1080deg);}
      45% {left: 50%;transform: rotate(1260deg);}
      50% {left: 60%;transform: rotate(1440deg);}
      55% {left: 70%;transform: rotate(1620deg);}
      60% {left: 80%;transform: rotate(1800deg);}
      80% {left: 90%;transform: rotate(2610deg);}
      90% {left: 90%;transform: rotate(2340deg);}
      100% {left: 90%;transform: rotate(2520deg);}
    }
    /* 返回首页 */
    .back-top{
      margin-left: 100%;
    }
    /* 联系我 */
    .container{
      height: 100%;
      background-color: aliceblue;
      display: grid;
      justify-content: space-around;
    }
    .contact-info{
      margin-top: 20%;
    }
    .contact-info h5{
      font-family: 'Times New Roman', Times, serif;
      font-size: larger;
      color:gray;
    }
    .contact-info p{
      font-family:Georgia, 'Times New Roman', Times, serif;
      font-size: medium;
    }

    

</style>