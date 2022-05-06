<template>

<article class="holder mt80 mt50m hotkeyword">
                <h3 class="subtit">HOT Keyword</h3>
                <div class="lst_keyword tc mt20m">
                    <div class="inner swiper on swiper0 swiper-container-initialized swiper-container-horizontal swiper-container-free-mode">
                        <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                            <li class="swiper-slide swiper-slide-active">
							                                <a href="../search/02905_search_tag.html?find=%ED%94%8C%EB%9E%9C%ED%85%8C%EB%A6%AC%EC%96%B4"><span>#플랜테리어</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EB%B0%98%EB%A0%A4%EC%8B%9D%EB%AC%BC"><span>#반려식물</span></a>
							                                <a href="../search/02905_search_tag.html?find=%ED%99%88%EA%B0%80%EB%93%9C%EB%8B%9D"><span>#홈가드닝</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%8B%9D%EB%AC%BC%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4"><span>#식물인테리어</span></a>
							                                <a href="../search/02905_search_tag.html?find=plant"><span>#plant</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%8B%9D%EB%AC%BC"><span>#식물</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%8B%9D%EB%AC%BC%EC%B9%B4%ED%8E%98"><span>#식물카페</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EA%B3%B5%EA%B8%B0%EC%A0%95%ED%99%94%EC%8B%9D%EB%AC%BC"><span>#공기정화식물</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%8B%B1%EA%B7%B8%EB%9F%B0+%EC%97%AC%ED%96%89"><span>#싱그런 여행</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%8B%9D%EB%AC%BC%ED%82%A4%EC%9A%B0%EA%B8%B0"><span>#식물키우기</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EB%AA%AC%EC%8A%A4%ED%85%8C%EB%9D%BC"><span>#몬스테라</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%88%98%EA%B2%BD%EC%9E%AC%EB%B0%B0"><span>#수경재배</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EC%8B%9D%EB%AC%BC%EC%A7%91%EC%82%AC"><span>#식물집사</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EA%BD%83"><span>#꽃</span></a>
							                                <a href="../search/02905_search_tag.html?find=%ED%99%94%EB%B6%84"><span>#화분</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EA%B3%B5%EA%B8%B0%EC%A0%95%ED%99%94"><span>#공기정화</span></a>
							                                <a href="../search/02905_search_tag.html?find=5%EC%9B%94"><span>#5월</span></a>
							                                <a href="../search/02905_search_tag.html?find=6%EC%9B%94"><span>#6월</span></a>
							                                <a href="../search/02905_search_tag.html?find=%ED%86%A0%EB%B6%84"><span>#토분</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EA%B0%80%EB%93%9C%EB%8B%9D"><span>#가드닝</span></a>
							                                <a href="../search/02905_search_tag.html?find=%ED%96%89%EC%9E%89%ED%94%8C%EB%9E%9C%ED%8A%B8"><span>#행잉플랜트</span></a>
							                                <a href="../search/02905_search_tag.html?find=%EB%B2%A0%EB%9E%80%EB%8B%A4%EC%A0%95%EC%9B%90"><span>#베란다정원</span></a>
							                                <a href="../search/02905_search_tag.html?find=%ED%8A%A4%EB%A6%BD"><span>#튤립</span></a>
							                        
							                            </li>
                        </ul>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </article>
                        
                                                  
                     
</template>

<script>

export default {
    created() {
    var scripts = [
      "@/assets/js/swiper.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
    setup () {
        return {}
    }
}
</script>

<style scoped>

.lst_keyword a:nth-child(7n) span, .lst_keyword a:nth-child(7n+3) span, .lst_keyword a:nth-child(7n+5) span {
    color: #fff;
    background-color: rgba(0,154,62,0.9);
}

.lst_keyword li {
    width: auto;
}

.lst_keyword a span {
    padding: 0 22px;
    line-height: 34px;
    font-size: 14px;
    border-radius: 17px;
}

.lst_keyword a span {
    display: inline-block;
    padding: 0 30px;
    line-height: 48px;
    font-size: 16px;
    color: #3a6b4a;
    background-color: rgba(209,232,218,0.9);
    border-radius: 24px;
}

.swiper-wrapper, .swiper-container-initialized .swiper-wrapper {
    z-index: 1;
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    transition-property: transform;
    box-sizing: content-box;
}

.swiper-slide {
    position: relative;
    height: 100%;
    transition-property: transform;

}


</style>