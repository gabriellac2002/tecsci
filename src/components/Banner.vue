<template>
  <div id="main-banner">
    <v-expand-transition>
      <h1>{{ bannerText }}</h1>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    bannerText: {
      type: String,
      default: "Soluções tecnológicas baseadas em inteligência artificial",
    },
  },
};
</script>

<style scoped>
#main-banner {
  background-image: url("/usina.jpg");
  background-position: 0 -250px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#main-banner h1 {
  color: #fff;
  text-align: center;
  font-size: 60px;
  padding: 20px 20px;
}

@media (max-width: 1150px) {
  #main-banner h1 {
    font-size: 30px;
    padding: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  #main-banner {
    height: 50vh; /* Altura menor para telas menores */
    padding: 0 10px; /* Menos padding em telas pequenas */
  }

  #main-banner h1 {
    font-size: 6vw; /* Tamanho da fonte maior para dispositivos menores */
    padding: 15px;
  }
}

@media (max-width: 480px) {
  #main-banner {
    height: 40vh; /* Altura ainda menor para dispositivos muito pequenos */
  }

  #main-banner h1 {
    font-size: 8vw; /* Tamanho da fonte adaptado para telas muito pequenas */
    padding: 10px;
  }
}
</style>
