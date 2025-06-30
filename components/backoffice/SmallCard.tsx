import React from "react";

interface SmallCardProps {
  className: string;
  data: {
    title: string;
    numbers: number;
    iconBg: string;
    icon: any;
  };
}

function SmallCard({ data }: SmallCardProps) {
  const { title, numbers, iconBg, icon: Icon } = data;
  return (
    <div className="rounded-lg bg-slate-50 p-4 text-slate-800 shadow-lg dark:bg-slate-700 dark:text-slate-50">
      <div className="flex space-x-4">
        <div
          className={`h-12 w-12 ${iconBg} flex items-center justify-center rounded-full`}
        >
          <Icon className="text-slate-50 dark:text-slate-50" />
        </div>

        <div>
          <p>{title}</p>

          <h3 className="text-2xl font-bold">{numbers}</h3>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
