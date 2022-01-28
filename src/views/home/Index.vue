<template>
    <div  class="w1200">
        <!-- <audio controls src="../../assets/audio.mp3"></audio> -->
        <BannerSwiper :data-list="bannerList" image-url="imageUrl" style="margin-top: 20px"></BannerSwiper>
        <HotSongs style="margin: 20px 0"></HotSongs>
    </div>
</template>
<script>
import BannerSwiper from './components/BannerSwiper.vue';
import HotSongs from './components/HotSongs.vue';
export default {
    name: 'Home',
    components: {
        BannerSwiper, // 顶部轮播
        HotSongs // 热门歌单
    },
    data() {
        return {
            bannerList: []
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const res = await this.$axios.get('/banner');
            if(res.code === 200) {
                this.bannerList = res.banners;
            }
        }
    }
}
</script>