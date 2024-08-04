<template>
  <div class="container-banner">
    <Banner
      bannerText="Explore Inovações em Tecnologia com Inteligência Artificial"
    />
    <div class="container">
      <div class="main-content">
        <div class="content-wrapper">
          <h1 class="page-title">Descubra o Futuro da Tecnologia</h1>

          <v-expansion-panels>
            <v-expansion-panel
              title="Quem Somos?"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
            </v-expansion-panel>

            <v-expansion-panel
              title="O que fazemos?"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
            </v-expansion-panel>
          </v-expansion-panels>

          <h1 class="clientes-title">Maiores Clientes</h1>

          <div class="chips-container">
            <v-chip
              v-for="cliente in clientes"
              :key="cliente.rank"
              class="chip"
            >
              {{ cliente.nome }}
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "@/components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
  data() {
    return {
      clientes: [],
    };
  },
  mounted() {
    this.fetchClientes();
  },
  methods: {
    async fetchClientes() {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking"
        );
        this.clientes = response.data[0].res;
      } catch (error) {
        console.error("Erro ao buscar dados dos clientes:", error);
      }
    },
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
  padding: 0 20px;
}

.main-content {
  max-width: 1200px;
  width: 100%;
  background-color: transparent;
  border-radius: 12px;
  padding: 20px;
}

.content-wrapper {
  padding: 20px;
}

.page-title {
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
}

.v-expansion-panel {
  margin-bottom: 1rem;
}

.clientes-title {
  margin-top: 30px;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: #fff;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
}

.chip {
  background-color: #3ea7e5;
  color: #fff;
}
</style>
