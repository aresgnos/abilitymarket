<template>

    <div class="joincontainer">

    <div class="joinaside">
      <div class="logo" >
      <v-img src="../assets/images/logo_image3.jpg" style="width:370px;margin-top:180px;margin-right:120px;"/>
    </div>
    </div>
    
      <div class="joininfo">
        <h2>회원가입</h2>
  
    <div class="joinbox" style="margin-top:10px;">
      <div class="textbox">
        <input type="text" required />
        <span></span>
        <label>아이디</label>
      </div>

      <div class="textbox">
        <input type="password" required />
        <span></span>
        <label>비밀번호</label>
      </div>
      <div class="textbox">
        <input type="password" required />
        <span></span>
        <label>비밀번호 확인</label>
      </div>

      <div class="textbox">
        <input type="text" required />
        <span></span>
        <label>이름</label>
      </div>

      <div class="textbox">
        <input type="text" required />
        <span></span>
        <label>전화번호</label>
      </div>

       <div class="textbox">
        <input type="text" required />
        <span></span>
        <label>주소</label>
      </div>
    
        <div class="simplejoin" style="margin-top: 40px;">
      <dt class="m_hide"><span>SNS 계정으로 간편 가입</span></dt>

    <div class="sns">
      <div class="snsitem">
        <button class="kakao">
          <v-img
            src="../assets/images/kakao.png"
            style="width: 35px; margin-left: 7px"
          />
        </button>
      </div>
      <div class="snsitem">
        <button class="google">
          <v-img
            src="../assets/images/google.png"
            style="width: 37px; margin-left: 6px"
          />
        </button>
      </div>
      <div class="snsitem">
        <button class="naver">
          <v-img
            src="../assets/images/naver.png"
            style="width: 37px; margin-left: 6px"
          />
        </button>
      </div>
    </div>
    </div>
    <router-link to="/joinnext">
    <button class="btn_next">다음으로</button></router-link>
    </div>
    </div>
    </div>
  
  
</template>

<script>
export default {};
</script>

<style lang="css" scoped>

h2 {
  margin : 0 auto;
  color: #3476d8;
  margin-bottom: 15px;
}

.joincontainer {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.joinaside {
  display: flex;
  width:400px;
}

.joininfo {
  font-family: "GmarketSansLight";
  display: flex;
  flex-direction: column;
  padding:20px;
  
}


.textbox {
  margin: 0 auto;
  width: 380px;
  position: relative;
  border-bottom: 1px solid #afafaf;
  margin-bottom: 20px;
}

.textbox > input {
  width: 50%;
  padding: 0 5px;
  height: 40px;
  font-size: 15px;
  border: none;
  background: none;
  outline: none;
  font-family: "GmarketSansMedium";
}

.textbox > label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #afafaf;
  transform: translateY(-50%);
  font-size: 15px;
  pointer-events: none;
  transition: 0.5s;
  font-family: "GmarketSansMedium";
}

.textbox > span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #3476d8;
  transition: 0.5s;
}

.textbox input:focus ~ label,
.textbox input:valid ~ label {
  top: -5px;
  color: #3476d8;
  font-size: 14px;
  font-family: "GmarketSansMedium";
}

.textbox input:focus ~ span::before,
.textbox input:valid ~ span::before {
  width: 100%;
}

/* 간편 가입 */
.simplejoin dt > span {
  display: inline-block;
  background-color: #fff;
  position: relative;
  z-index: 10;
  padding: 0 10px;
  color: #afafaf;
  font-family: "GmarketSansMedium";
}

.simplejoin > dt {
  text-align: center;
  font-size: 14px;
  line-height: 52px;
  color: #808080;
  position: relative;
 
}

.simplejoin dt::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  top: 50%;
  background: #afafaf;
}

.sns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:20px;
  margin-top:10px;
}

.snsitem {
  margin-bottom: -10px;
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

/* 다음 버튼 */
.btn_next {
  all: unset;
  width: 380px;
  height: 45px;
  font-size: 15px;
  background-color: #3476d8;
  color: #ffffff;
  font-family: "GmarketSansLight";
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-top:30px;
}


</style>
