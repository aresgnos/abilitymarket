<template>
    <div>
        <div class="jncontainer2">

        <div class="procontainer">
            <div class="profile">
                <v-img src="../assets/images/people.png" style="width:120px;" />
            </div>
        </div>

        <div class="incontainer">
            <label class="option_item">
                <input type="checkbox" class="checkbox">
                <div class="option_inner">
                    <div class="mark"></div>
                    
                        <ion-icon name="home-outline" class="icon"></ion-icon>
                                  
                    <div class="name">생활</div>

                    
                </div>
            </label>
            <label class="option_item">
                <input type="checkbox" class="checkbox">
                <div class="option_inner">
                    <div class="mark"></div>
                    
                      <ion-icon name="construct-outline" class="icon"></ion-icon>
                  
                    <div class="name">조립/수리</div>
                </div>
            </label>
        </div>
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

<style lang="css" scoped>

.jncontainer2 {
    display: flex;
    flex-direction: row;
    top: 10%;
    left: 50%;
}

.procontainer {
    width:30%;
}

.incontainer {
    display: flex;
    flex-wrap: wrap;
    /* background:#e6f0ff; */
    width:30%;
}

.profile {
    padding: 20px 20px;
    width:130px;
    border-radius: 20px;
    border: 3px solid #e6f0ff;
}

.incontainer .option_item {
    display: block;
    position: relative;
    width:80px;
    height:80px;
    margin:10px;
}

.option_item .option_inner {
    display: block;
    position:relative;
    width:100%;
    height: 100%;
    background: #ffffff;
    border-radius:5px;
    text-align: center;
    cursor: pointer;
    padding: 5px 5px;
    color : #3476d8;
    border : 2px solid transparent;
}

.option_item .checkbox {
    position:absolute;
    top:5px;
    right: 6px;
    z-index: 1;
    opacity: 0;
}

/* .option_item .option_inner .icon {
    font-size: 30px;
    padding:0px;
} */

.option_item .option_inner .name {
    user-select: none;
    font-size:13px;
}

.option_item .checkbox:checked ~ .option_inner {
    border-color: #3476d8;
    color: #3476d8;
    border: 2px solid;
}

.option_item .option_inner .icon {
    font-size:30px;
    margin-top:5px;
}
.option_item .option_inner .mark {
    position :absolute;
    top:-1px;
    left:-1px;
    border:13px solid;
    border-color : #3476d8 transparent transparent #3476d8;
    border-radius: 5px;
    display: none;
}

.option_item .checkbox:checked ~ .option_inner .mark{
    display: block;
}

.option_item .option_inner .mark:before {
    content:"";
    position: absolute;
    top:-10px;
    left:-10px;
    width:11px;
    height: 7px;
    border: 2px solid;
    border-color: transparent transparent rgb(255, 255, 255) rgb(255, 255, 255);
    transform: rotate(-45deg);
}





</style>