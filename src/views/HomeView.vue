<template>
  <div class="container">
    <banner></banner>
    <div class="main-container">
      <h1>Home</h1>

      <v-expansion-panels>
        <v-expansion-panel
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style scoped>
.container {
  background-color: #28397e;
}

.main-container {
  margin: 0;
  padding: 1.5rem;
}
</style>
