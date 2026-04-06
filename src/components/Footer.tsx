export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">🏖 АЯКС на берегу</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Офис продаж агентства недвижимости «АЯКС» в Анапе.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 АЯКС на берегу. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Объекты
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Краснодарский край, г. Анапа, пр. Революции, 3</p>
              <p>8 906 187 60 57</p>
              <p>anapa@ajax-realty.ru</p>
              <p>Пн–Пт: 9:00 — 18:00, Сб: 10:00 — 16:00, Вс: выходной</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}