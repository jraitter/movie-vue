<template>
  <div class="movie col-6">
    <div class="card">
      <!-- <img
        :src="`https://image.tmdb.org/t/p/w500${movieData.poster_path}`"
        class="card-img-top"
        @click="setActive"
      />-->
      <div class="card-body">
        <h5 class="card-title point" @click="setActive">{{ movieData.original_title }}</h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "movie",
  props: ["movieData", "movieIndex"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieData);
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  cursor: pointer;
  height: 10rem;
  width: auto;
}
.point {
  cursor: pointer;
}
</style>