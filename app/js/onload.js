/**
 * Created by zhiqingan on 2017/1/9.
 */
// import lake from './lake';
import {$$,getRect,createEle} from './func';
export function load(){	

	//组织scoll带来的页面默认滑动事件
	$('html').css({"height":"100%","overflow":"hidden"});
	$('body').css({"height":"100%","overflow":"hidden"});

	//导航
	$('.header .meun-btn').click(function(){
		$('.meun-content').removeClass('indexMin').addClass('zindexMax');
		$('.meun-content .menu-box').removeClass('active1').addClass('active');
	});
	$('.meun-content .home').click(function(){
		$('.stu-center').removeClass('indexMax').addClass('indexMin');
		navFade();
	});
	$('.meun-content .i-school').click(function(){
		$('.stu-center,.p1,.school-show,.school-history,.school-teach,.school-teacher,.school-impression').removeClass('indexMax');
		navFade();
		$('.header,.footer').addClass('zindexMax');
		$('.school-box').removeClass('indexMin').addClass('indexMax');

	});
	//菜单滑出
	function navFade(){
		$('.meun-content .menu-box').addClass('active1');
		setTimeout(function(){
			$('.meun-content').removeClass('zindexMax').addClass('indexMin');
		},500);
	}

	//学校介绍导航
	$('.school-box .s-information').click(function(){
		$('.header,.footer').addClass('zindexMax');
		$('.school-show').removeClass('indexMin').addClass('indexMax');
	});
	$('.school-box .s-history').click(function(){
		$('.header,.footer').addClass('zindexMax');
		$('.school-history').removeClass('indexMin').addClass('indexMax');
	});
	$('.school-box .s-teach').click(function(){
		$('.header,.footer').addClass('zindexMax');
		$('.school-teach').removeClass('indexMin').addClass('indexMax');
	});
	$('.school-box .s-teacher').click(function(){
		$('.header,.footer').addClass('zindexMax');
		$('.school-teacher').removeClass('indexMin').addClass('indexMax');
	});
	$('.school-box .s-impression').click(function(){
		$('.header,.footer').addClass('zindexMax');
		$('.school-impression').removeClass('indexMin').addClass('indexMax');
	});
	
	//教育教学
	$('.school-teach .teach .btn-group .pre').click(function(){
		if ( parseInt($('.school-teach .teach .c-box').position().top) < 0 ) {
			$('.school-teach .teach .c-box').animate({
				top:'0'
			},'fast');
			$('.school-teach .btn-group .page-num').text('1');
		}
		
	});
	$('.school-teach .teach .btn-group .next').click(function(){
		if ( parseInt($('.school-teach .teach .c-box').position().top) >= 0 ) {
			$('.school-teach .teach .c-box').animate({
				top:'-100%'
			},'fast');
			$('.school-teach .btn-group .page-num').text('2');
		}

	});


	//首页焦点图插入圆点记录图片位置
	var numList = '<li></li>',
		numAll = '<li></li>';
	$('.p1 .banner li').each(function(i){
		$('.p1 .num').html(numAll);
		$('.p1 .num li').eq(0).addClass('current');
		numAll+=numList;
	});
	
	//印象工商插入圆点记录图片位置
	$('.photo-box .num').each(function(i){
		$('.photo-box .num').html(numAll);
		$('.photo-box .num li').eq(0).addClass('current');
		numAll+=numList;
	});
	
	//印象工商图片浮层展开
	$('.school-impression .imp-box li').click(function(){
		$('.photo-box').removeClass('indexMin').addClass('zindexMax');
	});

	//印象工商关闭
	$('.photo-box .close').click(function(){
		$('.photo-box').removeClass('zindexMax').addClass('indexMin');
	});
	
	//全景地图展开
	$('.school-box .s-map').click(function(){
		window.location.href='map.html';
	});

	//首页banner滑动
	var active = 0;
    var t1 = new TouchSlider({ id: 'hotimg_img', speed: 600, timeout: 10000, before: function (index) {active = index;$('.p1 .num li').removeClass('current');$('.p1 .num li').eq(active).addClass('current');} });

    //印象工商
	var active2 = 0;
    var t2 = new TouchSlider({ id: 'showImg-01', speed: 600, timeout: 10000, before: function (index) {active2 = index;$('.photo-box .num li').removeClass('current');$('.photo-box .num li').eq(active2).addClass('current');} });
    $(".photo-box .change-btn .left").click(function () {
		if (active2==0) {
			t2.slide($("#showImg-01 li").length-1);
		} else {
			t2.slide(active2-1);
		}
	});
	$(".photo-box .change-btn .right").click(function () {
		if (active2==$("#showImg-01 li").length-1) {
			t2.slide(0);
		} else {
			t2.slide(active2+1);
		}
	});

	//登录
	var stuMess = 0;
	var stuPass = '';

	$('.stu-system .login .login-btn').click(function(){
		
		stuMess = $('.stu-system .login .mess input').val();
		stuPass = $('.stu-system .login .pass input').val();
		
		if ( stuMess == 'admin' && stuPass=='123456' ) {
			window.location.href='subject.html';
		}else{
			alert('学号或密码错误！');
		}

	});

	$('.stu-system .login .forget').click(function(){
		alert('工程师紧急开发中...');
	});



    //官微
    $('.qcode').click(function(){
    	removeNavMax('.qcode');
    });

    //学院介绍-更多按钮展开
    $('.infor-p1 .college .nav .more').click(function(){
    	if ( $('.infor-p1 .college .c-box').hasClass('current') ) {
    		$('.infor-p1 .college .c-box').removeClass('current');
    	}else{
    		$('.infor-p1 .college .c-box').addClass('current');
    	}
    });
    //由学院介绍进入学生中心
    $('.menu-box .infor-stu').click(function(){
    	$('.stu-center').removeClass('indexMin').addClass('indexMax');
    	$('.header').addClass('zindexMax');
		navFade();
    });
    $('.college .c-box').click(function(){
    	alert('工程师正在搬运中，敬请期待！');
    });

    //footer导航
    $('.footer .home').click(function(){
    	removeNavMax('.stu-center,.qcode,.school-box,.school-show,.school-history,.school-teach,.school-impression,.school-teacher');
    	$('.header').addClass('zindexMax');
    	$('.p1,.footer').addClass('indexMax');
    });
    $('.footer .student').click(function(){
    	removeNavMax('.qcode,.p1,.school-box,.school-show,.school-history,.school-teach,.school-impression,.school-teacher');
    	$('.header').addClass('zindexMax');
    	$('.stu-center,.footer').removeClass('indexMin').addClass('indexMax');
    });
    $('.footer .public').click(function(){
    	if ( $('.stu-center').hasClass('indexMax') ) {
    		$('.stu-center').addClass('active');
    	}
    	removeNavMax('.stu-center,.p1,.footer,.school-box,.school-show,.school-history,.school-teach,.school-impression,.school-teacher');
    	$('.header,.footer').removeClass('zindexMax');
    	$('.qcode').addClass('indexMax');
    });

    //移除最小层级
    function removeNavMin(obj){
    	$(obj).removeClass('indexMin');
    }
    //移除最高层级
    function removeNavMax(obj){
    	$(obj).removeClass('indexMax');
    }

}