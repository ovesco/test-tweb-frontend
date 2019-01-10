<template>
    <div>
        <div class="film m-2" @click="selectThis">
            <div class="selected text-center d-flex align-items-center
            justify-content-center" v-if="selected">
                <i class="fas fa-check text-white"></i>
            </div>
            <img :src="'https://image.tmdb.org/t/p/w500/' + film.poster_path" />
            <div class="metas">
                <h5 class="text-center">{{ film.title }}</h5>
                <div class="d-flex justify-content-between mb-2">
                    <span><i class="fas fa-thumbs-up"></i> {{ film.vote_count }}</span>
                    <span><i class="fas fa-heart"></i> {{ popularity }}</span>
                    <span><i class="fas fa-calendar-alt"></i> {{ film.release_date }}</span>
                </div>
                <div class="d-flex flex-wrap">
                    <span class="genre" v-for="genre in film.genres" :key="genre.name">
                        {{genre.name}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['film'],
    data() {
        return {
            selected: false,
        };
    },
    computed: {
        popularity() {
            return Math.round(this.film.popularity);
        },
    },
    methods: {
        selectThis() {
            this.selected = !this.selected;
            this.$store.commit('toggleFilm', this.film);
        },
    },
};
</script>

<style scoped lang="scss">
    .film {

        cursor:pointer;
        position:relative;

        .selected {
            position:absolute;
            width:calc(100% - 1rem);
            height:calc(100% - 1rem);
            color:white;
            padding:0.5rem;
            background: rgba(13, 18, 79, 0.52);

            i {
                font-size:4rem;
            }
        }

        padding:0.5rem;

        img {
            width:100%;
        }

        .metas {
            background:white;
            padding:1em;

            span {
                font-size:0.8rem;
            }
        }

        .genre {
            background:lightblue;
            font-size:0.8rem;
            margin-right:0.5rem;
            border-radius:4px;
            padding:0.2rem;
            margin-bottom:0.5rem;
        }
    }
</style>
