export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="w-full flex items-center justify-between px-5 py-3 bg-black border-b border-zinc-800">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 text-sm transition font-medium 
            ${activeTab === tab ? "text-white border-b-2 border-green-500" : "text-zinc-500"}
          `}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}
