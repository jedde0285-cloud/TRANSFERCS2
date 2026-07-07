export type Team = {
  rank: number
  name: string
  region: string
  avg: number
  total: string
  roster: { nick: string; price: string }[]
}

export type Player = {
  rank: number
  nick: string
  team: string
  flag: string
  region: string
  rating: number
  age: number
  role: string
  price: string
  dynamics: number
}

const REGIONS = ['EU', 'NA', 'SA', 'AS']
const ROLES = ['IGL', 'AWP', 'Rifler', 'Rifler', 'Support']

const TEAM_NAMES = [
  'FALCONS', 'Team Vitality', 'G2 Esports', 'Natus Vincere', 'FaZe Clan',
  'Team Spirit', 'MOUZ', 'The MongolZ', 'Astralis', 'Aurora',
  'Virtus.pro', 'Complexity', 'Heroic', 'paiN Gaming', 'FURIA',
  'Liquid', 'Cloud9', 'ENCE', 'BIG', 'Eternal Fire',
  'GamerLegion', 'Passion UA', '3DMAX', 'M80', 'BetBoom',
  'Legacy', 'B8', 'fnatic', 'SAW', 'Nemiga',
]

const NICKS = [
  'flameZ', 'ropz', 'm0NESY', 's1mple', 'donk', 'ZywOo', 'NiKo', 'sh1ro',
  'device', 'blameF', 'frozen', 'broky', 'torzsi', 'w0nderful', 'jL',
  'Spinx', 'apEX', 'malbsMd', 'HeavyGod', 'Techno', 'chopper', 'magixx',
  'zont1x', 'karrigan', 'siuhy', 'xertioN', 'Brollan', 'jimpphat', 'Senzu',
  '910', 'bLitz', 'mzinho', 'Jimpo', 'kyousuke', 'yuurih', 'KSCERATO',
  'molodoy', 'FL1T', 'fame', 'Norbert', 'iM', 'nexa', 'huNter', 'Aleksib',
  'iyNDF', 'MAJ3R', 'XANTARES', 'woxic', 'Wicadia', 'saffee',
]

function money(n: number) {
  return `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
}

export const teams: Team[] = TEAM_NAMES.map((name, i) => {
  const base = 4_900_000 - i * 145_000
  const avg = 1980 - i * 3.4
  const roster = Array.from({ length: 5 }).map((_, r) => ({
    nick: NICKS[(i * 5 + r) % NICKS.length],
    price: money(Math.max(180_000, base / 5 - r * 90_000 + 120_000)),
  }))
  return {
    rank: i + 1,
    name,
    region: REGIONS[i % REGIONS.length],
    avg: Math.round(avg * 10) / 10,
    total: money(base),
    roster,
  }
})

export const players: Player[] = NICKS.map((nick, i) => {
  const price = 3_100_000 - i * 55_000
  const dyn = Math.round((Math.sin(i * 1.7) * 12 + (i % 5 === 0 ? -6 : 4)) * 10) / 10
  return {
    rank: i + 1,
    nick,
    team: TEAM_NAMES[i % TEAM_NAMES.length],
    flag: REGIONS[i % REGIONS.length],
    region: REGIONS[i % REGIONS.length],
    rating: Math.round((1.42 - i * 0.008) * 100) / 100,
    age: 18 + (i % 14),
    role: ROLES[i % ROLES.length],
    price: money(Math.max(160_000, price)),
    dynamics: dyn,
  }
})

export type Post = {
  id: number
  author: string
  handle: string
  time: string
  ru: string
  en: string
  likes: number
  reposts: number
  replies: number
}

export const posts: Post[] = [
  {
    id: 1,
    author: 'TransferCS',
    handle: '@transfercs',
    time: '2ч',
    ru: 'flameZ (Team Vitality) вырос в цене на +12.4% за неделю. Рифер снова показывает рейтинг выше 1.20 на LAN. Котировки обновлены.',
    en: 'flameZ (Team Vitality) is up +12.4% this week. The rifler is once again posting a 1.20+ rating on LAN. Valuations updated.',
    likes: 842,
    reposts: 96,
    replies: 34,
  },
  {
    id: 2,
    author: 'TransferCS',
    handle: '@transfercs',
    time: '6ч',
    ru: 'Дефицит топовых AWP-игроков продолжает толкать их стоимость вверх. Средняя цена снайпера топ-10 выросла на 9% с начала сезона.',
    en: 'The shortage of top AWP players keeps pushing their value up. The average price of a top-10 sniper has risen 9% since the season start.',
    likes: 611,
    reposts: 71,
    replies: 22,
  },
  {
    id: 3,
    author: 'TransferCS',
    handle: '@transfercs',
    time: '1д',
    ru: 'FALCONS возглавили топ-30 команд сезона. Общая трансферная стоимость состава — рекорд полугодия.',
    en: 'FALCONS top the season top-30 teams ranking. The roster total transfer value is a record for the half-year.',
    likes: 1203,
    reposts: 188,
    replies: 57,
  },
  {
    id: 4,
    author: 'TransferCS',
    handle: '@transfercs',
    time: '2д',
    ru: 'Молодые EU-риферы — главный драйвер роста рынка. Их котировки прибавили в среднем +18% за первое полугодие 2026.',
    en: 'Young EU riflers are the main market growth driver. Their valuations added an average of +18% in H1 2026.',
    likes: 498,
    reposts: 44,
    replies: 12,
  },
]
