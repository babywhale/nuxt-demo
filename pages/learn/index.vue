<template>
    <section class="page-work">
        <NavBar/>
        <div>
            学习 - {{title}}
        </div>
    </section>
</template>

<script>
import service from '~/service/index'
import NavBar from '~/components/NavBar.vue'

export default {
    async asyncData ({store}) {
        await store.dispatch('getHotPages')
        return { title: store.state.hotpages.blocks[0].title }
    },
    data() {
        return {
            name: 'home'
        }
    },
    components: {
        NavBar
    },
    created() {
        if (!this.$store.state.hotpages) {
            this.$store.dispatch('getHotPages')
        }
        else {
            console.log('hotpages', this.$store.state.hotpages)
        }
    }
}
</script>

<style scoped lang="stylus">

</style>

