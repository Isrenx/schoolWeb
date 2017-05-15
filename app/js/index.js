/**
 * Created by zhiqingan on 2017/1/9.
 */
import Preload from './Preload';
import {$$} from './func';
const resources = [
]

let loader = new Preload (
    {
        resources: resources,
        onStart: function(total) {
            console.log("加载资源……")
        },
        onProgress: function(current, total) {
            
        },
        onComplete: function(total) {
            var a = 0;
            function progress(){
                a++;
                // $$('.progess').innerHTML = a;
                if(a>=100){
                    a=100;
                                       
                    return;
                }
                requestAnimFrame(progress);
            }
            progress();

            console.log("加载完成")
        }
    }
)

document.addEventListener('DOMContentLoaded', function () {
    loader.start()
}, false)
import {load} from './onload';
window.onload = load;
