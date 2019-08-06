<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '../components/global/navigation.vue';

    export default {
        components: {
            Navigation
        },
        created(){
            this.$store.dispatch( 'loadCafes' );
            this.$store.dispatch( 'loadUser' );
        }
    }
</script>

<style lang="scss" scoped>

</style>