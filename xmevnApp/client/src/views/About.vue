<template>
    <div>
        <header-title title="About |MixPersonal" />
        <br />
        <section>
            <div class="container title">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container-fluid">
                        <h5 class="display-4">About page under maintenance</h5>
                        <p class="lead"></p>
                    </div>
                    <hr />
                </div>
            </div>
            <div id="particles-js"></div>
        </section>
    </div>
</template>

<script>
import headerTitle from "../components/header-title.vue";
export default {
    components: { headerTitle },
};
</script>

<style scoped>
.jumbotron {
    color: #57646f;
}
.jumbotron h5 {
    font-size: 2em;
}

#particles-js {
    height: 83vh;
}
@media (max-width: 440px) {
    .jumbotron h5 {
        font-size: 1em;
    }
}
</style>
