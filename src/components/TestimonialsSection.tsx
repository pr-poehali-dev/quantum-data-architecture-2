import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Искали квартиру у моря больше года, обращались в разные агентства. В «Аякс на берегу» нам за неделю подобрали три отличных варианта. Купили апартаменты с видом на море — счастливы!",
    name: "Елена и Дмитрий",
    role: "Купили апартаменты в Анапе",
  },
  {
    quote:
      "Брали ипотеку на квартиру в новостройке. Менеджер помог подобрать банк с лучшей ставкой, сопроводил все документы — даже не ожидал, что будет так быстро и без нервов. Отличная работа!",
    name: "Сергей",
    role: "Купил квартиру в ЖК «Солнечный»",
  },
  {
    quote:
      "Инвестировал в апартаменты для сдачи в аренду. Ребята честно рассказали про доходность, помогли выбрать объект с хорошей управляющей компанией. Уже первый сезон показал отличный результат.",
    name: "Михаил",
    role: "Инвестор, г. Москва",
  },
  {
    quote:
      "Переехали из Москвы в Анапу — искали дом для постоянного проживания. Очень понравился подход: никакого давления, показали всё что просили, помогли разобраться с документами. Рекомендую!",
    name: "Семья Ковалёвых",
    role: "Купили дом в Анапском районе",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Сотни семей уже нашли свой дом у моря с нашей помощью. Вот что они говорят о работе с «Аякс на берегу».
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}