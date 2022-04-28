<template>
	<div>
		<div class="loginbox">
			<div clss="logo">
			<a href="#"><img src="../assets/images/logo.jpg" /></a>
			</div>
			<div class="login">
				<input type="text" placeholder="아이디">
				<input type="password" placeholder="비밀번호">
				<button class="btn_login">로그인</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup () {
		

		return {}
	}
}
</script>

<style lang="css" scoped>

.loginbox {
	display: flex;
	margin: 0 auto;
    max-width: 400px;
	height: 100vh;
	flex-direction: column;
}

.login {
	margin-top: 20px;
}

.btn_login {
	all: unset;
 	width: 375px;
	height: 50px;
	font-size: 15px;
	background-color: #3476D8;
	color: #ffffff;
	font-family: 'GmarketSansLight';
	border-radius: 5px;
	text-align: center;
	margin-bottom: 10px;
	cursor: pointer;
}

input {
  width: 350px;
  height: 40px;
  font-size: 15px;
  font-family: 'GmarketSansLight';
  border: 1px solid #ccced1;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 10px;
  
}
input:focus { outline: none; }
input::placeholder { color : #a5a5a5; }


</style>