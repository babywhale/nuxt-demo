<template>
    <div>
        <div class="item" v-for="item in list" :class="{active: $route.path == item.path}">
            <nuxt-link :to="item.path">
                {{item.name}}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '素材',
                    path: '/fodder'
                },
                {
                    name: '学习',
                    path: '/learn'
                },
                {
                    name: '作品',
                    path: '/work'
                },
                {
                    name: '活动',
                    path: '/activity'
                }
            ]
        }
    }
}
</script>

<style lang="stylus">
    .item
        display inline-block
        color $brand-primary

        & + .item
            margin-left px2rem(10)

        &.active
            color red
</style>
