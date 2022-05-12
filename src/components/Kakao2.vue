<template>
  <section class="test">
    <div @click="kakaoLoginBtn">카카오 연동</div>
  </section>
</template>

<script>
export default {
    setup () {
        const kakaoLoginBtn = ()=>{
           window.Kakao.init('0eb4283842adc8eae97cfa6e89a19036');
           if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.API.request({
              url: '/v1/user/unlink',
              success: function (response) {
                console.log(response)
              },
              fail: function (error) {
                console.log(error)
              },
            })
            window.Kakao.Auth.setAccessToken(undefined)
          }
          window.Kakao.Auth.login({
            success: function () {
              window.Kakao.API.request({
                url: '/v2/user/me',
                data: {
                  property_keys: ["kakao_account.email"]
                },
                success: async function (response) {
                  console.log(response);
                },
                fail: function (error) {
                  console.log(error)
                },
              })
            },
            fail: function (error) {
              console.log(error)
            },
          })
        }

        return {
          kakaoLoginBtn
        }
    }
}
</script>

<style lang="css" scoped>
.test{ 
  display:flex;
  justify-content: center; 
  align-items: center; 
  height:100vh; 
}
div{ 
  width: 200px; 
  height:40px; 
  background-color:#fdd101; 
  color:white; display:flex; 
  align-items: center; 
  justify-content: center; 
  cursor:pointer; 
}
</style>




