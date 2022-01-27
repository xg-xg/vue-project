<template>
    <div class="text-center">
        <div class="d-flex align-center w1200 banner_warp">
            <div class="d-flex align-center" :style="{ marginLeft: `${left}px` }" style="transition: all 1s">
                <div v-for="(item, index) in dataList" :key="index"   style="padding: 0 10px; cursor: pointer;" @click="toDetail(item)">
                    <el-image :src="item.imageUrl" :style="{width: imageWidth + 'px', height: imageHeight}" fit="contain"></el-image>
                </div>
            </div>
            
        </div>
        <div v-if="showSwiperCircle" class="d-flex align-center inline-block">
            <div v-for="(item, index) in circleLength" :key="index" :class="{'active' : activeIndex === index}" class="swiper_circle inline-block" @click="jump(index)"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BannerSwuper',
    props: {
        dataList: {
            type: Array,
            default: () => []
        },
        // 渲染的图片的 url字段名 默认为 url
        imageUrl: {
            type: String,
            default: 'url'
        },
        imageWidth: {
            type: String,
            default: '380'
        },
        imageHeight: {
            type: String,
            default: '140'
        },
        showSwiperCircle: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            defautShowLength: 3, // 默认一次性展示的图片数量
            activeIndex: 0
        }
    },
    computed: {
        currentImages() {
            return this.dataList.slice(this.startIndex, this.endIndex)
        },
        circleLength() {
            return Math.ceil(this.dataList.length / this.defautShowLength)
        },
        left() {
            return -(this.activeIndex * 1200);
        }
    },
    methods: {
        jump(index) {
            this.activeIndex = index;
        },
        toDetail(item) {
            window.open(item.url)
        }
    }
}
</script>
<style scoped>
.banner_warp { 
    position: relative;
    overflow: hidden;
} 
.swiper_circle {
    cursor: pointer;
    width: 8px;
    height: 8px;
    background: #000;
    opacity: 0.2;
    border-radius: 50%;
    margin-right: 5px;
}
.active {
    width: 15px;
    height: 8px;
    background: #ff641e;
    border-radius: 8px;
    opacity: 1;
}
</style>