export default {
  // 五十音（ごじゅうおん）Monographs.
  a: 'あ',
  i: 'い',
  u: 'う',
  e: 'え',
  o: 'お',

  ka: 'か',
  ki: 'き',
  ku: 'く',
  ke: 'け',
  ko: 'こ',

  sa: 'さ',
  si: 'し',
  su: 'す',
  se: 'せ',
  so: 'そ',

  ta: 'た',
  ti: 'ち',
  tu: 'つ',
  te: 'て',
  to: 'と',

  na: 'な',
  ni: 'に',
  nu: 'ぬ',
  ne: 'ね',
  no: 'の',

  ha: 'は',
  hi: 'ひ',
  hu: 'ふ',
  he: 'へ',
  ho: 'ほ',

  ma: 'ま',
  mi: 'み',
  mu: 'む',
  me: 'め',
  mo: 'も',

  ya: 'や',
  yu: 'ゆ',
  yo: 'よ',

  ra: 'ら',
  ri: 'り',
  ru: 'る',
  re: 'れ',
  ro: 'ろ',

  wa: 'わ',
  wo: 'を',
  n: 'ん',

  // 濁点（だくてん）dakuten (diacritics).
  ga: 'が',
  gi: 'ぎ',
  gu: 'ぐ',
  ge: 'げ',
  go: 'ご',

  za: 'ざ',
  zi: 'じ',
  zu: 'ず',
  ze: 'ぜ',
  zo: 'ぞ',

  da: 'だ',
  di: 'ぢ',
  du: 'づ',
  de: 'で',
  do: 'ど',

  ba: 'ば',
  bi: 'び',
  bu: 'ぶ',
  be: 'べ',
  bo: 'ぼ',

  // 半濁点　（はんだくてん）handakuten (diacritics)
  pa: 'ぱ',
  pi: 'ぴ',
  pu: 'ぷ',
  pe: 'ぺ',
  po: 'ぽ',

  // Soma aliases for other common romaji forms.
  // Warning: Some conflicting forms are not being included.
  // i.e. "ji" and "zu"
  shi: 'し',
  chi: 'ち',
  tsu: 'つ',
  fu: 'ふ',
  ji: 'じ',

  // Digraphs.
  // 五十音（ごじゅうおん）
  kya: 'きゃ',
  kyu: 'きゅ',
  kyo: 'きょ',

  // Usually romanised as "sha, shu, sho"
  sya: 'しゃ',
  syu: 'しゅ',
  syo: 'しょ',

  // Usually romanised as "cha, chu, cho"
  tya: 'ちゃ',
  tyu: 'ちゅ',
  tyo: 'ちょ',

  nya: 'にゃ',
  nyu: 'にゅ',
  nyo: 'にょ',

  hya: 'ひゃ',
  hyu: 'ひゅ',
  hyo: 'ひょ',

  mya: 'みゃ',
  myu: 'みゅ',
  myo: 'みょ',

  rya: 'りゃ',
  ryu: 'りゅ',
  ryo: 'りょ',

  // 濁点（だくてん）dakuten (diacritics).
  gya: 'ぎゃ',
  gyu: 'ぎゅ',
  gyo: 'ぎょ',

  // Usually romanised as "ja, ju, jo"
  zya: 'じゃ',
  zyu: 'じゅ',
  zyo: 'じょ',

  // Usually also romanised as "ja, ju, jo"
  dya: 'ちゃ',
  dyu: 'ちゅ',
  dyo: 'ちょ',

  bya: 'びゃ',
  byu: 'びゅ',
  byo: 'びょ',

  // 半濁点　（はんだくてん）handakuten (diacritics)
  pya: 'ぴゃ',
  pyu: 'ぴゅ',
  pyo: 'ぴょ',

  // End Hiragana.
} as const

