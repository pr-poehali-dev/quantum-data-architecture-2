export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black uppercase tracking-widest text-red-600">АЯКС</span>
        <span className="text-xs font-light tracking-[0.3em] uppercase text-foreground/60">на берегу</span>
      </div>
    </div>
  )
}