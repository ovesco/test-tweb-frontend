<template>
    <div>
        <div class="container">
            Pagination
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" v-for="i in pages" :key="i"
                        @click="setPage(i)"
                        v-bind:class="{active: page === i}">
                        <a class="page-link" href="#">{{ i }}</a>
                    </li>
                </ul>
            </nav>
            <grid :films="films" />
        </div>
    </div>
</template>

<script>
import Grid from '../components/Grid.vue';
import { upcoming } from '../graphql/films';

export default {
    mounted() {
        this.setPage(1);
    },
    data() {
        return {
            pages: 0,
            page: 0,
            films: [],
        };
    },
    components: {
        Grid,
    },
    methods: {
        setPage(page) {
            console.log(page);
            this.$apollo.query({
                query: upcoming,
                variables: { page: 1 },
            }).then((res) => {
                // eslint-disable-next-line
                const { total_pages, results } = res.data.upcomingMovies;
                const genres = this.genres();
                this.page = page;
                // eslint-disable-next-line
                this.pages = total_pages;
                this.films.splice(0);
                const selected = [];
                results.forEach((r) => {
                    if (genres.length === 0) this.films.push(r);
                    else {
                        let i = false;
                        r.genres.forEach((g) => {
                            if (!i && genres.includes(g.name)) {
                                selected.push(r);
                                i = true;
                            }
                        });
                    }
                });
                selected.forEach((f) => {
                    this.films.push(f);
                });
            });
        },
        genres() {
            const selected = this.$store.state.films;
            const genres = [];
            selected.forEach((f) => {
                f.genres.forEach((g) => {
                    if (!genres.includes(g.name)) genres.push(g.name);
                });
            });
            return genres;
        },
    },
};
</script>
