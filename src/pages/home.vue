<template>
  <div class="home">
    <div class="wrapper">
      <div class="content">
        <Banner :data="banner" />
        <div class="title">热门歌单推荐</div>
        <Homecell :data="home" /> 
      </div>
    </div>

  </div>
</template>

<script>
import Banner from "../components/banner/banner";
import Homecell from "../components/cell/home-cell";
import BS from "better-scroll";
import { mapState } from "vuex";
import { HOME, BANNER } from "../store/types.js";

export default {
  name: "home",
  props: {},
  data() {
    return{

    }
  },
  components: {
    Banner,
    Homecell
  },
  mounted() {
    // this.$axios({
    //   url: "/list/raking"
    // }).then(res => (this.HomeList = res.data.data.topList));
    // this.$axios({
    //   url: "/list/raking"
    // }).then(res => console.log(res.data));

    // this.$axios({
    //   url:
    //     "/banner?format=json",
    //   params: {}
    // }).then(res => (this.BannerList = res.data.data.slider));

    this.$store.dispatch('home/'+HOME)
    this.$store.dispatch('home/'+BANNER)  

    new BS(".wrapper", {
      click: true
    });
  },
  updated() {},
  methods: {},
  computed: mapState('home',['home','banner'])
};
</script>

<style scoped>
.title {
  width: 375px;
  height: 45px;
  text-align: center;
  line-height: 65px;
  font-size: 18px;
  color: #ffcd32;
}
.wrapper {
  position: fixed;
  top: 88px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
</style>
