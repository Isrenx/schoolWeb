!function(o){function e(n){if(t[n])return t[n].exports;var s=t[n]={exports:{},id:n,loaded:!1};return o[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var t={};return e.m=o,e.c=t,e.p="./",e(0)}([function(o,e,t){"use strict";function n(o){return o&&o.__esModule?o:{default:o}}var s=t(2),i=n(s),c=(t(1),t(3)),a=[],l=new i.default({resources:a,onStart:function(o){console.log("加载资源……")},onProgress:function(o,e){},onComplete:function(o){function e(){return t++,t>=100?void(t=100):void requestAnimFrame(e)}var t=0;e(),console.log("加载完成")}});document.addEventListener("DOMContentLoaded",function(){l.start()},!1),window.onload=c.load},function(o,e){"use strict";function t(o){var e=document.querySelectorAll(o);return 1==e.length?e[0]:e}function n(o){var e=o.getBoundingClientRect(),t=document.documentElement.clientTop,n=document.documentElement.clientLeft;return{top:e.top-t,bottom:e.bottom-t,left:e.left-n,right:e.right-n,width:e.width,height:e.bottom-e.top}}function s(o){var e=document.createElement(o);return e}Object.defineProperty(e,"__esModule",{value:!0}),e.$$=t,e.getRect=n,e.createEle=s,window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame},function(o,e){"use strict";function t(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function o(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),s=function(){function o(e){if(t(this,o),this.option={resourceType:"image",baseUrl:"./",resources:[],onStart:null,onProgress:null,onComplete:null},!e)return void alert("参数错误！");for(var n in e)this.option[n]=e[n];this.status=0,this.total=this.option.resources.length||0,this.currentIndex=0}return n(o,[{key:"isFunc",value:function(o){return"function"==typeof o}},{key:"start",value:function(){this.status=1;for(var o=this,e=(this.option.baseUrl,0),t=this.option.resources.length;e<t;e++){var n=this.option.resources[e],s=n,i=new Image;i.onload=function(){o.loaded()},i.onerror=function(){o.loaded()},i.src=s}this.isFunc(this.option.onStart)&&this.option.onStart(this.total)}},{key:"loaded",value:function(){this.isFunc(this.option.onProgress)&&this.option.onProgress(++this.currentIndex,this.total),this.currentIndex===this.total&&this.isFunc(this.option.onComplete)&&this.option.onComplete(this.total)}}]),o}();e.default=s},function(o,e,t){"use strict";function n(){function o(){$(".meun-content .menu-box").addClass("active1"),setTimeout(function(){$(".meun-content").removeClass("zindexMax").addClass("indexMin")},500)}function e(o){$(o).removeClass("indexMax")}$("html").css({height:"100%",overflow:"hidden"}),$("body").css({height:"100%",overflow:"hidden"}),$(".header .meun-btn").click(function(){$(".meun-content").removeClass("indexMin").addClass("zindexMax"),$(".meun-content .menu-box").removeClass("active1").addClass("active")}),$(".meun-content .home").click(function(){$(".stu-center").removeClass("indexMax").addClass("indexMin"),o()}),$(".meun-content .i-school").click(function(){$(".stu-center,.p1,.school-show,.school-history,.school-teach,.school-teacher,.school-impression").removeClass("indexMax"),o(),$(".header,.footer").addClass("zindexMax"),$(".school-box").removeClass("indexMin").addClass("indexMax")}),$(".school-box .s-information").click(function(){$(".header,.footer").addClass("zindexMax"),$(".school-show").removeClass("indexMin").addClass("indexMax")}),$(".school-box .s-history").click(function(){$(".header,.footer").addClass("zindexMax"),$(".school-history").removeClass("indexMin").addClass("indexMax")}),$(".school-box .s-teach").click(function(){$(".header,.footer").addClass("zindexMax"),$(".school-teach").removeClass("indexMin").addClass("indexMax")}),$(".school-box .s-teacher").click(function(){$(".header,.footer").addClass("zindexMax"),$(".school-teacher").removeClass("indexMin").addClass("indexMax")}),$(".school-box .s-impression").click(function(){$(".header,.footer").addClass("zindexMax"),$(".school-impression").removeClass("indexMin").addClass("indexMax")}),$(".school-teach .teach .btn-group .pre").click(function(){parseInt($(".school-teach .teach .c-box").position().top)<0&&($(".school-teach .teach .c-box").animate({top:"0"},"fast"),$(".school-teach .btn-group .page-num").text("1"))}),$(".school-teach .teach .btn-group .next").click(function(){parseInt($(".school-teach .teach .c-box").position().top)>=0&&($(".school-teach .teach .c-box").animate({top:"-100%"},"fast"),$(".school-teach .btn-group .page-num").text("2"))});var t="<li></li>",n="<li></li>";$(".p1 .banner li").each(function(o){$(".p1 .num").html(n),$(".p1 .num li").eq(0).addClass("current"),n+=t}),$(".photo-box .num").each(function(o){$(".photo-box .num").html(n),$(".photo-box .num li").eq(0).addClass("current"),n+=t}),$(".school-impression .imp-box li").click(function(){$(".photo-box").removeClass("indexMin").addClass("zindexMax")}),$(".photo-box .close").click(function(){$(".photo-box").removeClass("zindexMax").addClass("indexMin")}),$(".school-box .s-map").click(function(){window.location.href="map.html"});var s=0,i=(new TouchSlider({id:"hotimg_img",speed:600,timeout:1e4,before:function(o){s=o,$(".p1 .num li").removeClass("current"),$(".p1 .num li").eq(s).addClass("current")}}),0),c=new TouchSlider({id:"showImg-01",speed:600,timeout:1e4,before:function(o){i=o,$(".photo-box .num li").removeClass("current"),$(".photo-box .num li").eq(i).addClass("current")}});$(".photo-box .change-btn .left").click(function(){0==i?c.slide($("#showImg-01 li").length-1):c.slide(i-1)}),$(".photo-box .change-btn .right").click(function(){i==$("#showImg-01 li").length-1?c.slide(0):c.slide(i+1)});var a=0,l="";$(".stu-system .login .login-btn").click(function(){a=$(".stu-system .login .mess input").val(),l=$(".stu-system .login .pass input").val(),"admin"==a&&"123456"==l?window.location.href="subject.html":alert("学号或密码错误！")}),$(".stu-system .login .forget").click(function(){alert("工程师紧急开发中...")}),$(".qcode").click(function(){e(".qcode")}),$(".infor-p1 .college .nav .more").click(function(){$(".infor-p1 .college .c-box").hasClass("current")?$(".infor-p1 .college .c-box").removeClass("current"):$(".infor-p1 .college .c-box").addClass("current")}),$(".menu-box .infor-stu").click(function(){$(".stu-center").removeClass("indexMin").addClass("indexMax"),$(".header").addClass("zindexMax"),o()}),$(".college .c-box").click(function(){alert("工程师正在搬运中，敬请期待！")}),$(".footer .home").click(function(){e(".stu-center,.qcode,.school-box,.school-show,.school-history,.school-teach,.school-impression,.school-teacher"),$(".header").addClass("zindexMax"),$(".p1,.footer").addClass("indexMax")}),$(".footer .student").click(function(){e(".qcode,.p1,.school-box,.school-show,.school-history,.school-teach,.school-impression,.school-teacher"),$(".header").addClass("zindexMax"),$(".stu-center,.footer").removeClass("indexMin").addClass("indexMax")}),$(".footer .public").click(function(){$(".stu-center").hasClass("indexMax")&&$(".stu-center").addClass("active"),e(".stu-center,.p1,.footer,.school-box,.school-show,.school-history,.school-teach,.school-impression,.school-teacher"),$(".header,.footer").removeClass("zindexMax"),$(".qcode").addClass("indexMax")})}Object.defineProperty(e,"__esModule",{value:!0}),e.load=n;t(1)}]);