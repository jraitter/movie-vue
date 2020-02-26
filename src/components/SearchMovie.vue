<template>
  <div class="search-movie">
    <form @submit.prevent="searchMovie">
      <input type="text" name="movie" placeholder="Search....." v-model="searchString" />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchMovie",
  mounted() {},
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchMovie() {
      this.$store.dispatch("searchMovie", this.searchString);
    }
  }
};
</script>

<style></style>
