import React from "react";
import { Link, useLocation } from "react-router";

export default function SidebarButton({ to, icon, title }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="no-underline">
      <div
        className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all duration-200 ${
          isActive
            ? "bg-orange-400 text-white scale-105"
            : "bg-transparent text-orange-300 hover:text-white"
        }`}
      >
        <span className="text-2xl">{icon}</span>
        <p className="mt-1 font-semibold text-sm">{title}</p>
      </div>
    </Link>
  );
}
