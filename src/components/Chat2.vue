<template>
	<div>
		<div class="container">

			<!-- 헤더 -->
			<header>
				<div class="header_left">
					<span class="left_nickname">로그인 닉네임들어갑니다</span>
				</div>
				<div class="header_right">
					<div class="header_imagebox">
						<v-img class="header_image" src="../assets/images/파이리.png" alt="" />
					</div>
					<span class="right_nickname">상대방 닉네임</span>
				</div>
			</header>

			<!-- 메인 -->
			<div class="main">

				<!-- 채팅방리스트 -->
				<aside>
					<div class="list_main" v-for="tmp in 15" :key="tmp">
						<div class="imagebox">
							<v-img class="image" src="../assets/images/디그다.png" alt="" />
						</div>
						<div class="list_chatmessage">
							<div class="list_chatmessage_nickname">
								<span>asdsad</span>
							</div>

							<div class="list_chatmessage_message">
								<span style="overflow:hidden;">asdsadasdsssssssssssssssssssssssssssssssssssssssssssss</span>
							</div>
						</div>
					</div>
				</aside>

				<!-- 채팅부분 -->
				<section>
					<div class="chat_message">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magnam corrupti vel, dolorem amet veritatis aut praesentium accusamus odio eum, sint ipsa inventore distinctio itaque quod voluptatibus, quia atque quas.
					</div>
					<div class="input_message">
						<div class="add_imagebox">
							<v-img class="imagebox_image" src="../assets/images/add.png" />
						</div>
						<input type="text" placeholder="메시지 입력..."/>
						<div class="picture_imagebox" @click="handleImageAction()">
							<v-img class="imagebox_image"  src="../assets/images/picture.png" />
							<input type="file" ref="imageFile" hidden @change="handleImage()" />
						</div>
					</div>
					
					
				</section>


			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
	setup () {
		const imageFile = ref(null);
		const handleImageAction= ()=>{
			imageFile.value.click();
		}

		const handleImage = ()=>{
			alert(1);
		}


		return {
			handleImageAction,
			handleImage,
			imageFile,
			}
	}
}
</script>

<style lang="css" scoped>

/* 컨테이너 */
.container{
	display: flex;
	width: 95%;
	height: 80vh;
	border: 1px solid black;
	flex-direction: column;
	margin: 0 auto;
}


/* 헤더 */
header{
	border-bottom: 1px solid black;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* 헤더 왼쪽 부분 */
header > .header_left{
	width : 30%;
	height: 100%;
	border-right: 1px solid black;
	display: flex;
	align-items: center;
	justify-content: center;
}
header > .header_left > .left_nickname{
	margin: 20px;
}


/* 헤더 오른쪽 부분 */

header > .header_right {
	width: 70%;
	display: flex;
	align-items: center;
	/* justify-content: center; */
}
/* 헤더 오른쪽 부분  이미지*/
header > .header_right > .header_imagebox {
	border : 1px solid rgb(190, 190, 190);
	border-radius: 30px;
	overflow: hidden;
	margin-right: 10px;
	margin-left: 30px;
}

header > .header_right >.header_imagebox > .header_image {
	object-fit:cover;
	width: 30px;
	height: 30px;
}


/* 헤더 아래쪽 */

.main{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	overflow: auto;
}

/* 헤더 아래쪽 왼쪽 */

.main > aside{
	width: 30%;
	height: 100%;
	/* border: 1px solid black; */
	overflow: auto;
}

.main > aside > .list_main {
	
	width: 100%;
	height: 10%;
	/* border-bottom: 1px solid black; */
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	
}

aside > .list_main:hover{
	background-color: rgb(240, 240, 240);
}
aside > .list_main > .imagebox{
	border : 1px solid rgb(190, 190, 190);
	
	border-radius: 30px;
	overflow: hidden;
	
}
aside > .list_main > .imagebox > .image{
	object-fit: cover;
	width:50px;
	height: 50px;
}

/* 개별 리스트 */
aside > .list_main > .list_chatmessage{
	width: 65%;
	height: 90%;
	padding: 10px;
	margin-left: 10px;
	overflow: hidden;
	display: flex;
	flex-direction: column;

}

/* 닉네임 */
aside > .list_main > .list_chatmessage > .list_chatmessage_nickname{
	
	/* height: 20%; */
	font-size: 13px;
	/* margin-bottom: 10px; */
}
/* 메세지 */
aside > .list_main > .list_chatmessage > .list_chatmessage_message{
	color: rgb(141, 141, 141);
	font-size: 13px;
}

/* 채팅부분 */
section{
	width:70%;
	height: 100%;
	padding: 10px;
	position : relative;
	/* overflow: auto; */
}

section > .chat_message{
	height: 90%;
	overflow: auto;
}

section > .input_message{
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 90%;
	height: 5%;
	margin: 0 auto;
	margin-top: 8px;
	border: 1px solid rgb(206, 206, 206);
	border-radius: 30px;
	padding: 18px 0;
}

section > .input_message > .add_imagebox{
	height: 38px;
	width: 38px;
	object-fit: cover;
	overflow: hidden;
	padding: 4px;
	cursor: pointer;
}

section > .input_message > input{
	
	height: 100%;
	width: 80%;
	padding: 18px 15PX 18px 15px;
	overflow: auto;
	font-size: 13px;
	vertical-align: middle;
}

section > .input_message > input:focus{
	outline: none;
}

section > .input_message > .picture_imagebox{
	height: 38px;
	width: 38px;
	object-fit: cover;
	overflow: hidden;
	padding: 4px;
	cursor: pointer;
}

section > .input_message > .add_imagebox > .imagebox_image,
section > .input_message > .picture_imagebox > .imagebox_image{
	width: 100%;
	height: 100%;
	object-fit: cover;
}

</style>