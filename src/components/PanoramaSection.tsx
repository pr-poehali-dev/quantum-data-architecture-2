export function PanoramaSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full" style={{ height: "420px" }}>
        <img
          src="https://cdn.poehali.dev/projects/13a7c226-f884-4205-a218-836b019658c4/bucket/6c02ee2a-c66e-4251-b24f-84273362287d.jpg"
          alt="Панорама Анапы"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
          <p className="text-lg font-medium tracking-widest uppercase opacity-90">Анапа — город у моря</p>
        </div>
      </div>
    </section>
  )
}
