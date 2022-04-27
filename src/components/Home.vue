<template>
<div class="container2">

    <div class="slide">
        <vueper-slides>
        <vueper-slide v-for="tmp in state.slides" :key="tmp" :image="tmp.image" />
        </vueper-slides>
    </div>

        <h3>베스트&nbsp;카테고리</h3><br />
        
        <div class="bestcategory">
        <nav>
        <ul class="category">
        <li><a href="#"><img src="../assets/images/fix_icon.png" /><br><span>조립</span></a><br></li>
        <li><a href="#"><img src="../assets/images/business_icon.png" /></a></li>
        <li><a href="#"><img src="../assets/images/health_icon.png" /></a></li>
        <li><a href="#"><img src="../assets/images/it_icon.png" /></a></li>
        <li><a href="#"><img src="../assets/images/study_icon.png" /></a></li>
        </ul>
        </nav>
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

ul, li { list-style: none; margin: 0; padding: 0;}

a {
  text-decoration: none;
  line-height: 100%;
  color: #3476D8;
}

li:hover {
    background-color : #9BC9FF;
}

span {
    margin-left: 25px;
}


img {
    width: 90px;
    height: 90px;
}

h3 {
    font-family: "GmarketSansMedium";
    color :#3476D8;
    width: 100%;
}

.category {
    display: flex;
    justify-content: space-around;
}


</style>