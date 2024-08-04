<template>
  <div class="container-banner">
    <Banner
      bannerText="Explore Inovações em Tecnologia com Inteligência Artificial"
    />
    <div class="container">
      <div class="main-content">
        <div style="padding: 20px">
          <h1 class="page-title">Descubra o Futuro da Tecnologia</h1>

          <v-expansion-panels class="expansion-panels" popout>
            <v-expansion-panel
              class="expansion-panel-title"
              title="Quem Somos?"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
            </v-expansion-panel>

            <v-expansion-panel
              class="expansion-panel-title"
              title=" O que fazemos?"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
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
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.main-content {
  max-width: 1200px;
  width: 100%;
  background-color: transparent;
  border-radius: 12px;
}

.page-title {
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
}

.expansion-panels {
  margin: 0;
}

.expansion-panel {
  margin-bottom: 1rem;
}

.expansion-panel-title {
  background-color: #28397e;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}

.expansion-panel-content {
  padding: 1rem;
}
</style>
