<template>
  <div class="movie-details">
    <div v-if="details.id">
      <div class="card">
        <div class="card-body bg-light">
          <h3 class="card-title">{{details.title}}</h3>
          <p class="card-text">{{details.overview}}</p>
        </div>
        <img
          :src="`https://image.tmdb.org/t/p/w500${details.poster_path}`"
          class="card-img-top"
          alt="..."
        />
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

<style scoped>
.card-size {
  height: auto;
  width: 10rem;
}
</style>
