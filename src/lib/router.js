import router from "../router/index"
//跳转页面
router.goToPage = (name="",param={})=>{
    router.push({path:name,query:param})
    
}
export default router