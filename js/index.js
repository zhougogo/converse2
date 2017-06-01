//第一页loading
$(function() {

	//判断设备
	var platfrom = navigator.userAgent;
	var regplatfrom = /iPhone/gi;
	console.log("IOS");
	if(!regplatfrom.test(platfrom)) {
		console.log("Android");
		$("#gocamera").attr("accept", "image/*");
		$("#gocamera").attr("capture", "camera");
	}

	//第三页
	var height = $(window).height();
	$('.face .container').height(height);
	$('.page33 .page33Container').height(height);

	//重做一次
	$('.footerBtnLeft').click(function() {
		$('.page3 input').val('');
		$('.popup').show();
		$('#view').css('background-image', '');
	});

	//重新选择照片
	$('.backBtm img').click(function() {
		$('.face').show().siblings().hide();
	});

	//全输入验证
	$(".face .personInfo .text").blur(function() {
		if(allInput($('.face .personInfo .text'))) {
			$(".footerBtnRight").attr("src", "../converse/img/photoword/bluefooterBtnRight.png");
		} else {
			$(".footerBtnRight").attr("src", "../converse/img/photoword/generate.png");
		};
	});

	function allInput(val) {
		if($(".pic").css("background-image") == "") {
			return false;
		}
		for(var i = 0; i < val.length; i++) {
			if(val[i].value == "") {
				return false;
			}
		}
		return true;
	}

	//字符限制
	limit();

	function limit() {
		var reg = /[a-zA-Z0-9]+/;
		var maxLength1 = [8, 6, 6, 12, 12, 28, 10];
		$('.personInfo .text').each(function(index) {
			this.onblur = function() {
				var len = 0;
				var cn = 0;
				for(var i = 0; i < this.value.length; i++) {
					if(reg.test(this.value[i])) {
						len++;
					} else {
						len += 2;
						if(len - 2 < maxLength1[index]) {
							cn++;
						}
					}
				}
				if(len > maxLength1[index]) {
					var val = this.value.substring(0, maxLength1[index] - cn);
					this.value = val;
				}
			}
		});
		
		var maxLength2 = [10, 10, 16];
		$('.personInfo2 .text').each(function(index) {
			this.onblur = function() {
				var len = 0;
				var cn = 0;
				for(var i = 0; i < this.value.length; i++) {
					if(reg.test(this.value[i])) {
						len++;
					} else {
						len += 2;
						if(len - 2 < maxLength2[index]) {
							cn++;
						}
					}
				}
				if(len > maxLength2[index]) {
					var val = this.value.substring(0, maxLength2[index] - cn);
					this.value = val;
				}
			}
		});
	}

	//跳转生成海报
	
	$('.footerBtnRight').click(function() {
		var reg = /generate/gi;

		var src = $(this).attr('src');
	

		if(!reg.test(src) ) {
			
			
			
//			$(".footerBtnRightLabel").attr("for", "submitBtm");
			
			$('.poster').show().siblings().hide();
		}
	})

	//加载页显示
	setTimeout(function() {
		$(".loading").hide();
		

	}, 3500);

	// 相框隐藏
	setTimeout(function() {
		$(".frame").hide();
		$(".copy").show();
		$(".link").show();
		$(".mask").show().fadeOut(1000);
	}, 4800);

	//点击缩放,手隐藏
	
	//截屏
	
	






})