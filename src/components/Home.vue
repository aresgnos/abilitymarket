<template>
<v-app>
    <v-main>
    <section id = "maincontainer" style="position:relative;">

    <v-row>
          <v-col>
    <article class="mainslide">
    <div class="slide">
        <vueper-slides>
        <vueper-slide v-for="tmp in state.slides" :key="tmp" :image="tmp.image" />
        </vueper-slides>
    </div>
    </article>
    </v-col>
    </v-row>

    <v-row>
          <v-col>
    <article class="category1">
     <div class="bestcategory">
        <h3>베스트&nbsp;카테고리</h3>
        <nav>
        <ul class="category" style="margin-top:10px;">
        <li class="category-item">
            <v-img src="../assets/images/life_icon.png" style="width:75px;" /><p>생활</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/fix_icon.png" style="width:75px;"/><p>조립/수리</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/diy_icon.png" style="width:75px;"/><p>DIY</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/health_icon.png" style="width:75px;" /><p>건강</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/pet_icon.png" style="width:75px;" /><p>애완동물</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/cook_icon.png" style="width:75px;"/><p>요리</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        </ul>
        <ul class="category">
        <li class="category-item">
            <v-img src="../assets/images/study_icon.png" style="width:75px;"/><p>공부</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/it_icon.png" style="width:75px;"/><p>IT</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/business_icon.png" style="width:75px;"/><p>비즈니스</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/hobby_icon.png" style="width:75px;"/><p>취미</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/activity_icon.png" style="width:75px;"/><p>운동</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        <li class="category-item">
            <v-img src="../assets/images/etc_icon.png" style="width:75px;"/><p>기타</p>
            <div class="detail">
            <a href="http://localhost:8080/buy#/buy" class="buy"><span>구매</span></a><span>|</span>
            <a href="http://localhost:8080/buy#/sell" class="sell"><span>판매</span></a>
        </div>
        </li>
        </ul>
        </nav>
    </div>
    </article>
    </v-col>
    </v-row>

    <div class="hr1"></div>

    <v-row>
        <v-col>
   
    <article class="category2">

    <div class="d-flex mb-6" style="margin-top:30px;">
        <div><h3>도와주세요</h3></div>
    </div>
    
    <div class="d-flex justify-space-around mb-6" style="margin-top:-40px;">
    <div class="d-flex flex-row mb-6">
    <div class="helpme" v-for="n in 4" :key="n" >
    <ul class="helpmelist" style="margin-right:10px;margin-left:10px">
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
                <div class="location-item"><v-img src="../assets/images/location.png" style="width:20px;height:20px;margin-bottom:40px;"  /></div>
                <div class="address"><p>부산시 부산진구</p></div>
                </div>
            </a>  
        </li>
    </ul>
  </div>
  </div>
    </div>
  
    <h3>도와줄게요</h3><br />
    <div class="d-flex justify-space-around mb-6" style="margin-top:-40px;">
    <div class="d-flex flex-row mb-6">
    <div class="helpme" v-for="n in 4" :key="n" >
    <ul class="helpmelist" style="margin-right:10px;margin-left:10px">
        <li>
            <a href="#">
            <div class="profile">
            <div class="profile-item"><v-img src="../assets/images/user.png" style="width:25px;height:25px;"/></div>
            <p class="nickname">루피</p>
            </div>
            </a>
            <a href="#" class="imghover">
                <div class="wrphover">
                    <div class="thumbnail"></div>
                    <span class="new">NEW</span>                               
                </div>
                <div class="profilebottom">
                <div class="check"><v-img src="../assets/images/check.png" style="width:30px;height:30px;"/></div>
                <div class="profilebottom-item"><p>가구 수리 조립합니다.</p></div>
                </div>

                <div class="location">
                <div class="location-item"><v-img src="../assets/images/location.png" style="width:20px;height:20px;margin-bottom:40px;"  /></div>
                <div class="address"><p>부산시 연제구</p></div>
                </div>
            </a>  
        </li>
    </ul>
     </div>
    </div>
    </div>
</article>
</v-col>
</v-row>

