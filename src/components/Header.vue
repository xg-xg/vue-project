<template>
    <!-- 顶部导航 -->
    <div class="d-flex header">
        <div class="w1200 d-flex">
            <el-row class="wrapper d-flex align-center">
                <el-col :span="4">
                    <router-link to="/" class="logo"><img src="../assets/image/logo.jpg" /></router-link>
                </el-col>
                <el-col :span="12" class="d-flex align-center" style="margin-left: 40px;height: 100%">
                    <router-link :to="item.path" :class="{'active': $route.path.includes(item.path)}" v-for="(item, index) in menuList" :key="index" class="nav body-2" style="padding: 23px 0" @click="to(item)">
                        {{ item.name }}
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            menuList: [{
                name: '首页',
                path: '/index'
            }, {
                name: '排行榜',
                path: '/rank'
            }, {
                name: '歌单',
                path: '/songlist'
            }, {
                name: 'MV',
                path: '/mv'
            }, {
                name: '歌手',
                path: '/singer'
            }, {
                name: '我的音乐',
                path: '/mysong'
            }],
        }
    },
    methods: {
        to(item) {
            console.log(item);
        }
    }
}
</script>
<style scoped>
.header {
    padding-top: 10px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgb(52 52 52 / 10%);
}
.active {
    border-bottom: 2px solid #ff641e
}
.nav {
    color: #303133;
    text-decoration: none;
    width: 90px;
}
</style>>