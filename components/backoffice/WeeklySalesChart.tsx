"use client";
import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//
//     ],
// };

function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.5)",
          },
        ],
      },
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  return (
    <div className="rounded-lg bg-slate-700 p-8">
      <h2 className="mb-4 text-xl font-bold">Weekly Sales Chart</h2>

      {/*    Charts */}
      <div className="p-4">
        {/*Tabs*/}
        <div className="dark:text-grey-400 border-b border-gray-400 text-center text-sm font-medium text-gray-200 dark:border-gray-700">
          <ul className="-mb-px flex flex-wrap">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      chartToDisplay == tab.type
                        ? "active inline-block rounded-t-lg border-b-2 border-orange-600 p-4 text-orange-600 dark:border-orange-500 dark:text-orange-500 dark:hover:text-gray-300"
                        : "inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/*    Content */}
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line key={i} options={options} data={tab.data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default WeeklySalesChart;
