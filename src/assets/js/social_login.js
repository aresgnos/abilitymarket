window.name="myMainWindow";

// 네이버 앱의 키 설정 -- 2017.09.22
naver_key = "Sf8FmC4Wtz9leNqz5ABx";
naver_secret = "YUU89SrVWM";
naver_callback = "www.shouse.garden";

// 카카오톡 앱의 Javascript 키 설정
Kakao.init('d4d3be6d08586af7f7a1428a4aa5c018');

// 페이스북 app ID : 809106582975959 -- 2021.01.13 확인
// 페이스북 app 시크릿키 : cfa58993bad460e0d52369a669d63423
// 페이스북 SDK 초기화
window.fbAsyncInit = function() {
    FB.init({appId: '809106582975959', status: true, cookie: true,xfbml: true});
};

(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/ko_KR/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));

function kakaoLogin() {
	// 카카오톡 로그인 창을 띄웁니다.
	Kakao.Auth.login({
		success: function(authObj) {
			Kakao.Auth.setAccessToken(authObj.access_token);
			Kakao.API.request({
				url: '/v2/user/me',
				success: function(res){
					userid = res.id;
					email = res.kakao_account.email;
					$.post("/member/login_kakao.html", { "userid": userid, "email": email, "action":"login", "kakaoObj":res},
						function (response) {
							if (response.msg=="join"){
								location.href='52005_join.html';
							} else {
								location.href='login_process.html?return_url='+$('input[name="return_url"]').val();
							}
						}, "json"
					);
				}
			});
		},
		fail: function(err) {
			alert(JSON.stringify(err));
		}
	});	
};

function facebookLogin() {
	//페이스북 로그인 창을 띄웁니다
	FB.login(function(response) {
		var fbname, userid;
		var accessToken = response.authResponse.accessToken;
		FB.api('/me', function(user) {
			userid = user.id;
			$.post("/member/login_facebook.html", { "userid": userid, "username": (user.name), "action":"login", "fbaccesstoken":accessToken, "useremail":user.email },
				function (response) {
					console.log(response);
					if (response.msg=="join"){
						location.href='52005_join.html';
					} else {
						location.href='login_process.html?return_url='+$('input[name="return_url"]').val();
					}
				}, "json"
			);
		});
	}, {scope: 'public_profile,email'});
}

function naverLogin(){
	// 로그인쿠키 저장하고 네이버 로그인창을 띄웁니다.
	setCookie("action","login",1);
	$('#naver_id_login a').trigger("click");
}

function appleLogin(){
	setCookie("action","login",1);
	$('#appleid-signin').trigger("click");
}

// 쿠키 생성
function setCookie(cName, cValue, cDay){
	var expire = new Date();
	expire.setDate(expire.getDate() + cDay);
	cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
	if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
	document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
	cName = cName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cName);
	var cValue = '';
	if(start != -1){
		start += cName.length;
		var end = cookieData.indexOf(';', start);
		if(end == -1)end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}


