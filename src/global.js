
const globalConfig = {

    //后端地址
    web_url: "http://127.0.0.1:8805/"
}
export default  {
    install:(app)=>{
        app.config.globalProperties.$globalConfig = globalConfig
    },
    globalConfig
}