import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { QuoteFormDialog } from "@/components/QuoteFormDialog"

const pricingTiers = [
  {
    name: "Квартира",
    price: "от 3,2 млн",
    features: [
      "Студии и 1-комнатные",
      "Новостройки и вторичка",
      "Помощь с ипотекой",
      "Юридическое сопровождение",
      "Осмотр объектов",
    ],
    highlighted: false,
  },
  {
    name: "У моря",
    price: "от 5,5 млн",
    features: [
      "Квартиры с видом на море",
      "Апартаменты у воды",
      "Подбор под инвестиции",
      "Управление арендой",
      "Персональный менеджер",
    ],
    highlighted: true,
  },
  {
    name: "Дом / Таунхаус",
    price: "По запросу",
    features: [
      "Частные дома и коттеджи",
      "Таунхаусы в ЖК",
      "Земельные участки",
      "Trade-in вашего жилья",
      "Полное сопровождение",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Прозрачные цены
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Найдём объект <span className="text-primary">под ваш бюджет</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Квартиры, апартаменты и дома в Анапе — на любой бюджет и задачу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {tier.price === "По запросу" ? (
                      <span className="text-3xl">{tier.price}</span>
                    ) : (
                      <>
                        <span className="text-3xl">{tier.price}</span>
                        <span className="text-lg font-normal text-muted-foreground"> ₽</span>
                      </>
                    )}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <QuoteFormDialog
                  packageName={tier.name}
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                >
                  {tier.price === "По запросу" ? "Получить консультацию" : "Подобрать объект"}
                </QuoteFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Консультация по любому объекту — <span className="text-primary font-semibold">бесплатно</span> и{" "}
            <span className="text-primary font-semibold">без обязательств</span>
          </p>
        </div>
      </div>
    </section>
  )
}