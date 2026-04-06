import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Key, FileText, TrendingUp, HeartHandshake } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Квартиры в новостройках",
    description:
      "Большой выбор квартир от застройщиков в новых жилых комплексах Анапы. Помогаем выбрать оптимальный вариант с учётом ваших пожеланий: этаж, планировка, вид на море и бюджет.",
  },
  {
    icon: Building2,
    title: "Апартаменты и таунхаусы",
    description:
      "Апартаменты для жизни и инвестиций у моря. Современные комплексы с развитой инфраструктурой, бассейнами и собственной территорией — идеально для отдыха и сдачи в аренду.",
  },
  {
    icon: Key,
    title: "Вторичная недвижимость",
    description:
      "Готовые квартиры и дома в Анапе и пригороде. Проверенные объекты с прозрачной историей — поможем провести безопасную сделку от просмотра до получения ключей.",
  },
  {
    icon: FileText,
    title: "Ипотека и рассрочка",
    description:
      "Помогаем подобрать выгодную ипотечную программу и оформить все документы. Сотрудничаем с ведущими банками и застройщиками, предлагающими беспроцентную рассрочку.",
  },
  {
    icon: TrendingUp,
    title: "Инвестиции в недвижимость",
    description:
      "Анапа — курортный город с высоким спросом на аренду. Подберём инвестиционный объект с максимальной доходностью и поможем с управлением арендой.",
  },
  {
    icon: HeartHandshake,
    title: "Сопровождение сделки",
    description:
      "Полное юридическое сопровождение от проверки документов до регистрации права собственности. Работаем честно и прозрачно — ваша безопасность для нас на первом месте.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для покупки <span className="text-primary">вашей недвижимости</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От подбора объекта до получения ключей — сопровождаем на каждом этапе и помогаем найти лучшее решение у моря.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}