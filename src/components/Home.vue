<template>
    <div>
        <vueper-slides>
        <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
        </vueper-slides>
      
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>