import React from "react";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="flex items-center w-full mt-4">
      <img src={image} alt={title} className="h-12 w-12 rounded-lg mr-3" />
      <div className="flex flex-col justify-center">
        <p className="text-base font-bold text-[#c9d0e3]">{title}</p>
        <p className="text-xs font-normal text-[#c4d0e3b3]">{subtitle}</p>
      </div>
    </div>
  );
}
