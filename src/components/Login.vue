<template>
  <div class="logincontainer">

    <div class="loginbox">
		<div class="logobox">
        <a href="#" class="logo"><img src="../assets/images/logo.jpg" /></a>
		</div>
    	<div class="login">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button class="btn_login">로그인</button>
    	</div>

    	<!-- <div class="checkbox">
        <input type="checkbox" class="check" /><span>아이디&nbsp;저장</span>
    	</div> -->

		<div class="checkbox">
			<label class="check">
				<input type="checkbox" /><span>이메일 저장</span>
			</label>
			<div class="checklink">
				<a href="#" class="findpw">이메일찾기</a>
				<a href="#" class="join">비밀번호찾기</a>
			</div>
    </div>

    <div class="loginbox">
    <div class="simplelogin">
        <div class="login"><span>간편 로그인</span></div>
        <!-- <button type="button" class="btn h50 h40m wfull sns1" onclick="kakaoLogin();"><span class="inner"><span class="icon"></span>카카오톡으로 로그인</span></button></dd>
        <dd class="mt10 mt10m"><button type="button" class="btn h50 h40m wfull sns2" onclick="naverLogin();"><span class="inner"><span class="icon"></span>네이버로 로그인</span></button></dd>
        <dd class="mt10 mt10m"><button type="button" class="btn h50 h40m wfull sns3" onclick="facebookLogin();"><span class="inner"><span class="icon"></span>페이스북으로 로그인</span></button></dd>
                    <dd class="mt10 mt10m"><button type="button" class="btn h50 h40m wfull sns4" onclick="appleLogin();"><span class="inner"><span class="icon"></span>Apple로 로그인</span></button></dd>
    </dl> -->
    
    </div>
    </div>
    </div>
  </div>
  
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
@import "../assets/css/default.css";

.logincontainer {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "GmarketSansLight";
  
}

.loginbox {
	max-width: 375px;
	margin-top:80px;
	flex-direction: column;
	
}

.logobox {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 50px;
}

.checkbox {
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #808080;
}

.checklink {
	margin-left: auto;
	font-size: 14px;
	color: #e27b04;
}

.simplelogin {
  font-size: 14px;
}

.loginline {
    font-size: 13px;
    line-height: 52px;
    color: #808080;
    position: relative;
}

.btn_login {
  all: unset;
  width: 375px;
  height: 50px;
  font-size: 15px;
  background-color: #3476D8;;
  color: #ffffff;
  font-family: "GmarketSansLight";
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
}

input{
  width: 350px;
  height: 40px;
  font-size: 15px;
  font-family: "GmarketSansLight";
  border: 1px solid #ccced1;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 10px;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: #a5a5a5;
}

input[type="checkbox"] {
	width: 18px;
	height: 18px;
}
.join {
  margin-left: 10px;
}
.join::before {
    content: "|";
    color: #707070;
    margin-right: 10px;
    
}
</style>
