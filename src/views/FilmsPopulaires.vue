<template>
    <div>
        <div class="container">
            <apollo-query :query="require('../graphql/films.js').popular">
                <template slot-scope="{ result: { loading, error, data } }">
                    <div v-if="loading">Chargement</div>
                    <div v-else-if="error">Erreur<br/>{{error}}</div>
                    <div v-else-if="data">
                        <grid :films="data.popularMovies.results" />
                    </div>
                </template>
            </apollo-query>
        </div>
    </div>
</template>

<script>
import Grid from '../components/Grid.vue';

export default {
    components: {
        Grid,
    },
};
</script>

<style scoped lang="scss">
</style>
