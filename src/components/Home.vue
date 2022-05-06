<template>

    <div class="slide">
        <vueper-slides>
        <vueper-slide v-for="tmp in state.slides" :key="tmp" :image="tmp.image" />
        </vueper-slides>
    </div>
    
     <div class="bestcategory">
        <h3>베스트&nbsp;카테고리</h3>
        <nav>
        <ul class="category">
       
        <li class="category-item"><a href="#"><v-img src="../assets/images/life_icon.png" style="width:75px;"></v-img>
        <p>생활</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/fix_icon.png" style="width:75px;"/><p>조립/수리</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/diy_icon.png" style="width:75px;"/><p>DIY</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/health_icon.png" style="width:75px;" /><p>건강</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/pet_icon.png" style="width:75px;" /><p>애완동물</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/cook_icon.png" style="width:75px;"/><p>요리</p></a></li>
        </ul>
        <ul class="category">
        <li class="category-item"><a href="#"><v-img src="../assets/images/study_icon.png" style="width:75px;"/><p>공부</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/it_icon.png" style="width:75px;"/><p>IT</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/business_icon.png" style="width:75px;"/><p>비즈니스</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/hobby_icon.png" style="width:75px;"/><p>취미</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/activity_icon.png" style="width:75px;"/><p>운동</p></a></li>
        <li class="category-item"><a href="#"><v-img src="../assets/images/etc_icon.png" style="width:75px;"/><p>기타</p></a></li>
        </ul>
        </nav>
    </div>

    <div class="hr1"></div>
    <h3 style="margin-top:30px;">도와주세요</h3><br />
    <div class="d-flex justify-space-around mb-6" style="margin-top:-30px;">
    <div class="helpme" v-for="n in 4" :key="n" >
    <ul class="helpmelist">
        <li>
            <a href="#">
            <div class="profile">
            <div class="profile-item"><v-img src="../assets/images/user.png" style="width:25px;height:25px;"/></div>
            <p class="nickname">그린데이즈</p>
            </div>
            </a>
            <a href="#" class="imghover">
                <div class="wrphover">
                    <div class="thumbnail"></div>
                    <span class="new">NEW</span>                               
                </div>
                <div class="profilebottom">
                <div class="check"><v-img src="../assets/images/check.png" style="width:30px;height:30px;"/></div>
                <div class="profilebottom-item"><p>사진 보정하는 능력을 삽니다.</p></div>
                </div>

                <div class="location">
                <div class="location-item"><v-img src="../assets/images/location.png" style="width:20px;height:20px;margin-bottom:32px;"  /></div>
                <div class="address"><p>부산시 부산진구</p></div>
                </div>
            </a>  
        </li>
    </ul>
  </div>
    </div>
        <h3>도와줄게요</h3><br />
        <div class="d-flex justify-space-around mb-6" style="margin-top:-30px;">
    <div class="helpme" v-for="n in 4" :key="n" >
    <ul class="helpmelist">
        <li>
            <a href="#">
            <div class="profile">
            <div class="profile-item"><v-img src="../assets/images/user.png" style="width:25px;height:25px;"/></div>
            <p class="nickname">그린데이즈</p>
            </div>
            </a>
            <a href="#" class="imghover">
                <div class="wrphover">
                    <div class="thumbnail"></div>
                    <span class="new">NEW</span>                               
                </div>
                <div class="profilebottom">
                <div class="check"><v-img src="../assets/images/check.png" style="width:30px;height:30px;"/></div>
                <div class="profilebottom-item"><p>사진 보정하는 능력을 삽니다.</p></div>
                </div>

                <div class="location">
                <div class="location-item"><v-img src="../assets/images/location.png" style="width:20px;height:20px;margin-bottom:32px;"  /></div>
                <div class="address"><p>부산시 부산진구</p></div>
                </div>
            </a>  
        </li>
    </ul>
  </div>
    </div>
       
    
    <div class="hr1"></div>
    <div class="keyword" style="margin-top:30px;">
        <h3>인기키워드</h3><br />
       
    </div>

    <div class="hr1"></div>
    <div class="keyword" style="margin-top:30px;">
        <h3>능력자의 팁</h3><br />
       
    </div>

    <div class="hr1"></div>
    <div class="keyword" style="margin-top:30px;">
        <h3>사연</h3><br />
       
    </div>

    <div class="hr1"></div>
    <div class="story" style="margin-top:30px;">
        <h3>이달의 랭킹</h3><br />
       
    </div>
   
</template>

<script>
import { reactive } from '@vue/reactivity'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    
    setup () {

        const state = reactive({
             slides : [
                 { image:require('../assets/images/slide1.jpg')},
        ],
        })
        

        return {state}
    }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

ul, li, p { list-style: none; margin: 0; padding: 0;}

a {
  text-decoration: none;
  line-height: 100%;
  color: #3476D8;
}

/* li:hover {
    background-color : #9BC9FF;
} */


h3 {
    font-family: "GmarketSansMedium";
    color :#3476D8;
    width: 100%;
}

.bestcategory {
    margin-top: 30px;
  
}

.category {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.category > li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 17px;
    width: 130px;
    height: 130px;
}

.hr1 {
    margin-top: 50px;
    height: 2px;
    background-color: #f2f2f2;
}

.category-item > a > p {
    text-align: center;
    margin-top :10px;
}


.helpme li {
    float: left;
    position: relative;
    margin-top: 30px;
    margin-right: 20px;
}

.location {
    display: flex;
    align-items: center;
}

.wrphover {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}

.helpme .new {
    top: 0;
    border-bottom-right-radius: 4px;
    padding-right: 8px;
    padding-left: 8px;
    line-height: 20px;
    font-size: 12px;
    background-color: #3476D8;
    color: #ffffff;
    z-index: 100;
    position: absolute;
}

.nickname {
    font-size: 16px;
    margin-left: 3px;
}

.profile {
    display:flex;
    align-items:center;
    color: #707070;
    
}

.profile-item {
    width:30px;
    height: 30px;
    bottom: 0;
}

.profilebottom {
    display: flex;
    align-items: center;
    margin-top:2px;
}

.profilebottom-item {
   color:#707070;
   font-size: 16px;
}

.address{
    color: #707070;
    font-family: "GmarketSansLight";
    margin-left:10px;
    margin-bottom:30px;
    font-size: 15px;
}

.thumbnail {
    width:250px;
    height: 180px;
    background-color: #c7deff;
    /* background-position: center center; */
    /* background-size: cover; */
    position: relative;
    border-radius: 5px;
    overflow: hidden;
}

.notM .wrphover .thumbs, .notM .wrphover .wrpimg, .notM .wrphover > img {
    transition: transform .4s ease-in-out;
}



</style>