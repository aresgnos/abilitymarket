<template>
  <div class="container">

    <div class="top">
      <button class="btn_login">로그인</button>
      <button class="btn_join">회원가입</button>
    </div>

    <div class="header">
      <div class="logo">
      <a href="#"><img src="./assets/images/logo.jpg" /></a>
      </div>
      <div class="searchbox">
      <input type="text" placeholder="주변에 &ldquo;&nbsp;&rdquo; 할 수 있는 사람?" />
      <button type="submit" class="btn_search"><img src="./assets/images/searchicon.png" /></button>
      </div>
      <nav>
          <ul class="menu">
            <li><a href="#">나의&nbsp;능력</a></li>
            <li><a href="#">당신의&nbsp;능력</a></li>
            <li><a href="#">고객센터</a></li>
            <li><a href="#">알림</a></li>
            <li><a href="#">채팅</a></li>
            <li><a href="#">마이페이지</a></li>
          </ul>
        </nav>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">footer</div>
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
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

ul, li {
  list-style : none;
}

a {
  text-decoration: none;
  color: #707070;
  line-height: 100%;
}

button {
  all: unset;;
}

.container {
  width : 70%;
  height: 100vh;
  margin : 0 auto;
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 40px 90px 500px 350px 350px 350px; */
  font-family: "GmarketSansMedium";
  color: #707070;
}

.top {
  display: flex;
  justify-content : flex-end;
  align-content: center;
  text-align: center;
  margin-top : 20px;
}

.btn_login {
  all: unset;
  width : 125px;
  height : 35px;
  border: 1px solid #3476D8;
  border-radius : 15px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 10px;
}

.btn_join {
  all: unset;
  width : 125px;
  height : 35px;
  background-color: #3476D8;
  border: 1px solid #3476D8;
  border-radius : 15px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #ffffff;
}

.btn_search {
  width : 35px;
  height : 35px;
}

.header {
  display: flex;
  align-items: center;
}

.header > .logo { width:20%; justify-content: center;}
.header > .searchbox { flex: 2; justify-content: center;}
.header > .menu { flex:4; justify-content: center; }

.menu > li {  
display: inline-block;
margin-left: 30px;
margin-top:15px;}

input {
  border-bottom : 2px solid #3476D8;
  border-left: none;
  border-right: none;
  border-top: none;
  font-size: 1rem;
  font-family: 'GmarketSansLight';
  
}
input:focus { outline: none; }
input::placeholder { color : #6797dd; }




</style>
