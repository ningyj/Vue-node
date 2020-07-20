<template>
  <div class="player">
    
    <!-- <audio src="http://apd-vlive.apdcdn.tc.qq.com/amobile.music.tc.qq.com/C4000013WPvt4fQH2b.m4a?guid=7796043782&vkey=3F005922E7D519E384F934B1D334C05A2D3DC02DE0AF9D087BE111181A0D70B23802AB7CA1F25F5C99D6CA20739D12D572C6DB545FA3FBB4&uin=0&fromtag=38" controls></audio> -->
    <audio :src="`music/song?id=${$route.params.songmid}&type=m4a`" controls autoplay="autoplay"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    
  }
};
</script>

<style scoped>
  audio{
    position: absolute;
    bottom: 20px;
    left :0;
    right: 0;
    margin:0 auto
  }
</style>