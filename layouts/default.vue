<template>
    <div>
        <nuxt/>
    </div>
</template>

<script>
import flexible from './flexible'
export default {
    created() {
        if (typeof window !== 'undefined') {
            flexible();
        }
    }
}
</script>

<style lang="stylus">
    @import './style/reset.styl';
    @import './style/variable.styl';
    @import './style/mixin.styl';
    @import './style/global.styl';
</style>
