import React from "react";
import WeeklySalesChart from "@/components/backoffice/WeeklySalesChart";
import BestSellingProductsCharts from "@/components/backoffice/BestSellingProductsCharts";

function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <WeeklySalesChart />
      <BestSellingProductsCharts />
    </div>
  );
}

export default DashboardCharts;
