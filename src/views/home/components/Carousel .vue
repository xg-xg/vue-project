<template>
    <el-carousel :interval="4000" type="card" height="200px" :autoplay="false" trigger="clicl">
        <el-carousel-item v-for="item in list" :key="item">
            <el-image :src="item.imageUrl" fit="contain" style="width:380px;height: 140px;"></el-image>
        </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    name: 'Carousel',
    components: {
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            list: []
        }
    }
}
</script>
