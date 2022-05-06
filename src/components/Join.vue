<template>

 <div class="d-flex justify-start mb-6">
  <div class="helpme">
    <ul class="helpmelist">
        <li>
            <a href="#">
            <div class="profile">
            <div class="profile-item"><v-img src="../assets/images/user.png" /></div>
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
                <div class="location-item"><v-img src="../assets/images/location.png" style="width:22px;height:22px;margin-bottom:8px;"  /></div>
                <div class="address"><p>부산시 부산진구</p></div>
                </div>
            </a>  
        </li>
    </ul>
  </div>
 </div>
                        
                                                  
                     
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

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
    font-size: 17px;
    margin-left: 3px;
}

.profile {
    display:flex;
    align-items:center;
    color: #707070;
    margin-bottom: 5px;
}

.profile-item {
    width:30px;
    height: 30px;
    bottom: 0;
}

.profilebottom {
    display: flex;
    align-items: center;
}

.profilebottom-item {
   color:#707070;
   font-size: 17px;
}

.address{
    color: #707070;
    font-family: "GmarketSansMedium";
    margin-left:8px;
    margin-bottom:5px;
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