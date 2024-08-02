<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>Visualização de Gráficos</v-card-title>
          <v-card-subtitle>Escolha o dia para filtrar os dados de cada gráfico</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col v-for="(type, index) in chartTypes" :key="index" cols="12" md="6">
                <v-card>
                  <v-card-title>Gráfico de {{ chartTitles[index] }}</v-card-title>
                  <v-card-subtitle>Selecione o dia</v-card-subtitle>
                  <v-card-text>
                    <vue-date-picker
                      v-model="selectedDates[index]"
                      @change="updateChart(index)"
                      :type="'date'"
                      :placeholder="'Selecione o dia'"
                    />
                    <Gráfico :type="type" :filteredData="filteredData[index]" :key="index" />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue';
import { parseISO, startOfDay, endOfDay, isWithinInterval } from 'date-fns';
import VueDatePicker from '@vuepic/vue-datepicker';
import Gráfico from '@/components/Grafico.vue';
import data from '@/db/data.json';

export default {
  components: {
    VueDatePicker,
    Gráfico
  },
  setup() {
    const chartTypes = ref(['bar', 'bubble', 'doughnut', 'pie', 'line', 'polarArea']);
    const selectedDates = ref(new Array(chartTypes.value.length).fill(null));
    const allData = ref(data);

    const filteredData = computed(() => {
      return selectedDates.value.map((date, index) => {
        if (!date) return allData.value;

        const selectedDate = parseISO(date);
        const start = startOfDay(selectedDate);
        const end = endOfDay(selectedDate);

        return allData.value.filter(entry => {
          const entryDate = parseISO(entry.datetime);
          return isWithinInterval(entryDate, { start, end });
        });
      });
    });

    const updateChart = (index) => {
      // Atualiza o gráfico específico
      const graphs = document.querySelectorAll(`.chart-container[data-index="${index}"] canvas`);
      graphs.forEach(canvas => {
        const chart = canvas.chart;
        if (chart) {
          chart.destroy();
          canvas.chart = null; // Limpa a referência para garantir que o gráfico seja recriado
        }
      });
    };

    const chartTitles = computed(() => {
      return chartTypes.value.map(type => {
        switch (type) {
          case 'line': return 'Linha';
          case 'bar': return 'Barra';
          case 'bubble': return 'Bolha';
          case 'doughnut': return 'Rosquinha';
          case 'pie': return 'Pizza';
          case 'polarArea': return 'Área Polar';
          default: return 'Gráfico';
        }
      });
    });

    return {
      chartTypes,
      selectedDates,
      filteredData,
      updateChart,
      chartTitles
    };
  }
};
</script>

<style scoped>
.chart-container {
  margin-bottom: 20px;
}

canvas {
  width: 100%;
  height: 400px;
}
</style>
