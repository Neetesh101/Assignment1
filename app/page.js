"use client";

import { useState } from "react";

import StatusBar from "./components/StatusBar";
import TopHeader from "./components/TopHeader";
import Tabs from "./components/Tabs";
import MarketCard from "./components/MarketCard";
import BottomNav from "./components/BottomNav";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Forex");
  const [bottomTab, setBottomTab] = useState("Trade");

  // Example list of market items
  const marketData = [
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      changePercent: "+23.2%",
      bidValue: "1478.256369",
      bidLabel: "L:235698",
      askValue: "1478.256369",
      askLabel: "H:25.3659",
    },
    {
      time: "15:10:00",
      pair: "USD/JPY",
      change: "+12",
      changePercent: "+10.5%",
      bidValue: "125.563211",
      bidLabel: "L:145698",
      askValue: "125.563211",
      askLabel: "H:15.3659",
    },
     {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      changePercent: "+23.2%",
      bidValue: "1478.256369",
      bidLabel: "L:235698",
      askValue: "1478.256369",
      askLabel: "H:25.3659",
    },
    {
      time: "15:10:00",
      pair: "USD/JPY",
      change: "+12",
      changePercent: "+10.5%",
      bidValue: "125.563211",
      bidLabel: "L:145698",
      askValue: "125.563211",
      askLabel: "H:15.3659",
    },
     {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      changePercent: "+23.2%",
      bidValue: "1478.256369",
      bidLabel: "L:235698",
      askValue: "1478.256369",
      askLabel: "H:25.3659",
    },
    {
      time: "15:10:00",
      pair: "USD/JPY",
      change: "+12",
      changePercent: "+10.5%",
      bidValue: "125.563211",
      bidLabel: "L:145698",
      askValue: "125.563211",
      askLabel: "H:15.3659",
    },
    
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex justify-center items-center py-6">

      {/* MOBILE UI CONTAINER */}
      <div className="w-[414px] max-w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">

        {/* TOP STATUS BAR */}
        <StatusBar />

        {/* TOP HEADER */}
        <TopHeader />

        {/* TABS */}
        <Tabs
          tabs={["Favourites", "Forex", "Crypto", "Indices", "Deriv"]}
          activeTab={activeTab}
          onChange={(tab) => setActiveTab(tab)}
        />

        {/* MARKET LIST */}
        <div className="divide-y divide-zinc-800">
          {marketData.map((item, index) => (
            <MarketCard
              key={index}
              time={item.time}
              pair={item.pair}
              change={item.change}
              changePercent={item.changePercent}
              bidValue={item.bidValue}
              bidLabel={item.bidLabel}
              askValue={item.askValue}
              askLabel={item.askLabel}
            />
          ))}
        </div>

        {/* BOTTOM NAV */}
        <BottomNav
          activeTab={bottomTab}
          onChange={(tab) => setBottomTab(tab)}
        />

      </div>
    </div>
  );
}
