<template>
<div>
    
    <div class="slide">
        <vueper-slides>
        <vueper-slide v-for="tmp in state.slides" :key="tmp" :image="tmp.image" />
        </vueper-slides>
    </div>

    <h3>베스트&nbsp;카테고리</h3>
    
    <div class="bestcategory">
        <nav>
        <ul class="category">
        <li class="category-item"><a href="#"><img src="../assets/images/life_icon.png" /><p>생활</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/fix_icon.png" /><p>조립/수리</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/diy_icon.png" /><p>DIY</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/health_icon.png" /><p>건강</p><p></p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/pet_icon.png" /><p>애완동물</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/cook_icon.png" /><p>요리</p></a></li>
        </ul>
        <ul class="category">
        <li class="category-item"><a href="#"><img src="../assets/images/study_icon.png" /><p>공부</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/it_icon.png" /><p>IT</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/business_icon.png" /><p>비즈니스</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/hobby_icon.png" /><p>취미</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/activity_icon.png" /><p>운동</p></a></li>
        <li class="category-item"><a href="#"><img src="../assets/images/etc_icon.png" /><p>기타</p></a></li>
        </ul>
        </nav>
    </div>

    <div class="hr1"></div>

    <h3>도와주세요</h3><br />

    <div class="help">
       
    </div>
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

li:hover {
    background-color : #9BC9FF;
}


img {
    width: 75px;
    height: 75px;
    margin: 0 auto;
}

h3 {
    font-family: "GmarketSansMedium";
    color :#3476D8;
    width: 100%;
}

.bestcategory {
    margin-top: 30px;
  
}

.help {
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




</style>