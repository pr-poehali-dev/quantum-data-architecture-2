import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ЖК Метеора — студия с ремонтом",
    category: "Продажа · Студия · Анапа",
    image: "https://s3-3.topnlab.ru/files-service/storage/6c492f96f37ba8f40cb6ec8d418e/4d5327a02a19bd8d7e8e759d354e6174.png",
    description:
      "Студия с ремонтом в стиле лофт, 24 м², этаж 2/16. Полностью меблирована: кухонный гарнитур, диван, шкаф, техника. Ул. Ленина, 185.",
    url: "https://crm.topnlab.ru/object1775478982258/133094981/Mjg2ODAy",
    tags: ["Студия", "24 м²", "С мебелью", "5 150 000 ₽"],
  },
  {
    title: "Апартаменты «Бухта»",
    category: "Апарт-комплекс · Анапа",
    image: "/placeholder.jpg",
    description:
      "Апартаменты в апарт-комплексе с собственным пляжем. Идеально для инвестиций — управляющая компания обеспечивает загрузку от 80% в сезон.",
    url: "#contact",
    tags: ["Апартаменты", "Инвестиции", "Свой пляж", "от 3,2 млн ₽"],
  },
  {
    title: "Таунхаусы «Виноградная»",
    category: "Таунхаусы · Анапский район",
    image: "/placeholder.jpg",
    description:
      "Двухэтажные таунхаусы с собственным двориком в тихом районе Анапы. 5 минут до моря, развитая инфраструктура, закрытая охраняемая территория.",
    url: "#contact",
    tags: ["Таунхаус", "Свой двор", "Закрытый ЖК", "от 7,8 млн ₽"],
  },
  {
    title: "Квартиры «Парусный»",
    category: "Вторичное жильё · Анапа",
    image: "/placeholder.jpg",
    description:
      "Готовые квартиры в проверенном доме в центре Анапы. Полная юридическая чистота, возможна ипотека и trade-in. Переезд — в течение 30 дней.",
    url: "#contact",
    tags: ["Вторичка", "Центр", "Готово к сделке", "от 5,1 млн ₽"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Актуальные объекты</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Подборка интересных объектов в Анапе — от квартир у моря до инвестиционных апартаментов. Свяжитесь с нами, чтобы узнать детали и записаться на просмотр.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Узнать подробнее <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}