<template>
  <div class="rank">
    <div class="wrapper">
      <div class="content">
        <Homecell :data="home" />
      </div>
    </div>
  </div>
</template>

<script>
import Homecell from "../components/cell/home-cell";
import BS from "better-scroll";
import { mapState } from "vuex";
import { HOME } from "../store/types.js";
export default {
  name: "rank",
  props: {},
  data() {
    return {
      
    };
  },
  components: {
    Homecell
  },
  mounted() {
    // this.$axios({
    //   url: "/list/raking"
    // }).then(res => (this.HomeList = res.data.data.topList));

    this.$store.dispatch('home/'+HOME,{format:'json'})

    new BS(".wrapper", {
      click: true
    });
  },
  computed:mapState('home',['home']),
  updated() {},
  methods: {}
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 88px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
</style>
