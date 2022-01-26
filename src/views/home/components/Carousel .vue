<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in list" :key="item">
            <img :src="item.imageUrl" alt="">
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
    },
    computed: {
        // swiper () {
        //     return this.$refs.mySwiper.$swiper
        // }
    },
    created() {
        this.fetchData();   
    },
    methods: {
        async fetchData() {
            const res = await this.$axios.get('/banner');
            if(res.code === 200) {
                this.list = res.banners;
            }
            console.log(res);
        },
        pathHandler(item) {
            window.open(item.url, '_blank')
        }
    }
}
</script>
