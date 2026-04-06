export function OfficeSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full" style={{ height: "420px" }}>
        <img
          src="https://cdn.poehali.dev/projects/13a7c226-f884-4205-a218-836b019658c4/bucket/4ef73d12-7abf-4483-a255-670bcc4a2c1c.jpg"
          alt="Наш офис"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap">
          <p className="text-lg font-medium tracking-widest uppercase opacity-90">Наш офис — в сердце Анапы</p>
        </div>
      </div>
    </section>
  )
}
