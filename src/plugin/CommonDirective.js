import hljs from "highlight.js";
import clipboard from 'clipboard';
import { ElMessage } from 'element-plus'



const directives = [
    {
        //高亮显示部分
        "directiveName": "copy",
        "op" :{
            updated:(el,binding)=>{
                let blocks = el.querySelectorAll("pre code");
                let arg = binding.value
                blocks.forEach((block)=>{    
                    if(arg.isCopy){
                        //是否显示复制按钮
                        let copy = document.createElement("div");
                        copy.setAttribute("class","copy");
                        copy.innerHTML="复制"
                        copy.onclick=()=>{
                        console.log("点击了")
                        //复制所有内容
                        let $clipboard =  new clipboard(block,{
                            text:function(el){
                                let o_content = el.innerHTML
                                let t=o_content.replaceAll(/<.*?>/g,"").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                                return t.substring(0,t.length-2);
                            }
                        });
                        $clipboard.on('success', function (e) {
                            ElMessage({message:"复制成功",type:"info",offset:600},)
                            $clipboard.destroy()
                          });
                    
                          //6. 复制失败的响应事件
                          $clipboard.on('error', function (e) {
                            ElMessage("复制失败")
                            console.log(e);          
                            console.error('Action:', e.action);
                            console.error('Trigger:', e.trigger);
                            $clipboard.destroy()
                          });

                    }
                    
                    block.appendChild(copy);
                    block.onmouseenter = function(){
                        let t_copy=block.getElementsByClassName("copy");
                        t_copy[0].style.display="block";    
                    }
                    block.onmouseleave = function(){
                        
                        let t_copy=block.getElementsByClassName("copy");
                        t_copy[0].style.display="none";
                    }
                    }
                    
                })
            
                
            }
        }
    }
] 


export default {
    install: function(app){
        directives.forEach((directive)=>{+
            app.directive(directive.directiveName,directive.op);
        })
    }
}