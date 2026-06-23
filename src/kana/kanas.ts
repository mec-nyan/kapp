import type { kanaKind } from '../types/kana'
import hiragana from './hiragana'
import katakana from './katakana'

// Some type aliases for clarity.
type Hiragana = string
type Katakana = string
type Romaji = string

interface Kana {
  rmj: Romaji
  alt: Romaji | null
  hg: Hiragana
  kk: Katakana
}

type KanaRow = Array<Kana | null>

interface KanaGroup {
  Monographs: KanaRow
  Digraphs: KanaRow | null
}

interface KanaSet {
  Basic: KanaGroup
  Dakuten: KanaGroup | null
  Handakuten: KanaGroup | null
}

const KanaRows = new Map<string, KanaRow>([
  // 五十音（ごじゅうおん）Monographs.
  [
    'a',
    [
      {
        rmj: 'a',
        alt: '',
        hg: hiragana.a,
        kk: katakana.a,
      },
      {
        rmj: 'i',
        alt: '',
        hg: hiragana.i,
        kk: katakana.i,
      },
      {
        rmj: 'u',
        alt: '',
        hg: hiragana.u,
        kk: katakana.u,
      },
      {
        rmj: 'e',
        alt: '',
        hg: hiragana.e,
        kk: katakana.e,
      },
      {
        rmj: 'o',
        alt: '',
        hg: hiragana.o,
        kk: katakana.o,
      },
    ],
  ],

  [
    'ka',
    [
      {
        rmj: 'ka',
        alt: '',
        hg: hiragana.ka,
        kk: katakana.ka,
      },
      {
        rmj: 'ki',
        alt: '',
        hg: hiragana.ki,
        kk: katakana.ki,
      },
      {
        rmj: 'ku',
        alt: '',
        hg: hiragana.ku,
        kk: katakana.ku,
      },
      {
        rmj: 'ke',
        alt: '',
        hg: hiragana.ke,
        kk: katakana.ke,
      },
      {
        rmj: 'ko',
        alt: '',
        hg: hiragana.ko,
        kk: katakana.ko,
      },
    ],
  ],

  [
    'sa',
    [
      {
        rmj: 'sa',
        alt: '',
        hg: hiragana.sa,
        kk: katakana.sa,
      },
      {
        rmj: 'si',
        alt: 'shi',
        hg: hiragana.si,
        kk: katakana.si,
      },
      {
        rmj: 'su',
        alt: '',
        hg: hiragana.su,
        kk: katakana.su,
      },
      {
        rmj: 'se',
        alt: '',
        hg: hiragana.se,
        kk: katakana.se,
      },
      {
        rmj: 'so',
        alt: '',
        hg: hiragana.so,
        kk: katakana.so,
      },
    ],
  ],

  [
    'ta',
    [
      {
        rmj: 'ta',
        alt: '',
        hg: hiragana.ta,
        kk: katakana.ta,
      },
      {
        rmj: 'ti',
        alt: 'chi',
        hg: hiragana.ti,
        kk: katakana.ti,
      },
      {
        rmj: 'tu',
        alt: 'tsu',
        hg: hiragana.tu,
        kk: katakana.tu,
      },
      {
        rmj: 'te',
        alt: '',
        hg: hiragana.te,
        kk: katakana.te,
      },
      {
        rmj: 'to',
        alt: '',
        hg: hiragana.to,
        kk: katakana.to,
      },
    ],
  ],

  [
    'na',
    [
      {
        rmj: 'na',
        alt: '',
        hg: hiragana.na,
        kk: katakana.na,
      },
      {
        rmj: 'ni',
        alt: '',
        hg: hiragana.ni,
        kk: katakana.ni,
      },
      {
        rmj: 'nu',
        alt: '',
        hg: hiragana.nu,
        kk: katakana.nu,
      },
      {
        rmj: 'ne',
        alt: '',
        hg: hiragana.ne,
        kk: katakana.ne,
      },
      {
        rmj: 'no',
        alt: '',
        hg: hiragana.no,
        kk: katakana.no,
      },
    ],
  ],

  [
    'ha',
    [
      {
        rmj: 'ha',
        alt: '',
        hg: hiragana.ha,
        kk: katakana.ha,
      },
      {
        rmj: 'hi',
        alt: '',
        hg: hiragana.hi,
        kk: katakana.hi,
      },
      {
        rmj: 'hu',
        alt: 'fu',
        hg: hiragana.hu,
        kk: katakana.hu,
      },
      {
        rmj: 'he',
        alt: '',
        hg: hiragana.he,
        kk: katakana.he,
      },
      {
        rmj: 'ho',
        alt: '',
        hg: hiragana.ho,
        kk: katakana.ho,
      },
    ],
  ],

  [
    'ma',
    [
      {
        rmj: 'ma',
        alt: '',
        hg: hiragana.ma,
        kk: katakana.ma,
      },
      {
        rmj: 'mi',
        alt: '',
        hg: hiragana.mi,
        kk: katakana.mi,
      },
      {
        rmj: 'mu',
        alt: '',
        hg: hiragana.mu,
        kk: katakana.mu,
      },
      {
        rmj: 'me',
        alt: '',
        hg: hiragana.me,
        kk: katakana.me,
      },
      {
        rmj: 'mo',
        alt: '',
        hg: hiragana.mo,
        kk: katakana.mo,
      },
    ],
  ],

  [
    'ya',
    [
      {
        rmj: 'ya',
        alt: '',
        hg: hiragana.ya,
        kk: katakana.ya,
      },
      null,
      {
        rmj: 'yu',
        alt: '',
        hg: hiragana.yu,
        kk: katakana.yu,
      },
      null,
      {
        rmj: 'yo',
        alt: '',
        hg: hiragana.yo,
        kk: katakana.yo,
      },
    ],
  ],

  [
    'ra',
    [
      {
        rmj: 'ra',
        alt: '',
        hg: hiragana.ra,
        kk: katakana.ra,
      },
      {
        rmj: 'ri',
        alt: '',
        hg: hiragana.ri,
        kk: katakana.ri,
      },
      {
        rmj: 'ru',
        alt: '',
        hg: hiragana.ru,
        kk: katakana.ru,
      },
      {
        rmj: 're',
        alt: '',
        hg: hiragana.re,
        kk: katakana.re,
      },
      {
        rmj: 'ro',
        alt: '',
        hg: hiragana.ro,
        kk: katakana.ro,
      },
    ],
  ],

  [
    'wa',
    [
      {
        rmj: 'wa',
        alt: '',
        hg: hiragana.wa,
        kk: katakana.wa,
      },
      null,
      // NOTE: I've placed the 'ん' sound inside the 'wa' group for now.
      // I think that maybe it should be on its own group (even if it is only one sound).
      // Besides, we may add other sounds to this group (the less common 'we' and 'wi').
      {
        rmj: 'n',
        alt: '',
        hg: hiragana.n,
        kk: katakana.n,
      },
      null,
      {
        rmj: 'wo',
        alt: '',
        hg: hiragana.wo,
        kk: katakana.wo,
      },
    ],
  ],

  // 濁点（だくてん）dakuten (diacritics).

  [
    'ga',
    [
      {
        rmj: 'ga',
        alt: '',
        hg: hiragana.ga,
        kk: katakana.ga,
      },
      {
        rmj: 'gi',
        alt: '',
        hg: hiragana.gi,
        kk: katakana.gi,
      },
      {
        rmj: 'gu',
        alt: '',
        hg: hiragana.gu,
        kk: katakana.gu,
      },
      {
        rmj: 'ge',
        alt: '',
        hg: hiragana.ge,
        kk: katakana.ge,
      },
      {
        rmj: 'go',
        alt: '',
        hg: hiragana.go,
        kk: katakana.go,
      },
    ],
  ],

  [
    'za',
    [
      {
        rmj: 'za',
        alt: '',
        hg: hiragana.za,
        kk: katakana.za,
      },
      {
        rmj: 'zi',
        alt: 'ji',
        hg: hiragana.zi,
        kk: katakana.zi,
      },
      {
        rmj: 'zu',
        alt: '',
        hg: hiragana.zu,
        kk: katakana.zu,
      },
      {
        rmj: 'ze',
        alt: '',
        hg: hiragana.ze,
        kk: katakana.ze,
      },
      {
        rmj: 'zo',
        alt: '',
        hg: hiragana.zo,
        kk: katakana.zo,
      },
    ],
  ],

  [
    'da',
    [
      {
        rmj: 'da',
        alt: '',
        hg: hiragana.da,
        kk: katakana.da,
      },
      {
        rmj: 'di',
        alt: '',
        hg: hiragana.di,
        kk: katakana.di,
      },
      {
        rmj: 'du',
        alt: '',
        hg: hiragana.du,
        kk: katakana.du,
      },
      {
        rmj: 'de',
        alt: '',
        hg: hiragana.de,
        kk: katakana.de,
      },
      {
        rmj: 'do',
        alt: '',
        hg: hiragana.do,
        kk: katakana.do,
      },
    ],
  ],

  [
    'ba',
    [
      {
        rmj: 'ba',
        alt: '',
        hg: hiragana.ba,
        kk: katakana.ba,
      },
      {
        rmj: 'bi',
        alt: '',
        hg: hiragana.bi,
        kk: katakana.bi,
      },
      {
        rmj: 'bu',
        alt: '',
        hg: hiragana.bu,
        kk: katakana.bu,
      },
      {
        rmj: 'be',
        alt: '',
        hg: hiragana.be,
        kk: katakana.be,
      },
      {
        rmj: 'bo',
        alt: '',
        hg: hiragana.bo,
        kk: katakana.bo,
      },
    ],
  ],

  // 半濁点　（はんだくてん）handakuten (diacritics)

  [
    'pa',
    [
      {
        rmj: 'pa',
        alt: '',
        hg: hiragana.pa,
        kk: katakana.pa,
      },
      {
        rmj: 'pi',
        alt: '',
        hg: hiragana.pi,
        kk: katakana.pi,
      },
      {
        rmj: 'pu',
        alt: '',
        hg: hiragana.pu,
        kk: katakana.pu,
      },
      {
        rmj: 'pe',
        alt: '',
        hg: hiragana.pe,
        kk: katakana.pe,
      },
      {
        rmj: 'po',
        alt: '',
        hg: hiragana.po,
        kk: katakana.po,
      },
    ],
  ],

  // Digraphs.
  // 五十音（ごじゅうおん）

  [
    'kya',
    [
      {
        rmj: 'kya',
        alt: '',
        hg: hiragana.kya,
        kk: katakana.kya,
      },
      {
        rmj: 'kyu',
        alt: '',
        hg: hiragana.kyu,
        kk: katakana.kyu,
      },
      {
        rmj: 'kyo',
        alt: '',
        hg: hiragana.kyo,
        kk: katakana.kyo,
      },
    ],
  ],

  // Usually romanised as "sha, shu, sho"
  [
    'sya',
    [
      {
        rmj: 'sya',
        alt: '',
        hg: hiragana.sya,
        kk: katakana.sya,
      },
      {
        rmj: 'syu',
        alt: '',
        hg: hiragana.syu,
        kk: katakana.syu,
      },
      {
        rmj: 'syo',
        alt: '',
        hg: hiragana.syo,
        kk: katakana.syo,
      },
    ],
  ],

  // Usually romanised as "cha, chu, cho"
  [
    'tya',
    [
      {
        rmj: 'tya',
        alt: '',
        hg: hiragana.tya,
        kk: katakana.tya,
      },
      {
        rmj: 'tyu',
        alt: '',
        hg: hiragana.tyu,
        kk: katakana.tyu,
      },
      {
        rmj: 'tyo',
        alt: '',
        hg: hiragana.tyo,
        kk: katakana.tyo,
      },
    ],
  ],

  [
    'nya',
    [
      {
        rmj: 'nya',
        alt: '',
        hg: hiragana.nya,
        kk: katakana.nya,
      },
      {
        rmj: 'nyu',
        alt: '',
        hg: hiragana.nyu,
        kk: katakana.nyu,
      },
      {
        rmj: 'nyo',
        alt: '',
        hg: hiragana.nyo,
        kk: katakana.nyo,
      },
    ],
  ],

  [
    'hya',
    [
      {
        rmj: 'hya',
        alt: '',
        hg: hiragana.hya,
        kk: katakana.hya,
      },
      {
        rmj: 'hyu',
        alt: '',
        hg: hiragana.hyu,
        kk: katakana.hyu,
      },
      {
        rmj: 'hyo',
        alt: '',
        hg: hiragana.hyo,
        kk: katakana.hyo,
      },
    ],
  ],

  [
    'mya',
    [
      {
        rmj: 'mya',
        alt: '',
        hg: hiragana.mya,
        kk: katakana.mya,
      },
      {
        rmj: 'myu',
        alt: '',
        hg: hiragana.myu,
        kk: katakana.myu,
      },
      {
        rmj: 'myo',
        alt: '',
        hg: hiragana.myo,
        kk: katakana.myo,
      },
    ],
  ],

  [
    'rya',
    [
      {
        rmj: 'rya',
        alt: '',
        hg: hiragana.rya,
        kk: katakana.rya,
      },
      {
        rmj: 'ryu',
        alt: '',
        hg: hiragana.ryu,
        kk: katakana.ryu,
      },
      {
        rmj: 'ryo',
        alt: '',
        hg: hiragana.ryo,
        kk: katakana.ryo,
      },
    ],
  ],

  // 濁点（だくてん）dakuten (diacritics).
  [
    'gya',
    [
      {
        rmj: 'gya',
        alt: '',
        hg: hiragana.gya,
        kk: katakana.gya,
      },
      {
        rmj: 'gyu',
        alt: '',
        hg: hiragana.gyu,
        kk: katakana.gyu,
      },
      {
        rmj: 'gyo',
        alt: '',
        hg: hiragana.gyo,
        kk: katakana.gyo,
      },
    ],
  ],

  // Usually romanised as "ja, ju, jo"
  [
    'zya',
    [
      {
        rmj: 'zya',
        alt: '',
        hg: hiragana.zya,
        kk: katakana.zya,
      },
      {
        rmj: 'zyu',
        alt: '',
        hg: hiragana.zyu,
        kk: katakana.zyu,
      },
      {
        rmj: 'zyo',
        alt: '',
        hg: hiragana.zyo,
        kk: katakana.zyo,
      },
    ],
  ],

  // Usually also romanised as "ja, ju, jo"
  [
    'dya',
    [
      {
        rmj: 'dya',
        alt: '',
        hg: hiragana.dya,
        kk: katakana.dya,
      },
      {
        rmj: 'dyu',
        alt: '',
        hg: hiragana.dyu,
        kk: katakana.dyu,
      },
      {
        rmj: 'dyo',
        alt: '',
        hg: hiragana.dyo,
        kk: katakana.dyo,
      },
    ],
  ],

  [
    'bya',
    [
      {
        rmj: 'bya',
        alt: '',
        hg: hiragana.bya,
        kk: katakana.bya,
      },
      {
        rmj: 'byu',
        alt: '',
        hg: hiragana.byu,
        kk: katakana.byu,
      },
      {
        rmj: 'byo',
        alt: '',
        hg: hiragana.byo,
        kk: katakana.byo,
      },
    ],
  ],

  // 半濁点　（はんだくてん）handakuten (diacritics)
  [
    'pya',
    [
      {
        rmj: 'pya',
        alt: '',
        hg: hiragana.pya,
        kk: katakana.pya,
      },
      {
        rmj: 'pyu',
        alt: '',
        hg: hiragana.pyu,
        kk: katakana.pyu,
      },
      {
        rmj: 'pyo',
        alt: '',
        hg: hiragana.pyo,
        kk: katakana.pyo,
      },
    ],
  ],
])

