
<template>
  <div id="app" class="app">
    <mobile v-if="isMobile"></mobile>
    <index v-else></index>
  </div>
</template>

<script>
  import mixins from "./mixin"
  import Index from './views/Index.vue';
  import Mobile from "./views/Mobile.vue";
  import common from "./common/common"
  import { tvl } from "./common/tvl";
  export default {
    name: "app",
    mixins: [mixins],
    components: {
      Index,
      Mobile
    },
    data() {
      return {
        dataTimer: null,
      }
    },
    mounted() {
      // console.log('env:', process.env.VUE_APP_MODE);
      this.resize()
      window.onresize = () => {
        this.resize()
      }
    },
    methods: {
      resize() {
        if( window.innerWidth < 980 ){
          this.$store.commit('isMobile', true)
        }else{
          this.$store.commit('isMobile', false)
          this.$store.commit('setInnerWidth', window.innerWidth)
        }
      }
    },
    created() {
      common.data_get()
      // tvl()
      if (!this.dataTimer) {
        this.dataTimer = setInterval(() => {
          common.data_get()
        }, 3000);
      }
    }
  }
</script>

<style scoped lang="less">
  @import url("./assets/css/global.less");
</style>