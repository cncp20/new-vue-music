<template>
    <div>
        <ul class="list">
            <li v-for="(item, i) in list" :key="item.id">
                <span>{{i + 1}}</span>
                <div>
                    <p class="name">{{item.name}}</p>
                    <p class="art">{{item.ar[0].name}} - {{item.al.name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['list']
}
</script>

<style lang="scss" scoped>
.list {
    li {
        height: 48px;
        display: flex;
        border-bottom: 1px #eee solid;
        span {
            line-height: 48px;
            margin: 0 20px;
            font-size: 14px;
        }
        div {
            box-sizing: border-box;
            .name {
                font-size: 14px;
                margin-top: 8px;
            }
            .art {
                font-size: 10px;
                color: #999;
                margin-top: 8px;
            }
        }
    }
}
</style>
