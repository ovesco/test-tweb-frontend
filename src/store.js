import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        films: [],
    },
    mutations: {
        toggleFilm(state, film) {
            state.films.push(film);
        },
    },
});
