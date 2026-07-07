'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'ru' | 'en'

type Dict = Record<string, string>

const ru: Dict = {
  // nav
  'nav.eval': 'ОЦЕНКА',
  'nav.teams': 'КОМАНДЫ',
  'nav.players': 'ИГРОКИ',
  'nav.articles': 'СТАТЬИ',
  'nav.about': 'О ПРОЕКТЕ',
  'nav.home': 'ГЛАВНАЯ',

  // hero
  'hero.line1': 'УЗНАЙ',
  'hero.line2': 'РЕАЛЬНУЮ',
  'hero.line3': 'ЦЕНУ ИГРОКА',
  'hero.desc':
    'Мы рассчитываем трансферную стоимость киберспортсменов на основе статистики, формы и рыночных трендов. Оцени любого игрока за секунды.',
  'hero.calc': 'НАЧАТЬ РАСЧЁТ',
  'hero.all': 'ВСЕ ИГРОКИ',
  'hero.stat1': 'ИГРОКОВ',
  'hero.stat2': 'КОМАНД',
  'hero.tech': 'ТЕХНОЛОГИЯ',
  'hero.techSub': 'УНИКАЛЬНАЯ МОДЕЛЬ РАСЧЁТА',
  'hero.season': 'ПРОГРЕСС СЕЗОНА',
  'hero.seasonSub': 'Читать аналитику',

  // top5
  'top5.title': 'ТОП-5 КОМАНД',
  'top5.date': '30.06.2026',

  // player card
  'card.role.rifler': 'RIFLER',

  // footer
  'footer.rights':
    '© 2026 TransferCS. Все права защищены. Все данные являются аналитической оценкой и не являются официальной информацией. Логотипы и изображения принадлежат их правообладателям.',
  'footer.contact': 'Контакты разработчика:',
  'footer.online': 'Активные пользователи:',

  // evaluation
  'eval.title': 'ОЦЕНКА ИГРОКА',
  'eval.subtitle': 'Настрой параметры выдуманного игрока и получи его трансферную цену.',
  'eval.rating': 'Рейтинг HLTV 3.0',
  'eval.age': 'Возраст',
  'eval.role': 'Роль',
  'eval.region': 'Регион',
  'eval.years': 'лет',
  'eval.exp': 'Опыт игрока',
  'eval.maps': 'Сыграно карт',
  'eval.majors': 'Посещено мажоров',
  'eval.trophiesS': 'Трофеи S-Tier',
  'eval.trophiesA': 'Трофеи A-Tier',
  'eval.pop': 'Множитель популярности',
  'eval.popHint':
    '1.00–1.20: Низкая или средняя популярность. 1.21–1.50: Высокая популярность (звезда команды, стабильные фанаты). 1.51–1.75: Суперзвезда (лидер мнений, огромные охваты). 1.76–2.00: Культовая популярность (лицо дисциплины, уровень GOAT).',
  'eval.summary': 'СВОДНАЯ ИНФОРМАЦИЯ',
  'eval.price': 'Полная стоимость',
  'eval.note':
    'Расчётная модель заглушена — логику цены вы подключите позже. Значения справа демонстрируют формат вывода.',

  // teams
  'teams.title': 'ТОП-30 КОМАНД ЗА СЕЗОН',
  'teams.period': '(январь–июнь 2026г.)',
  'teams.active': 'АКТИВЕН',
  'teams.outdated': 'УСТАРЕЛО',
  'teams.region': 'Регион',
  'teams.avg': 'Средний рейтинг',
  'teams.total': 'Общая стоимость',
  'teams.roster': 'Состав',
  'teams.hint': 'Нажмите на команду, чтобы увидеть цену каждого игрока',
  'teams.logo': 'ЛОГО',

  // players
  'players.title': 'ТОП-50 ИГРОКОВ',
  'players.rating': 'Рейтинг',
  'players.age': 'Возраст',
  'players.role': 'Роль',
  'players.dynamics': 'Динамика цены',

  // articles
  'articles.title': 'СТАТЬИ',
  'articles.subtitle': 'Живая лента новостей рынка и цен киберспорта CS2.',

  // about
  'about.title': 'ЧЕМ МЫ ИНТЕРЕСНЫ?',
  'about.subtitle': 'О ПРОЕКТЕ',
  'about.p1title': 'Математика вместо мнений',
  'about.p1':
    'Мы не гадаем, кто «легенда» — мы считаем. Наша формула оценивает текущую форму, а не былые заслуги, поэтому цены всегда честные и актуальные.',
  'about.p2title': 'Видим потенциал первыми',
  'about.p2':
    'Наша аналитика вычисляет «активы» с самым высоким темпом роста. Мы показываем, кто из игроков и тренеров становится дороже прямо сейчас, опираясь на сухие цифры статистики.',
  'about.p3title': 'Живая аналитика в реальном времени',
  'about.p3':
    'Рынок киберспорта меняется каждую неделю. Наша система моментально реагирует на победы, спады и изменения в составе, корректируя стоимость в автоматическом режиме.',

  // season article
  'season.back': 'Назад',
  'season.tag': 'АНАЛИТИКА СЕЗОНА',
  'season.title': 'Прогресс сезона: как рынок CS2 изменился за январь–июнь 2026',
  'season.lead':
    'Первое полугодие 2026 переписало иерархию сцены. Разбираем, чьи котировки взлетели, а кто потерял в цене.',
  'season.body1':
    'За шесть месяцев суммарная капитализация топ-30 команд выросла на 18%. Основной драйвер — молодые риферы из EU-региона, чей рейтинг HLTV 3.0 стабильно держится выше 1.15.',
  'season.body2':
    'Team Vitality укрепила лидерство после победы на весеннем мажоре, а трансферная стоимость их состава впервые пробила отметку в несколько миллионов. Отдельно отметим рост стоимости AWP-игроков — дефицит снайперов топ-уровня толкает цены вверх.',
  'season.body3':
    'Во второй половине сезона ждём коррекцию: часть завышенных котировок вернётся к средним значениям, как только форма игроков стабилизируется. Следите за обновлениями в разделе «Статьи».',
}

