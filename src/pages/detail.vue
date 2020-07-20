<template>
  <div class="detail">
    <Nav :title="tit" />
    <div class="wrapper">
      <div class="content">
        <div class="big-img" :style="[{'background-image':`url(${src})`}]">
          <div class="play">随机播放全部</div>
          <div class="filter"></div>
        </div>
        <ListCell :celldata="detail" />
      </div>
    </div>
  </div>
</template>

<script>
import ListCell from "../components/cell/list-cell";
import Nav from "../components/nav/nav";
import BS from "better-scroll";
import { DETAIL } from '../store/types';
import {mapState} from 'vuex'
export default {
  name: "detail",
  data() {
    return {
    };
  },
  created(){

  },
  mounted() {
    // this.$axios({
    //   url: "/listrakingDetail",
    //   params: {
    //     id: this.$route.params._id
    //   }
    // }).then(res => {
    //   let str = res.data.topinfo.pic_album;
    //   let a = /imgcache.qq.com/;
    //   let str1 = str.replace(a, "y.gtimg.cn");
    //   this.tit = res.data.topinfo.ListName;
    //   this.src = str1;
    //   this.list = res.data.songlist;
    // });

    this.$store.dispatch('detail/'+DETAIL, {id: this.$route.params._id})

    new BS(".wrapper", {
      click: true
    });
  },
  components: {
    ListCell,
    Nav
  },
  computed:mapState('detail',['detail','src','tit'])
};
</script>

<style scoped>
.big-img {
  position: relative;
  width: 100%;
  height: 262px;
  background-size: cover;
}
.filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 17, 27, 0.4);
}
.play {
  position: absolute;
  bottom: 20px;
  z-index: 50;
  width: 100%;
  box-sizing: border-box;
  width: 135px;
  padding: 7px 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #ffcd32;
  color: #ffcd32;
  border-radius: 100px;
  font-size: 14px;
}
.wrapper {
  position: fixed;
  top: 40px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
</style>