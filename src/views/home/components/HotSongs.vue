<template>
<!-- 热门歌单 -->
    <div>
        <div style="font-size: 28px;font-weight: bold;">热门歌单</div>
        <div class="d-flex align-center inline-block">
            <div 
                v-for="(item, index) in tabs" :key="index" 
                class="inline-block" 
                style="cursor: pointer;margin: 10px;font-size: 16px"
                @click="chooseTab(item)"
            >
                {{ item.name}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HotSongs',
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.fetchTypes();
    },
    methods: {
        chooseTab(item) {
            console.log(item)
        },
        async fetchTypes() {
            // 取前5个
            const res = await this.$axios.get('/playlist/hot');
            if(res.code === 200) {
                this.tabs = res.tags.slice(0,5);
            }
            console.log(res);
        }
    }
}
</script>