// TODO: Romaji is not a perfect system.  I've chosen a popular form of romanization based on the
// "approximation" (???) of the sound.  So, there is some ambiguity here.  I need to find a better
// way.  Hopefully, one that's not so far from the sound but also can be "typed" i.e. within an IME
// so it results in the right hiragana.
export const hiraganaToRomaji = new Map<string, string>([
  // 五十音（ごじゅうおん）Monographs.
  ['あ', 'a'],
  ['い', 'i'],
  ['う', 'u'],
  ['え', 'e'],
  ['お', 'o'],

  ['か', 'ka'],
  ['き', 'ki'],
  ['く', 'ku'],
  ['け', 'ke'],
  ['こ', 'ko'],

  ['さ', 'sa'],
  ['し', 'shi'],
  ['す', 'su'],
  ['せ', 'se'],
  ['そ', 'so'],

  ['た', 'ta'],
  ['ち', 'chi'],
  ['つ', 'tsu'],
  ['て', 'te'],
  ['と', 'to'],

  ['な', 'na'],
  ['に', 'ni'],
  ['ぬ', 'nu'],
  ['ね', 'ne'],
  ['の', 'no'],

  ['は', 'ha'],
  ['ひ', 'hi'],
  ['ふ', 'fu'],
  ['へ', 'he'],
  ['ほ', 'ho'],

  ['ま', 'ma'],
  ['み', 'mi'],
  ['む', 'mu'],
  ['め', 'me'],
  ['も', 'mo'],

  ['や', 'ya'],
  ['ゆ', 'yu'],
  ['よ', 'yo'],

  ['ら', 'ra'],
  ['り', 'ri'],
  ['る', 'ru'],
  ['れ', 're'],
  ['ろ', 'ro'],

  ['わ', 'wa'],
  ['を', 'o'],
  ['ん', 'n'],

  // 濁点（だくてん）dakuten (diacritics).
  ['が', 'ga'],
  ['ぎ', 'gi'],
  ['ぐ', 'gu'],
  ['げ', 'ge'],
  ['ご', 'go'],

  ['ざ', 'za'],
  ['じ', 'ji'],
  ['ず', 'zu'],
  ['ぜ', 'ze'],
  ['ぞ', 'zo'],

  ['だ', 'da'],
  ['ぢ', 'ji'], // TODO: how to disambiguate this from previous 'ji'...
  ['づ', 'zu'], // id.
  ['で', 'de'],
  ['ど', 'do'],

  ['ば', 'ba'],
  ['び', 'bi'],
  ['ぶ', 'bu'],
  ['べ', 'be'],
  ['ぼ', 'bo'],

  // 半濁点　（はんだくてん）handakuten (diacritics)
  ['ぱ', 'pa'],
  ['ぴ', 'pi'],
  ['ぷ', 'pu'],
  ['ぺ', 'pe'],
  ['ぽ', 'po'],

  // Digraphs.
  // 五十音（ごじゅうおん）
  ['きゃ', 'kya'],
  ['きゅ', 'kyu'],
  ['きょ', 'kyo'],

  // Usually romanised as "sha, shu, sho"
  ['しゃ', 'sha'],
  ['しゅ', 'shu'],
  ['しょ', 'sho'],

  // Usually romanised as "cha, chu, cho"
  ['ちゃ', 'cha'],
  ['ちゅ', 'chu'],
  ['ちょ', 'cho'],

  ['にゃ', 'nya'],
  ['にゅ', 'nyu'],
  ['にょ', 'nyo'],

  ['ひゃ', 'hya'],
  ['ひゅ', 'hyu'],
  ['ひょ', 'hyo'],

  ['みゃ', 'mya'],
  ['みゅ', 'myu'],
  ['みょ', 'myo'],

  ['りゃ', 'rya'],
  ['りゅ', 'ryu'],
  ['りょ', 'ryo'],

  // 濁点（だくてん）dakuten (diacritics).
  ['ぎゃ', 'gya'],
  ['ぎゅ', 'gyu'],
  ['ぎょ', 'gyo'],

  // Usually romanised as "ja, ju, jo"
  ['じゃ', 'ja'],
  ['じゅ', 'ju'],
  ['じょ', 'jo'],

  // Usually also romanised as "ja, ju, jo"
  ['ちゃ', 'ja'],
  ['ちゅ', 'ju'],
  ['ちょ', 'jo'],

  ['びゃ', 'bya'],
  ['びゅ', 'byu'],
  ['びょ', 'byo'],

  // 半濁点　（はんだくてん）handakuten (diacritics)
  ['ぴゃ', 'pya'],
  ['ぴゅ', 'pyu'],
  ['ぴょ', 'pyo'],

  // End Hiragana.
])
