<template>
  <div id="app">
      <WordCloudMove :words="words"></WordCloudMove>
  </div>
</template>

<script>
import WordCloudMove from '@/components/WordCloudMove.vue'
export default {
  name: 'App',
  components: {
    WordCloudMove
  },
  data() {
    return {
      words: ['万事如意', '事事如意 ', '万事亨通', '一帆风顺', '万事大吉', '吉祥如意', '步步高升', '步步登高', '三羊开泰', '得心应手', '财源广进', '陶未媲美', '阖家安康', '龙马精神', '锦绣前程', '吉祥如意', '生龙活虎', '神采奕奕', '五谷丰登', '马到成功', '飞黄腾达', ' 步步高升', '福禄寿禧']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
