<template>
  <div class="main_container">
    <Banner bannerText="Acompanhe nossos ótimos resultados!" />
    <v-container style="padding: 20px">
      <v-row justify="center">
        <v-col cols="12">
          <v-row>
            <v-col
              v-for="(type, index) in chartTypes"
              :key="index"
              cols="12"
              md="6"
            >
              <v-card class="chart-card">
                <v-card-title>Gráfico de {{ chartTitles[index] }}</v-card-title>
                <v-card-subtitle>Selecione o dia</v-card-subtitle>
                <v-card-text>
                  <vue-date-picker
                    v-model="selectedDates[index]"
                    @change="updateChart(index)"
                    :type="'date'"
                    :placeholder="'Selecione o dia'"
                  />
                  <Gráfico
                    :type="type"
                    :filteredData="filteredData[index]"
                    :key="index"
                  />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { parseISO, startOfDay, endOfDay, isWithinInterval } from "date-fns";
import VueDatePicker from "@vuepic/vue-datepicker";
import Gráfico from "@/components/Grafico.vue";
import data from "@/db/data.json";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    VueDatePicker,
    Gráfico,
    Banner,
  },
  setup() {
    const chartTypes = ref([
      "bar",
      "bubble",
      "doughnut",
      "pie",
      "line",
      "polarArea",
    ]);
    const selectedDates = ref(new Array(chartTypes.value.length).fill(null));
    const allData = ref(data);

    const filteredData = computed(() => {
      return selectedDates.value.map((date, index) => {
        if (!date) return allData.value;

        const selectedDate = parseISO(date);
        const start = startOfDay(selectedDate);
        const end = endOfDay(selectedDate);

        return allData.value.filter((entry) => {
          const entryDate = parseISO(entry.datetime);
          return isWithinInterval(entryDate, { start, end });
        });
      });
    });

    const updateChart = (index) => {
      // Atualiza o gráfico específico
      const graphs = document.querySelectorAll(
        `.chart-container[data-index="${index}"] canvas`,
      );
      graphs.forEach((canvas) => {
        const chart = canvas.chart;
        if (chart) {
          chart.destroy();
          canvas.chart = null;
        }
      });
    };

    const chartTitles = computed(() => {
      return chartTypes.value.map((type) => {
        switch (type) {
          case "line":
            return "Linha";
          case "bar":
            return "Barra";
          case "bubble":
            return "Bolha";
          case "doughnut":
            return "Rosquinha";
          case "pie":
            return "Pizza";
          case "polarArea":
            return "Área Polar";
          default:
            return "Gráfico";
        }
      });
    });

    return {
      chartTypes,
      selectedDates,
      filteredData,
      updateChart,
      chartTitles,
    };
  },
};
</script>

<style scoped>
.main_container {
  background-color: #28397e;
  color: #fff;
}

.intro-title {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.intro-subtitle {
  font-size: 18px;
  font-style: italic;
  color: #fff;
}

.chart-card {
  background-color: #fff;
  color: #000;
  padding: 20px;
}

.v-card-title,
.v-card-subtitle {
  color: #000;
}

.chart-container {
  margin-bottom: 20px;
}

canvas {
  width: 100%;
  height: 400px;
}
</style>
