import CustomDataTable from "@/components/backoffice/CustomDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-light text-light dark:bg-dark dark:text-dark">
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Datatable */}
      <CustomDataTable />
    </div>
  );
}
