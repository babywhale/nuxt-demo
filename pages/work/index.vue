<template>
    <section class="page-work">
        <NavBar/>
        <div>
            作品
        </div>
        <div>
            <div v-for="item in works">
                {{item.title}}
            </div>
        </div>
        <div @click="loadMore">加载更多</div>
    </section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
    components: {
        NavBar
    },
    data() {
        return {
            works: this.$store.state.works,
            page: 1
        }
    },
    // async fetch ({ store, params }) {
    //     if (!store.state.works) {
    //         await store.dispatch('getWorks', {
    //             page: 1
    //         })
    //     }
    // },
    // created() {
    //     if (typeof window !== 'undefined' && !this.$store.state.works) {
    //         this.$store.dispatch('getWorks', {
    //             page: 1
    //         })
    //         .then(() => {
    //             this.works = this.$store.state.works
    //         })
    //     }
    // },
    mounted() {
        if (!this.$store.state.works) {
            this.$store.dispatch('getWorks', {
                page: 1
            })
            .then(() => {
                this.works = this.$store.state.works
            })
        }
    },
    methods: {
        loadMore() {
            this.page++
            this.$store.dispatch('getWorks', {
                page: this.page
            })
            .then(() => {
                console.log('aaaaaaa')
                this.works = this.$store.state.works
            })
        }
    }
}
</script>

<style scoped lang="stylus">

</style>
