<template>
  <div class="movie-details">
    <h1>MOVIE DETAILS .VUE</h1>
    <div v-if="details._id">{{ details }}</div>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  computed: {
    details() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.details._id);
    }
  }
};
</script>

<style></style>
