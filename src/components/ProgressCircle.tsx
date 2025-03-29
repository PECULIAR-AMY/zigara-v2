import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define component props
interface ProgressCircleProps {
  percentage: number; // Value between 0 and 100
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage }) => {
  const data = {
    labels: ["Active", "Remaining"],
    datasets: [
      {
        data: [percentage, 100 - percentage], // Dynamic progress
        backgroundColor: ["#4CAF50", "#E0E0E0"], // Colors for progress and remaining
        borderWidth: 0, // No borders for a smooth look
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // Creates a ring effect (adjustable)
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <div className="flex items-center gap-4">
      {/* Progress Circle */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Render the Doughnut Chart */}
        <Doughnut data={data} options={options} />
        
        {/* Display the percentage in the center */}
        <div className="absolute text-xl font-bold">
          {percentage}%
        </div>
      </div>

      {/* "Active Riders" Text */}
      <div className="text-lg font-medium text-gray-700">
        Active Riders
      </div>
    </div>
  );
};

export default ProgressCircle;