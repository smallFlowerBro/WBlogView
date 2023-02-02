import {createStore} from 'vuex'

const store  = createStore({
    state:{},
    modules:{},
    mutations:{},
    getters:{},
    actions:{}
})

store.getAttr = (namespace,key,defaultValue)=>{
    if(!(typeof namespace === "string")){
        throw Error("namespace excep a String")
    }
    if(key ==undefined || key==null ){
        return store.state[namespace]||defaultValue
    }else if(typeof key === "string"){
        return (store.state[namespace])[key]||defaultValue
    }else{
        throw Error("key excep a String")
    }

}

store.setAttr=(namespace="",value={})=>{
    store.state[namespace] = value
}

export  default store;