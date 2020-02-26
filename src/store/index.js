import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search",
  timeout: 3000
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie
    }
  },
  actions: {
    //NOTE the first argument of an action is always an object, destructuring allows us to only grab what we need
    async searchMovie({ commit, dispatch }, searchString) {
      try {
        let res = await _api.get(`movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=${searchString}`);
        commit("setMovies", res.data.results);
      } catch (error) {
        console.error(error);
      }
    },
    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie);
    }
  },
  modules: {
  }
})
