<template>
  <v-app>
    <v-main>
      <v-container class="container">
        <v-row>
          <v-col>
            <div class="d-flex flex-row-reverse">
              <div class="top">
                <router-link to="/login2"
                  ><button class="btn_login">로그인</button></router-link>
                <router-link to="/join">
                <button class="btn_join">회원가입</button></router-link>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="d-flex mb-6">
              <div class="logo">
                <a href="#"><v-img src="./assets/images/logo.jpg"></v-img></a>
              </div>

              <div class="searchbox" style="margin-top:8px;">
                <input
                  type="search"
                  placeholder="주변에&ldquo;&nbsp;&rdquo; 할 수 있는 사람?"
                />
                
              </div>
              <button class="btn_search" style="margin-top:3px;">
                  <v-img
                    src="./assets/images/searchicon.png"
                    style="width: 18px;"
                  ></v-img>
                </button>

              <div class="item" :class="'ml-auto'">
                <ul class="menu">
                  <router-link to="/sell">
                  <li><a href="#">나의&nbsp;능력</a></li>
                  </router-link>

                  <router-link to="/buy">
                  <li style="margin-left:30px;"><a href="#">당신의&nbsp;능력</a></li>
                  </router-link>

                  <li><a href="#">고객센터</a></li>
                  <li><a href="#">알림</a></li>
                  <li><a href="#">채팅</a></li>
                  <li><a href="#">마이페이지</a></li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          <div class="main">
          <router-view></router-view>
        </div>
        </v-col>
        </v-row>

        <!-- <v-row>
          <v-col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          <div class="footer">
          footer
        </div>
        </v-col>
        </v-row> -->

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import "./assets/css/default.css";

@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "GmarketSansLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'Vitro_core';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Vitro_core.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #707070;
  line-height: 100%;
}

button {
  all: unset;
}

.logo {
  width: 127px;
}
.container {
  font-family: "GmarketSansMedium";
  
}

.top {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn_login {
  all: unset;
  width: 125px;
  height: 35px;
  border: 1px solid #3476d8;
  border-radius: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 10px;
}

.btn_join {
  all: unset;
  width: 125px;
  height: 35px;
  background-color: #3476d8;
  border: 1px solid #3476d8;
  border-radius: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #ffffff;
}


.menu > li {
  display: inline-block;
  margin-left: 30px;
  font-size: 1rem;
}

.searchbox {
  margin-left: 100px;
}

input {
  border-bottom: 2px solid #3476d8;
  border-left: none;
  border-right: none;
  border-top: none;
  font-size: 16px;
  font-family: "GmarketSansLight";
}
input:focus {
  outline: none;
}
input::placeholder {
  color: #6797dd;
}

</style>
