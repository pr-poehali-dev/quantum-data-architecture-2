export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-primary">🏖</span>
        <div className="flex flex-col leading-none ml-1">
          <span className="text-lg font-bold tracking-tight">Аякс</span>
          <span className="text-xs text-primary font-semibold tracking-widest uppercase">на берегу</span>
        </div>
      </div>
    </div>
  )
}