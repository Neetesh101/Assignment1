export default function FlagPair() {
  return (
    <div className="flex items-center relative w-[48px] h-8">
      
      {/* Belgium Flag - FULL VISIBLE */}
      <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-black flex-shrink-0 z-10">
        <img
          src="https://flagcdn.com/w40/be.png"
          alt="Belgium"
          className="w-full h-full object-cover"
        />
      </div>

      {/* USA Flag - HALF OVERLAP */}
      <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-black flex-shrink-0 absolute left-2.5 top-1.5 z-20">
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="USA"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
