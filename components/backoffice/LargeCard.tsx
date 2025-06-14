import React from "react";
import { Layers } from "lucide-react";

interface LargeCardProps {
  className: string;
  data: {
    period: string;
    sales: number;
    color: string;
  };
}

function LargeCard({ data }: LargeCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg p-8 text-white shadow-md ${data.color}`}
    >
      <Layers />
      <h4>{data.period}</h4>

      <h2 className="text-2xl lg:text-3xl">Kes.{data.sales}</h2>
    </div>
  );
}

export default LargeCard;
