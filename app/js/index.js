/**
 * Created by zhiqingan on 2017/1/9.
 */
import Preload from './Preload';
import {$$} from './func';
const resources = [
    '../images/banner-01.jpg',
    '../images/banner-02.jpg',
    '../images/banner-03.jpg',
    '../images/banner-04.jpg',
    '../images/banner-05.jpg',
    '../images/banner-06.jpg',
    '../images/banner-07.jpg',
    '../images/banner-08.jpg',
    '../images/banner-09.jpg',
    '../images/banner-10.jpg',
    '../images/banner-11.jpg',
    '../images/banner.jpg',
    '../images/news.jpg',
    '../images/s-01.png',
    '../images/s-02.png',
    '../images/s-03.png',
    '../images/s-04.png',
    '../images/s-05.png',
    '../images/s-06.png',
    '../images/slide-01.jpg',
    '../images/stu-01.jpg',
    '../images/stu-02.jpg',
    '../images/stu-03.jpg',
    '../images/stu-04.jpg',
    '../images/wechat.jpg',
    '../images/weibo.jpg',
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
                $$('.precent-num span').innerHTML = a + '%';
                $$('.car-box').style.width = a + '%';
                $$('.precent-line span').style.width = a + '%';
                if(a>=100){
                    a=100;
                    $$('.loading').classList.remove('ZindexMax'); 
                    $$('.loading').classList.add('indexMin');
                    $$('.p1 .news-box .hot-news').classList.add('current');           
                    $$('.p1 .news-box .school-news').classList.add('current');
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
