<template>
  <div id="app">
    <Header v-show="bNav" />
    <Tab v-show="bTab" />
    <router-view></router-view>
    <Loading v-show='bLoading'/>
  </div>
</template>

<script>
import * as types from "./store/types";
import { mapState } from "vuex";
import Header from "./layouts/header.vue";
import Tab from "./layouts/tab.vue";
import Loading from './components/loading'
export default {
  name: "App",
  components: {
    Header,
    Tab,
    Loading
  },
  methods: {},
  watch: {
    $route: {
      handler(to) {
        let path = to.path;
        if (/home|rank|user/.test(path)) {
          this.$store.commit(types.NAV, true);
          this.$store.commit(types.TAB, true);
        }
        if (/detail/.test(path)) {
          this.$store.commit(types.NAV, false);
          this.$store.commit(types.TAB, false);
        }
      }
    },
    bNav(news,old){
       window.localStorage.setItem('bNav',news)
    },
    bTab(news,old){
       window.localStorage.setItem('bTab',news)
    }

  },
  computed:mapState(['bNav','bTab','bLoading'])
};
</script>

<style>
</style>
