
new Vue({
  el: '#app', 
  data: {
    steps: data,
  },


  mounted() {
    var swiper = new Swiper('.swiper-container', {
      //pagination: '.swiper-pagination',
      slidesPerView: 8,
      paginationClickable: true,
      grabCursor: true,
      paginationClickable: true,
      nextButton: '.next-slide',
      prevButton: '.prev-slide',
      
    });    
  }
})