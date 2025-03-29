import { Bar } from "react-chartjs-2";
import { BarChartData } from "../components/BarChartData";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register Chart.js components
ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart: React.FC = () => {
  // Define chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        font: {
          size: 16, // Title font size
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for the X-axis
        },
      },
      y: {
        display: false, // Hide the Y-axis
      },
    },
  };

  // Ensure data is correctly structured
  const data: ChartData<"bar"> = {
    labels: BarChartData.labels, // X-axis labels
    datasets: BarChartData.datasets, // Datasets for the chart
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};