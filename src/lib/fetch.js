import axios from "axios";
import global from "../global";

let $http =  axios.create({
    baseURL: global.globalConfig.web_url
})


const fetch = {
    post:(url,param)=>{
        return new Promise((resolve,reject)=>{
            $http.post(url,param).then((result)=>{
                
                if(result.status == 200){
                    if(result.data.head.code == "0"){
                        resolve(result.data.body);
                    }else{
                        reject(result.data.head.msg);
                    }
                }else{
                    reject("网络异常")
                }
            },(error)=>{
                return reject(error);
            })
        })
        
    },
    get:(url)=>{
        $http.get(url)
        .then((result)=>{
            if(result.status == 200){
                return Promise.resolve(result.data)
            }else{
                return Promise.reject("网络异常")
            }
        },(error)=>{
            return Promise.reject(error);
        })
    }
    
}

export default fetch