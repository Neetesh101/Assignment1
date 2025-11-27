import React from "react";
import { FiMenu, FiFilter } from "react-icons/fi";

export default function TopHeader({ onMenuClick, onFilterClick }) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      
      {/* Menu Icon */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-full hover:bg-zinc-800 transition"
      >
        <FiMenu size={22} className="text-white" />
      </button>

      {/* Filter Icon */}
      <button
        onClick={onFilterClick}
        className="p-2 rounded-full hover:bg-zinc-800 transition"
      >
        <FiFilter size={22} className="text-white" />
      </button>

    </div>
  );
}
