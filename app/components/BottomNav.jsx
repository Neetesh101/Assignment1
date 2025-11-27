import React from "react";
import NavItem from "./NavItem";

// Importing icons
import { FiHome, FiBarChart2, FiClock, FiUser } from "react-icons/fi";

export default function BottomNav({ activeTab, onChange }) {
  const navItems = [
    { label: "Home", icon: <FiHome /> },
    { label: "Trade", icon: <FiBarChart2 /> },
    { label: "History", icon: <FiClock /> },
    { label: "Profile", icon: <FiUser /> },
  ];

  return (
    <div className="h-16 bg-zinc-950 border-t border-zinc-800 flex items-center justify-around text-[11px]">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          active={activeTab === item.label}
          onClick={() => onChange(item.label)}
        />
      ))}
    </div>
  );
}
