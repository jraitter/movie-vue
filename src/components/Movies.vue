<template>
  <div class="movies row">
    <!-- NOTE Props are data passed from parent to child component -->
    <movie v-for="(movieObj) in movies" :key="movieObj.id" :movieData="movieObj" />
  </div>
</template>

<script>
import Movie from "./Movie";

export default {
  name: "Movies",
  mounted() {
    //NOTE mounted is fired when the component is 'mounted' to the page
    //NOTE '$' is a reference to the Root instance (main.js)
    this.$store.dispatch("getPopularMovies");
  },
  data() {
    return {};
  },
  //NOTE Computed's are watching the store for changes (observers) and are reactive to change
  //NOTE Computeds can be treated like getters (variable properties) and should always be used when getting data from the state
  computed: {
    //NOTE Computeds must always return a value
    movies() {
      return this.$store.state.movies;
    }
  },
  components: {
    Movie
  }
};
</script>

<style></style>
