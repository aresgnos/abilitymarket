<template>
    <v-row>
        <v-col>
            <div class="joincontainer">
                
                <div class="d-flex flex-column mb-6">
                    <div class="d-flex justify-center mb-6">
                        <div class="logo" style="margin-top: 20px">
                        <v-img src="../assets/images/logo.jpg" style="width: 127px"/>
                        </div>
                    </div>
                </div>
                    
                        <div class="d-flex justify-space-around mb-6">
                            <div class="d-flex flex-column mb-6">
                        
                        <span>아이디</span>
                        <input type="text" placeholder="아이디" />
                     
                      
                        <span>비밀번호</span>
                        <input type="password" placeholder="비밀번호" />
                      
                       
                        <input type="password" placeholder="비밀번호확인" />
                     
                        <span>이름</span>
                        <input type="text" placeholder="이름" />
                      
                        <span>전화번호</span>
                        <input type="number" placeholder="전화번호" />
                

                
                <div class="join">
                  <button class="btn_join">다음으로</button>
                </div>
                </div>
                    
            </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

.joincontainer {
    height: 100vh;
    width: 400px;
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

span {
    color: #3476d8;
}

.joinbox {
    gap:20px;
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
  margin-bottom: 10px;
  cursor: pointer;
}


</style>