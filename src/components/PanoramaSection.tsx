import { useState, useEffect } from "react"

const slides = [
  {
    src: "https://cdn.poehali.dev/projects/13a7c226-f884-4205-a218-836b019658c4/bucket/6c02ee2a-c66e-4251-b24f-84273362287d.jpg",
    label: "Анапа — город у моря",
  },
  {
    src: "https://cdn.poehali.dev/projects/13a7c226-f884-4205-a218-836b019658c4/bucket/4ef73d12-7abf-4483-a255-670bcc4a2c1c.jpg",
    label: "Наш офис — в сердце Анапы",
  },
]

export function PanoramaSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full" style={{ height: "420px" }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap">
              <p className="text-lg font-medium tracking-widest uppercase opacity-90">{slide.label}</p>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
        >
          ›
        </button>
      </div>
    </section>
  )
}
