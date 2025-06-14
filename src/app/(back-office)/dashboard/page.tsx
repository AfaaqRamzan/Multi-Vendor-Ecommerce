import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* LargeCards */}
      <LargeCards />
      {/* SmallCards */}
      <SmallCards />
    </div>
  );
}
