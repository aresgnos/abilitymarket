<template>

<v-row>
  <v-col>
      <div class="d-flex justify-space-around mb-6">
        <div class="d-flex flex-column mb-6">
          <div class="logincontainer">
            <div class="logo" style="margin-top: 20px">
              <div class="d-flex justify-space-around mb-6">
                <a href="#"
                  ><v-img src="../assets/images/logo.jpg" style="width: 127px"
                /></a>
              </div>
            </div>

            <div class="loginbox" style="margin-top: 40px">
              <div class="d-flex justify-space-around mb-6">
                <div class="d-flex flex-column mb-6">
                  <input type="text" placeholder="아이디" />
                  <input type="password" placeholder="비밀번호" />

                  <button class="btn_login">로그인</button>

                  <div class="check">
                    <div class="d-flex mb-6">
                      <input type="checkbox" /><span>이메일 저장</span>
                      <div class="checklink" style="margin-left: 90px">
                        <a href="#" class="findmail" style="margin-right: 10px">아이디찾기</a>
                        <a href="#" class="findpw">비밀번호찾기</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="simplelogin" style="margin-top:-20px">
                <dt class="m_hide"><span>간편 로그인</span></dt>
            </div>

            <div class="sns">
              <div class="d-flex justify-space-around mb-6" style="margin:0px !important;">
                <div class="d-flex flex-row mb-6">
                    <div class="snsitem"><button class="kakao">
                    <v-img
                        src="../assets/images/kakao.png" style="width:35px;margin-left:7px"/>
                    </button></div>
                    <div class="snsitem"><button class="google">
                    <v-img
                        src="../assets/images/google.png" style="width:37px;margin-left:6px"/>
                    </button></div>
                    <div class="snsitem"><button class="naver">
                    <v-img
                        src="../assets/images/naver.png" style="width:37px;margin-left:6px"/>
                    </button></div>
                
                </div>
              </div>
            
                <div class="d-flex justify-space-around mb-6">
                <div class="join">
                  <button class="btn_join">당신의 가치를 경험해보세요. 회원가입</button>
                </div>
                </div>
                
                </div>
                </div>
              </div>
            </div>

            </v-col>
            </v-row>

</template>

<script>
export default {};
</script>

<style lang="css" scoped>
@import "../assets/css/default.css";

.logincontainer {
  height: 100vh;
  width: 380px;
  margin: 0 auto;
}

input {
  width: 380px;
  height: 45px;
  font-size: 15px;
  font-family: "GmarketSansLight";
  border: 1px solid #ccced1;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
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
  margin-right: 5px;
}

.btn_login {
  all: unset;
  width: 380px;
  height: 45px;
  font-size: 15px;
  background-color: #3476d8;
  color: #ffffff;
  font-family: "GmarketSansLight";
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.btn_join {
  all: unset;
  width: 350px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #3476d8;
  color: #3476d8;
  font-family: "GmarketSansMedium";
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
}


.kakao {
  background: #ffc20f;
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.naver {
  background: #1ec800;
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.google {
    background: #e6e6e6;
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.check {
  font-family: "GmarketSansLight";
  font-size: 15px;
  color: #020202;
}

.findpw::before {
  content: "|";
  color: #252525;
  margin-right: 10px;
  font-family: "GmarketSansLight";
}

.simplelogin dt > span {
    display: inline-block;
    background-color: #fff;
    position: relative;
    z-index: 10;
    padding: 0 10px;
    color: #808080;
}

.simplelogin > dt {
    text-align: center;
    font-size: 15px;
    line-height: 52px;
    color: #808080;
    position: relative;
    font-family: "GmarketSansLight";
}

.simplelogin dt::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: 50%;
    background: #d9d9d9
}

.snsitem {
    padding: 15px;
    margin-bottom:-10px;
}



</style>
