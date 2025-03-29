export const BarChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ], // X-axis labels for all months
  datasets: [
    {
      data: [30, 40, 50, 35, 25, 30, 35, 70, 60, 50, 25, 55], // Y-axis data points for all months
      backgroundColor: "#F2EFFF", // Bar fill color
      borderColor: "#F2EFFF", // Bar border color
      borderWidth: 2, // Bar border width
      borderRadius: 10
    },
  ],
};