<template>
    <div class="singer">
        <ul>
            <li v-for="item in list" :key="item.id" @click="toDetail(item.id)">
                <img v-lazy="item.img1v1Url">
                <p>{{item.name}}</p>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import { getSingers } from "./../api/singer";
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        _getSingers() {
            getSingers().then(data => {
                this.list = data.list.artists;
            });
        },
        toDetail(id) {
            this.$router.push(`/singer/${id}`)
        }
    },
    mounted() {
        this._getSingers();
    }
}
</script>

<style lang="scss" scoped>
.singer {
    ul {
        li {
            display: flex;
            align-items: center;
            padding: 10px 0 10px 20px;
            background: #fff;
            border-bottom: 1px #eee solid;
            img {
                width: 12%;
                height: 8%;
                border-radius: 50%;
                margin-right: 10px;
            }
            p {
                font-size: 12px;
            }
        }
    }
}
</style>

