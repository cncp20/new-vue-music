<template>
  <div class="content">
    <h1>
      <i @click="_back">&lt;</i>
      {{artist.name}}
    </h1>
    <div class="detail">
      <div class="img">
        <img v-lazy="artist.img1v1Url">
      </div>
      <List :list="hotSongs" />
    </div>
  </div>
</template>

<script>
import { getSingerDetail, getSingerSongs } from "./../api/singer";
import { mapGetters } from "vuex";
import List from "./../components/List";
export default {
  data() {
    return {
      artist: {},
      hotSongs: []
    };
  },
  computed: {
    ...mapGetters(["singer"])
  },
  methods: {
    // _getDetail() {
    //     getSingerDetail(this.singer).then(data => {
    //         console.log(data);
    //     });
    // },
    _back() {
      this.$router.back();
    },
    _getSongs() {
      getSingerSongs(this.singer).then(data => {
        console.log(data);
        this.artist = data.artist;
        this.hotSongs = data.hotSongs;
      });
    }
  },
  created() {
    if (!this.singer) {
      this.$router.push("/singer");
      return;
    }
    this._getSongs();
    // this._getDetail();
  },
  mounted() {},
  components: {
    List
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/style/variable.scss";
.content {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  width: 100%;
  height: 100%;
  padding-top: 44px;
  box-sizing: border-box;
  h1 {
    background: $color-theme;
    height: 44px;
    text-align: center;
    color: #fff;
    line-height: 44px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    i {
      position: absolute;
      height: 44px;
      left: 10px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      font-style: normal;
    }
  }
  .detail {
    width: 100%;
    height: 100%;
    .img {
      width: 100%;
      height: 30%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
