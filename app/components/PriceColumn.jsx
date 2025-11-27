export default function PriceColumn({ value, label, color }) {
  return (
    <div className="text-right leading-none">
      <p className={`font-semibold ${color === "red" ? "text-red-500" : "text-green-500"}`}>
        {value}
      </p>
      <p className="text-[11px] text-zinc-500">{label}</p>
    </div>
  );
}
