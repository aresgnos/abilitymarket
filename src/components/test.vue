<template>
    <div>
        <div id="app" class="container">
  <div class="row">
    <div class="col-md-12"> 

      <div class="swiper-container">
        <p class="swiper-control">
          <button type="button" class="btn btn-default btn-sm prev-slide">Prev</button>
          <button type="button" class="btn btn-default btn-sm next-slide">Next</button>
        </p>
        <div class="swiper-wrapper timeline">
            <div class="timestamp">
              <span class="date">April 2017</span>
            </div>
            <div class="status">
              <span>This is Title</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="timestamp">
              <span class="date">May 2017</span>
            </div>
            <div class="status">
              <span>This is Second Title</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="timestamp">
              <span class="date">June 2017</span>
            </div>
            <div class="status">
              <span>This is Third Title</span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="timestamp">
              <span class="date">July 2017</span>
            </div>
            <div class="status">
              <span>This is Fourth Title</span>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {

 components: {
  'remote-js': {
   render(createElement) {
    return createElement(
     'script',
     {
      attrs: {
       type: 'text/javascript',
       src: '     js    ',
      },
     },
    );
   },
  },
 },
}
    
</script>

<style lang="css" scoped>

#app {
  padding: 50px 0;
}
.timeline {
  margin: 50px 0;
  list-style-type: none;
  display: flex;
  padding: 0;
  text-align: center;
}
.timeline li {
  transition: all 200ms ease-in;
}
.timestamp {
  width: 100%; 
  margin-bottom: 20px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100; 
}
.status {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 4px solid #3e70ff;
  position: relative;
  transition: all 200ms ease-in ;
}
  
.status span {
  font-weight: 600;
  padding-top: 20px;
}
.status span:before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: #e8eeff;
  border-radius: 25px;
  border: 4px solid #3e70ff;
  position: absolute;
  top: -15px;
  left: calc(50% - 12px); 
  transition: all 200ms ease-in;
}

.swiper-control {
  text-align: right;
}

.swiper-container {
  width: 100%;
  height: 250px;
  margin: 50px 0;
  overflow: hidden;
  padding: 0 20px 30px 20px;
}
.swiper-slide {
  width: 200px;
  text-align: center;
  font-size: 18px;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}

</style>
