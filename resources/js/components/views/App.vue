<template>
    <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "../layouts/Navbar.vue";
    import Sidebar from "../layouts/Sidebar";
    export default {
        name: "App",
        components: {
            Navbar,
            Sidebar,
        }
    }
</script>

<style scoped>

</style>
