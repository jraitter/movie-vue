<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Welcome to Movie Viewer</h1>
        <search-movie />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <movies />
      </div>
      <div class="col-6">
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

