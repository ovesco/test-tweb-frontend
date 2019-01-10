<template>
    <div>
        <div class="row no-gutters">
            <div class="col-12 col-lg-3" v-for="film in films"
                 :key="film.id">
                <film :film="film" />
            </div>
        </div>
    </div>
</template>

<script>
import Film from './Film.vue';

export default {
    props: ['films'],
    components: {
        Film,
    },
};
</script>
