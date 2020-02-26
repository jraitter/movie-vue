<template>
  <div class="home container-fluid">
    <div class="row text-center">
      <div class="col">
        <h1>Welcome to Movie Finder</h1>
        <search-movie />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <movies />
      </div>
      <div class="col-12 col-md-6">
        <movie-details />
      </div>
    </div>
  </div>
</template>


<script>
import Movies from "@/components/Movies";
import MovieDetails from "@/components/MovieDetails";
import SearchMovie from "@/components/SearchMovie";

export default {
  name: "Home",
  components: {
    Movies,
    MovieDetails,
    SearchMovie
  }
};
</script>

<style scoped>
</style>