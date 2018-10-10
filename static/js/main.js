
$(function(){
  
 
	
	//滑块
	$('.ant-switch').click(function(){
		if($(this).hasClass('ant-switch-checked')){
			$(this).removeClass('ant-switch-checked').find('.ant-switch-inner').html('OFF');
		}
		else{
			$(this).addClass('ant-switch-checked').find('.ant-switch-inner').html('ON')
		}
	})
	
	//tab
	$('.ant-radio-button-wrapper').click(function(){
		$(this).addClass('ant-radio-button-wrapper-checked').siblings().removeClass('ant-radio-button-wrapper-checked');
	})
	
	//输入密码 显示 影藏
	$("#eye").on("click",function(){
			if($(this).hasClass("eye-on")){
				$(this).removeClass("eye-on");
				$("#pass-id").prop("type" , "password");
			}else{
				$(this).addClass("eye-on");
				$("#pass-id").prop("type" , "text");
			}
		});
	
	//tab 切换
	$('.g-tab-hd li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.g-tab-bd').hide();
		$('.g-tab-bd').eq($(this).index()).show();
	})
	
})
