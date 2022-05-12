<template>
  <div class="daummap">
    <h1>
      우편번호: <span>{{ state.zip }}</span>
    </h1>
    <h1>
      기본주소: <span>{{ state.addr1 }}</span>
    </h1>
    <h1>
      상세주소: <span>{{ state.addr2 }}</span>
    </h1>
    <div ref="embed"></div>
    <button @click="showApi">주소API 호출</button>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';
export default {
  setup() {
		const embed = ref(null);

		const state = reactive({
			zip:'',
			addr1:'',
			addr2:''
		})

		const showApi = async()=>{
			new window.daum.Postcode({
				 oncomplete: async(data) => {
					 	let fullRoadAddr = data.roadAddress;
						let extraRoadAddr = '';
						if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
							extraRoadAddr += data.bname; 
						}
						if(data.buildingName !== '' && data.apartment === 'Y'){
							extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
						}
						if(extraRoadAddr !== ''){ 
							extraRoadAddr = ' (' + extraRoadAddr + ')'; 
						}
						if(fullRoadAddr !== ''){ 
							fullRoadAddr += extraRoadAddr; 
						}
						state.zip = data.zonecode; //5자리 새우편번호 사용 
						state.addr1 = fullRoadAddr;
                        const config = { headers: {Authorization : 'KakaoAK eddc9574385a3fb5f33707a8d3bfcb98'}};
                        const url = 'https://dapi.kakao.com/v2/local/search/address.json?query='+state.addr1;
                        const response = await axios.get(url,config);
                        console.log(response)
                 }
				 }).open();

		}

        // const test= async()=>{
            
        // }

// 출처: https://chlost.tistory.com/53
// https://postcode.map.daum.net/guide
    return {
			state,
			showApi,
			embed,
            // test
			};
  },
};
</script>

<style lang="css" scoped>
</style>
