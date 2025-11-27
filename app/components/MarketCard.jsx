import FlagPair from "./FlagPair";
import PriceColumn from "./PriceColumn";

export default function MarketCard({
  time,
  pair,
  change,
  changePercent,
  bidValue,
  bidLabel,
  askValue,
  askLabel,
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800">

      {/* LEFT SIDE */}
      <div className="flex items-start gap-3">

        <FlagPair />

        <div className="flex flex-col gap-[2px]">
          <p className="text-[11px] text-zinc-500">{time}</p>

          <p className="text-base text-white font-semibold leading-none">
            {pair}
          </p>

          <p className="text-[11px] font-semibold text-green-500">
            {change} <span className="text-green-600">({changePercent})</span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <PriceColumn value={bidValue} label={bidLabel} color="red" />
        <PriceColumn value={askValue} label={askLabel} color="green" />
      </div>

    </div>
  );
}
