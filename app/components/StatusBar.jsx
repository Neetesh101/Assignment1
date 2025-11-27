import React from "react";

export default function StatusBar({ time = "9:41", battery = 80 }) {
  return (
    <div className="flex items-center justify-between px-5 pt-4 pb-2 text-xs text-zinc-300">

      {/* Left: Time */}
      <span className="font-semibold text-base">{time}</span>

      {/* Right: Signals & Battery */}
      <div className="flex items-center gap-1 text-[10px]">

        {/* Signal icons (same style as screenshot) */}
        <span className="mr-1">📶</span>
        <span>📡</span>

        {/* Battery Box */}
        <span className="ml-1 rounded-full bg-zinc-800 px-2 py-[2px] text-[9px] flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          {battery}
        </span>
      </div>
    </div>
  );
}
