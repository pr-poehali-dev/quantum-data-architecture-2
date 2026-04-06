export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black uppercase tracking-widest">АЯКС</span>
        <span className="text-xs text-primary font-light tracking-[0.3em] uppercase">на берегу</span>
      </div>
    </div>
  )
}