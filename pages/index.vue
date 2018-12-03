<template>
    <section class="page-home">
        <NavBar/>
        <div>
            首页
        </div>
        <el-carousel class="carousel" height="150px">
            <el-carousel-item v-for="item in rollingList" :key="item.id">
                <img class="cover" :src="item.logourl">
            </el-carousel-item>
        </el-carousel>
        <div class="week-qa">
            <div>
                <span>
                    优动漫每周问答
                </span>
                <span>
                    {{weekqaGroup.title}}
                </span>
                <span>
                    More
                </span>
            </div>
            <div>
                <div v-for="item in weekqaGroup.weekqaItems">
                    <div>
                        <img :src="item.backimageurl">
                        <div>
                            {{item.title1}}
                        </div>
                        <div>
                            {{item.title2}}
                        </div>
                    </div>
                    <div>
                        {{item.desc}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
    data() {
        return {
            rollingList: [],
            weekqaGroup: {}
        }
    },
    components: {
        NavBar
    },
    mounted() {
        // 轮播图
        if (!this.$store.state.rollings) {
            this.$store.dispatch('getRollings')
            .then(() => {
                this.rollingList = this.$store.state.rollings.rollingItems || []
                console.log('new rollings', this.rollingList)
            })
        }
        else {
            this.rollingList = this.$store.state.rollings.rollingItems || []
            console.log('old rollings', this.rollingList)
        }
        this.rollingList.sort((a, b) => a.listorder > b.listorder ? 1 : -1)

        // 每周问答
        if (!this.$store.state.weekqas) {
            this.$store.dispatch('getWeekqas')
            .then(() => {
                let weekqaGroups = this.$store.state.weekqas || []
                console.log('weekqaGroups', weekqaGroups)
                this.weekqaGroup = weekqaGroups[0]
            })
        }
        else {
            this.weekqaGroup = this.$store.state.weekqas[0]
        }
    }
}
</script>

<style lang="stylus">
.page-home
    padding 0 $width-padding-page

    .carousel
        img.cover
            width 100%

        .el-carousel__item:nth-child(2n)
            background-color #99a9bf

        .el-carousel__item:nth-child(2n+1)
            background-color #d3dce6

        .el-carousel__indicators
            left unset
            transform unset
            right px2rem(20)

            .el-carousel__indicator button
                width px2rem(20)

    .week-qa
        img
            width 100%

</style>
