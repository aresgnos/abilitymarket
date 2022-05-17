<template>
  <div>
    <div class="jncontainer2">
      <div class="procontainer">
        <div class="profile">
          <v-img src="../assets/images/people.png" style="width: 120px" />
        </div>
        <div class="proiconbox">
          <ion-icon name="camera" class="proicon"></ion-icon>
        </div>

        <div class="textbox">
          <input type="text" required />
          <span></span>
          <label>닉네임</label>
        </div>
      </div>

      <div class="interest">
        <h3>관심사 설정</h3>
        <div class="incontainer" v-for="n in 5" :key="n">
          <label class="option_item">
            <input type="checkbox" class="checkbox" />
            <div class="option_inner">
              <div class="mark"></div>
              <ion-icon name="home-outline" class="icon"></ion-icon>
              <div class="name">생활</div>
            </div>
          </label>

          <label class="option_item">
            <input type="checkbox" class="checkbox" />
            <div class="option_inner">
              <div class="mark"></div>
              <ion-icon name="construct-outline" class="icon"></ion-icon>
              <div class="name">조립/수리</div>
            </div>
          </label>

          <label class="option_item">
            <input type="checkbox" class="checkbox" />
            <div class="option_inner">
              <div class="mark"></div>
              <ion-icon name="color-palette-outline" class="icon"></ion-icon>
              <div class="name">취미</div>
            </div>
          </label>

          <label class="option_item">
            <input type="checkbox" class="checkbox" />
            <div class="option_inner">
              <div class="mark"></div>
              <ion-icon name="bicycle-outline" class="icon"></ion-icon>
              <div class="name">운동</div>
            </div>
          </label>
        </div>
        <button class="btn_join">가입완료</button>
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
h3 {
  margin: 0 auto;
  color: #3476d8;
  margin-bottom: 15px;
  margin-left: 15px;
}

.jncontainer2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
}

.procontainer {
  width: 380px;
  padding-top: 150px;
}

.incontainer {
  display: flex;
  /* background:#e6f0ff; */
  width: 400px;
}

/* 프로필 */
.profile {
  padding: 25px 25px;
  width: 120px;
  border-radius: 100px;
  border: 3px solid #e6f0ff;
  background-color: #e6f0ff;
  margin: 0 auto;
}

.proiconbox {
  position: relative;
  bottom:5%;
  left: 50%;
  border-radius: 200px;
  border: 3px solid #e6f0ff;
  padding-left: 3px;
  padding-top: 3px;
  background-color: #ffffff;
  width: 40px;
  height: 40px;
}

.proiconbox > .proicon {
  position: absolute;
  font-size: 28px;
  color: #3476d8;
  margin-bottom: 3px;
  z-index: 1;
}

/* 인풋 */
.textbox {
  margin: 0 auto;
  width: 300px;
  position: relative;
  border-bottom: 1px solid #afafaf;
  margin-top: 30px;
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

/* 관심사 선택 */
.incontainer .option_item {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px;
}

.option_item .option_inner {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  padding: 5px 5px;
  color: #3476d8;
  border: 2px solid #f1f7ff;
}

.option_item .checkbox {
  position: absolute;
  top: 5px;
  right: 6px;
  z-index: 1;
  opacity: 0;
}

.option_item .option_inner .name {
  user-select: none;
  font-size: 13px;
}

.option_item .checkbox:checked ~ .option_inner {
  border-color: #3476d8;
  color: #3476d8;
  border: 2px solid;
}

.option_item .option_inner .icon {
  font-size: 30px;
  margin-top: 8px;
}
.option_item .option_inner .mark {
  position: absolute;
  top: -1px;
  left: -1px;
  border: 13px solid;
  border-color: #3476d8 transparent transparent #3476d8;
  border-radius: 5px;
  display: none;
}

.option_item .checkbox:checked ~ .option_inner .mark {
  display: block;
}

.option_item .option_inner .mark:before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 11px;
  height: 7px;
  border: 2px solid;
  border-color: transparent transparent rgb(255, 255, 255) rgb(255, 255, 255);
  transform: rotate(-45deg);
}

.btn_join {
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
  margin-top: 30px;
  margin-left: 10px;
}
</style>