<div class="hr1"></div>
    
    <v-row>
        <v-col>
    <article class="category4" >
    <h3 style="margin-top:30px;">인기있는 키워드</h3><br />
    <div class="keyword">
        <div class="lst_keyword">
            <ul class="keyword-list">
                    <li><a href="#"><span>#플랜테리어</span></a></li>
                    <li><a href="#"><span>#플랜테리어</span></a></li>
                    <li><a href="#"><span>#플랜테리어</span></a></li>
                    <li><a href="#"><span>#플랜테리어</span></a></li>
                    <li><a href="#"><span>#플랜테리어</span></a></li>
                    <li><a href="#"><span>#플랜테리어</span></a></li>
                    <li><a href="#"><span>#플랜테리어</span></a></li>
            </ul>
        

            <ul class="lst_keyword2-list" style="margin-left:70px;margin-top:20px;">
                <li><a href="#"><span>#플랜테리어</span></a></li>
                <li><a href="#"><span>#플랜테리어</span></a></li>
                <li><a href="#"><span>#플랜테리어</span></a></li>
                <li><a href="#"><span>#플랜테리어</span></a></li>
                <li><a href="#"><span>#플랜테리어</span></a></li>
                <li><a href="#"><span>#플랜테리어</span></a></li>
            </ul>
    </div>
    </div>
        
    </article>
    </v-col>
    </v-row>

    <div class="hr1"></div>
   
    <v-row>
        <v-col>
    <article class="category5">
    <div class="tip" style="margin-top:30px;">
        <h3>능력자의 팁</h3><br />
    </div>
    </article>
    </v-col>
    </v-row>

    <div class="hr1"></div>
    
    <v-row>
        <v-col>
    <article class="category6">
    <div class="story" style="margin-top:30px;">
        <h3>사연</h3><br />
    </div>
    </article>
    </v-col>
    </v-row>

    <div class="hr1"></div>

    <v-row>
        <v-col>
    <article class="category7">
    <h3 style="margin-top:30px;">이달의 랭킹</h3><br />
    <div class="rank">
    <div class="d-flex justify-space-around mb-6" style="margin-top:-40px;margin:0px !important;">
    <div class="d-flex flex-row mb-6" style="gap:10px;">

        <div class="rank-item"  v-for="n in 3" :key="n" >
        <div class="d-flex flex-column mb-6">
            <div class="rank-top">이달의 능력자</div>
            <div class="rank-holder">
                <div class="rank-inner">
                    <span>
                    <v-img src="../assets/images/medal1.png" style="width:35px;height:35px;"></v-img>
                    </span>
                    <span>
                    <v-img src="../assets/images/user.png" style="width:35px;height:35px;"></v-img>
                    </span>
                    <div class="rankname">안녕하세요</div>
                </div>
            </div>

            <div class="rank-other">
            <div class="rank-inner">
                <span>
                    <v-img src="../assets/images/medal2.png" style="width:35px;height:35px;"></v-img>
                </span>
                <span>
                    <v-img src="../assets/images/user.png" style="width:35px;height:35px;"></v-img>
                </span>
                   <div class="rankname">안녕하세요</div>
            </div>
            <div class="rankline"></div>

            <div class="rank-inner">
                <span>
                    <v-img src="../assets/images/medal3.png" style="width:35px;height:35px;"></v-img>
                </span>
                 <span>
                    <v-img src="../assets/images/user.png" style="width:35px;height:35px;"></v-img>
                </span>
                   <div class="rankname">안녕하세요</div>
            </div>
            <div class="rankline"></div>

            <div class="rank-inner">
                <span>
                    <v-img src="../assets/images/medal4.png" style="width:30px;height:30px;"></v-img>
                </span>
                <span>
                    <v-img src="../assets/images/user.png" style="width:35px;height:35px;"></v-img>
                </span>
                   <div class="rankname">안녕하세요</div>
            </div>
            <div class="rankline"></div>

            <div class="rank-inner">
                <span>
                    <v-img src="../assets/images/medal5.png" style="width:30px;height:30px;"></v-img>
                </span>
                <span>
                    <v-img src="../assets/images/user.png" style="width:35px;height:35px;"></v-img>
                </span>
                    <div class="rankname">안녕하세요</div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </article>
    </v-col>
    </v-row>
    <div class="hr1"></div>



</section>
</v-main>
</v-app>
   
</template>

<script>
import { reactive } from 'vue';
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
@import "../assets/css/default.css";
@import "../assets/css/scrolling.css";
@import "../assets/css/keyword.css";
@import "../assets/css/category.css";

@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

ul, li, p { list-style: none; margin: 0; padding: 0;}

h3 {
    font-family: "GmarketSansMedium";
    color :#3476D8;
    width: 100%;
}

.hr1 {
    margin-top: 30px;
    height: 2px;
    background-color: #f2f2f2;
}


/* 도와주세요 */
.helpme li {
    position: relative;
    margin-top: 30px;
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
    margin-bottom:40px;
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


/* 이달의 랭킹 */
.rank-item {
    margin-right: 10px;
    margin-left: 10px;
}

.rank-top {
    width: 340px;
    padding: 12px 0px;
    font-size: 17px;
    color: #ffffff;
    text-align: center;
    background-color: #3476d8;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.rank-holder {
    box-shadow: rgba(8, 8, 8, 0.08) 5px 5px 5px 5px;
    border: 1px solid #3476d8;
    margin-bottom: 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.rank-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 20px 24px 20px 25px;
    gap:10px;
}

.rankline {
    height: 1px;
    width: calc(100% - 48px);
    margin: 0px auto;
    background-color: rgb(217, 229, 252);
}

.rank-other {
    box-shadow: rgba(8, 8, 8, 0.08) 5px 5px 5px 5px;
    border-radius: 8px;

}



</style>