const en: Dict = {
  'nav.eval': 'EVALUATION',
  'nav.teams': 'TEAMS',
  'nav.players': 'PLAYERS',
  'nav.articles': 'ARTICLES',
  'nav.about': 'ABOUT',
  'nav.home': 'HOME',

  'hero.line1': 'DISCOVER',
  'hero.line2': 'THE REAL',
  'hero.line3': 'PLAYER PRICE',
  'hero.desc':
    'We calculate the transfer value of esports athletes based on statistics, form and market trends. Evaluate any player in seconds.',
  'hero.calc': 'START CALCULATION',
  'hero.all': 'ALL PLAYERS',
  'hero.stat1': 'PLAYERS',
  'hero.stat2': 'TEAMS',
  'hero.tech': 'TECHNOLOGY',
  'hero.techSub': 'UNIQUE PRICING MODEL',
  'hero.season': 'SEASON PROGRESS',
  'hero.seasonSub': 'Read the analysis',

  'top5.title': 'TOP-5 TEAMS',
  'top5.date': '30.06.2026',

  'card.role.rifler': 'RIFLER',

  'footer.rights':
    '© 2026 TransferCS. All rights reserved. All data is an analytical estimate and is not official information. Logos and images belong to their respective owners.',
  'footer.contact': 'Developer contact:',
  'footer.online': 'Active users:',

  'eval.title': 'PLAYER EVALUATION',
  'eval.subtitle': 'Configure the parameters of a fictional player and get their transfer price.',
  'eval.rating': 'HLTV 3.0 Rating',
  'eval.age': 'Age',
  'eval.role': 'Role',
  'eval.region': 'Region',
  'eval.years': 'y.o.',
  'eval.exp': 'Player experience',
  'eval.maps': 'Maps played',
  'eval.majors': 'Majors attended',
  'eval.trophiesS': 'S-Tier trophies',
  'eval.trophiesA': 'A-Tier trophies',
  'eval.pop': 'Popularity multiplier',
  'eval.popHint':
    '1.00–1.20: Low or medium popularity. 1.21–1.50: High popularity (team star, steady fanbase). 1.51–1.75: Superstar (opinion leader, huge reach). 1.76–2.00: Iconic popularity (face of the discipline, GOAT level).',
  'eval.summary': 'SUMMARY',
  'eval.price': 'Full value',
  'eval.note':
    'The pricing model is stubbed — you will connect the logic later. Values on the right demonstrate the output format.',

  'teams.title': 'TOP-30 TEAMS OF THE SEASON',
  'teams.period': '(January–June 2026)',
  'teams.active': 'ACTIVE',
  'teams.outdated': 'OUTDATED',
  'teams.region': 'Region',
  'teams.avg': 'Average rating',
  'teams.total': 'Total value',
  'teams.roster': 'Roster',
  'teams.hint': 'Click a team to see the price of each player',
  'teams.logo': 'LOGO',

  'players.title': 'TOP-50 PLAYERS',
  'players.rating': 'Rating',
  'players.age': 'Age',
  'players.role': 'Role',
  'players.dynamics': 'Price dynamics',

  'articles.title': 'ARTICLES',
  'articles.subtitle': 'A live feed of CS2 esports market and price news.',

  'about.title': 'WHY WE MATTER',
  'about.subtitle': 'ABOUT THE PROJECT',
  'about.p1title': 'Math instead of opinions',
  'about.p1':
    'We do not guess who the "legend" is — we calculate. Our formula evaluates current form rather than past merits, so prices are always fair and up to date.',
  'about.p2title': 'We spot potential first',
  'about.p2':
    'Our analytics detect the "assets" with the highest growth rate. We show which players and coaches are getting more expensive right now, based on cold hard stats.',
  'about.p3title': 'Live real-time analytics',
  'about.p3':
    'The esports market changes every week. Our system instantly reacts to wins, slumps and roster changes, adjusting value automatically.',

  'season.back': 'Back',
  'season.tag': 'SEASON ANALYSIS',
  'season.title': 'Season progress: how the CS2 market changed in January–June 2026',
  'season.lead':
    'The first half of 2026 rewrote the scene hierarchy. We break down whose value soared and who lost price.',
  'season.body1':
    'Over six months the combined market cap of the top-30 teams grew by 18%. The main driver — young riflers from the EU region whose HLTV 3.0 rating stays consistently above 1.15.',
  'season.body2':
    'Team Vitality solidified their lead after winning the spring major, and their roster transfer value broke the multi-million mark for the first time. We also note the rising value of AWP players — the shortage of top-tier snipers pushes prices up.',
  'season.body3':
    'In the second half of the season we expect a correction: some inflated valuations will return to the average once player form stabilizes. Follow updates in the "Articles" section.',
}

const dicts: Record<Lang, Dict> = { ru, en }

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')
  const t = (key: string) => dicts[lang][key] ?? key
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
