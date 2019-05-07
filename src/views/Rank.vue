<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/top/list?idx=1').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            this.list = data.playlist.tracks;
        })
    }
}
</script>

<style>

</style>
