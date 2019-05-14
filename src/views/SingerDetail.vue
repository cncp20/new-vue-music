<template>
    <div class="detail">
        <img v-lazy="artist.img1v1Url" />
    </div>
</template>

<script>
import { getSingerDetail, getSingerSongs } from "./../api/singer";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            artist: {},
            hotSongs: []
        }
    },
    computed: {
        ...mapGetters([
            'singer'
        ])
    },
    methods: {
        _getDetail() {
            getSingerDetail(this.singer).then(data => {
                console.log(data);
            });
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
        this._getDetail();
    }
}
</script>

<style lang="scss" scoped>
.detail {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #fff;
}
</style>
