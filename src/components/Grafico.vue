<template>
  <v-card class="chart-container" :data-index="chartIndex">
    <v-card-title>Gráfico de {{ chartTitle }}</v-card-title>
    <v-card-subtitle>Visualização dos dados por semana do mês</v-card-subtitle>
    <v-card-text>
      <canvas ref="myChart"></canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref, onMounted, watch, defineComponent } from "vue";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import { parseISO, getYear, getMonth, getWeekOfMonth } from "date-fns";

Chart.register(...registerables);

export default defineComponent({
  name: "Gráfico",
  props: {
    type: {
      type: String,
      required: true,
    },
    filteredData: {
      type: Array,
      default: () => [],
    },
    chartIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const myChart = ref(null);

    const groupDataByWeekOfMonth = (data) => {
      const groupedData = {};

      data.forEach((entry) => {
        const date = parseISO(entry.datetime);
        const year = getYear(date);
        const month = getMonth(date);
        const week = getWeekOfMonth(date);

        const key = `${year}-${month + 1}-Semana${week}`;

        if (!groupedData[key]) {
          groupedData[key] = 0;
        }

        groupedData[key] += 1;
      });

      return groupedData;
    };

    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const createChart = () => {
      const ctx = myChart.value.getContext("2d");
      const groupedData = groupDataByWeekOfMonth(props.filteredData);

      const chartData = {
        labels: Object.keys(groupedData),
        datasets: [
          {
            label: "Quantidade de Dados",
            data: Object.values(groupedData),
            backgroundColor: Object.keys(groupedData).map(() =>
              getRandomColor(),
            ),
            borderColor: Object.keys(groupedData).map(() => getRandomColor()),
            borderWidth: 1,
          },
        ],
      };

      if (myChart.value.chart) {
        myChart.value.chart.destroy();
      }

      myChart.value.chart = new Chart(ctx, {
        type: props.type,
        data: chartData,
        options: {
          scales: {
            x: {
              type: "category",
              time: {
                unit: "week",
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    watch(() => props.filteredData, createChart, { deep: true });

    onMounted(createChart);

    return {
      myChart,
      createChart,
    };
  },
  computed: {
    chartTitle() {
      switch (this.type) {
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
    },
  },
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 400px;
}
</style>
