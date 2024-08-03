<template>
  <div id="main-banner">
    <v-expand-transition>
      <h1>Soluções tecnológicas baseadas em inteligência artificial</h1>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data: () => ({
    expand: false,
    expand2: false,
  }),
};
</script>

<style scoped>
#main-banner {
  background-image: url("src/assets/usina.jpg");
  background-position: 0 -250px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#main-banner h1 {
  color: #fff;
  text-align: center;
  font-size: 60px;
  padding: 20px 40px;
}
</style>
