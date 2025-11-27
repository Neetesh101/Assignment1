import React from "react";

export default function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition ${
        active ? "text-lime-400" : "text-zinc-500"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className={`${active ? "font-semibold" : ""} text-[11px]`}>
        {label}
      </span>
    </button>
  );
}
