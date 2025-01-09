import { GlobalBox } from "@/app/lib/constants/global-classes";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslations } from "next-intl";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Statistic() {
  const t = useTranslations("admin-dashboard-graphs");
  const dailyData = {
    labels: [
      "12:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
    ],
    datasets: [
      {
        label: "Daily Visitors",
        data: [2000, 3000, 5000, 6614, 4000, 3500, 4500, 5000, 6000],
        fill: true,
        backgroundColor: "rgba(0,123,255,0.2)",
        borderColor: "rgba(0,123,255,1)",
        tension: 0.4,
      },
    ],
  };

  // Monthly Visitors Chart Data
  const monthlyData = {
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
    ],
    datasets: [
      {
        label: "Monthly Visitors",
        data: [
          300000, 200000, 450000, 100000, 250000, 200000, 500000, 600000,
          300000, 400000,
        ],
        backgroundColor: [
          "#4CAF50", // Green
          "#FF6384", // Pink
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#FF6384", // Pink
          "#C9CBCF", // Gray
          "#FFCE56", // Yellow
        ],
      },
    ],
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      {/* Daily Visitors */}
      <div className={`${GlobalBox} p-4`}>
        <h3 className=" text-xl font-medium text-brand-primary mb-3">
          {t("daily-visitor")}
        </h3>
        <Line
          data={dailyData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.formattedValue} Visitors`,
                },
              },
            },
            scales: {
              y: { beginAtZero: true, max: 7000 },
            },
          }}
        />
      </div>

      {/* Monthly Visitors */}
      <div className={`${GlobalBox} p-4`}>
        <h3 className=" text-xl font-medium text-brand-primary mb-3">
          {t("monthly-visitor")}
        </h3>
        <Bar
          data={monthlyData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Statistic;