const KanaTable = new Map<string, KanaSet>([
  [
    'a',
    {
      Basic: {
        Monographs: KanaRows.get('a')!,
        Digraphs: null,
      },
      Dakuten: null,
      Handakuten: null,
    },
  ],
  [
    'ka',
    {
      Basic: {
        Monographs: KanaRows.get('ka')!,
        Digraphs: KanaRows.get('kya')!,
      },
      Dakuten: {
        Monographs: KanaRows.get('ga')!,
        Digraphs: KanaRows.get('gya')!,
      },
      Handakuten: null,
    },
  ],
  [
    'sa',
    {
      Basic: {
        Monographs: KanaRows.get('sa')!,
        Digraphs: KanaRows.get('sya')!,
      },
      Dakuten: {
        Monographs: KanaRows.get('za')!,
        Digraphs: KanaRows.get('zya')!,
      },
      Handakuten: null,
    },
  ],
  [
    'ta',
    {
      Basic: {
        Monographs: KanaRows.get('ta')!,
        Digraphs: KanaRows.get('tya')!,
      },
      Dakuten: {
        Monographs: KanaRows.get('da')!,
        Digraphs: KanaRows.get('dya')!,
      },
      Handakuten: null,
    },
  ],
  [
    'na',
    {
      Basic: {
        Monographs: KanaRows.get('na')!,
        Digraphs: KanaRows.get('nya')!,
      },
      Dakuten: null,
      Handakuten: null,
    },
  ],
  [
    'ha',
    {
      Basic: {
        Monographs: KanaRows.get('ha')!,
        Digraphs: KanaRows.get('hya')!,
      },
      Dakuten: {
        Monographs: KanaRows.get('ba')!,
        Digraphs: KanaRows.get('bya')!,
      },
      Handakuten: {
        Monographs: KanaRows.get('pa')!,
        Digraphs: KanaRows.get('pya')!,
      },
    },
  ],
  [
    'ma',
    {
      Basic: {
        Monographs: KanaRows.get('ma')!,
        Digraphs: KanaRows.get('mya')!,
      },
      Dakuten: null,
      Handakuten: null,
    },
  ],
  [
    'ya',
    {
      Basic: {
        Monographs: KanaRows.get('ya')!,
        Digraphs: null,
      },
      Dakuten: null,
      Handakuten: null,
    },
  ],
  [
    'ra',
    {
      Basic: {
        Monographs: KanaRows.get('ra')!,
        Digraphs: KanaRows.get('rya')!,
      },
      Dakuten: null,
      Handakuten: null,
    },
  ],
  [
    'wa',
    {
      Basic: {
        Monographs: KanaRows.get('wa')!,
        Digraphs: null,
      },
      Dakuten: null,
      Handakuten: null,
    },
  ],
])

export default KanaTable

export function inKana(k: kanaKind): string {
  switch (k) {
    case 'hiragana':
      return 'ひらがな'
    case 'katakana':
      return 'カタカナ'
  }
}
