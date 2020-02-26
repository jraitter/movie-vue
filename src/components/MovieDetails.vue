<template>
  <div class="movie-details">
    <div v-if="details.id">
      <div class="card">
        <img
          :src="`https://image.tmdb.org/t/p/w500${details.poster_path}`"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">{{details.title}}</h3>
          <p class="card-text">{{details.overview}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  computed: {
    details() {
      return this.$store.state.activeMovie;
    }
  },
  methods: {}
};
</script>

<style></style>
