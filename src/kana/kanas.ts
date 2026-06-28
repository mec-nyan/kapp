import type { kanaKind, KanaRow, KanaSet } from '../types/kana'
import examples from './examples'
import hiragana from './hiragana'
import katakana from './katakana'

// TODO: Following the model of `examples`, we can try to use an object instead of a Map.
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
        examples: {
          hg: {
            jap: examples.hiragana.a.jap,
            rmj: examples.hiragana.a.rmj,
            picture: examples.hiragana.a.picture,
          },
          kk: {
            jap: examples.katakana.a.jap,
            rmj: examples.katakana.a.rmj,
            picture: examples.katakana.a.picture,
          },
        },
      },
      {
        rmj: 'i',
        alt: '',
        hg: hiragana.i,
        kk: katakana.i,
        examples: {
          hg: {
            jap: examples.hiragana.i.jap,
            rmj: examples.hiragana.i.rmj,
            picture: examples.hiragana.i.picture,
          },
          kk: {
            jap: examples.katakana.i.jap,
            rmj: examples.katakana.i.rmj,
            picture: examples.katakana.a.picture,
          },
        },
      },
      {
        rmj: 'u',
        alt: '',
        hg: hiragana.u,
        kk: katakana.u,
        examples: {
          hg: {
            jap: examples.hiragana.u.jap,
            rmj: examples.hiragana.u.rmj,
            picture: examples.hiragana.u.picture,
          },
          kk: {
            jap: examples.katakana.u.jap,
            rmj: examples.katakana.u.rmj,
            picture: examples.katakana.u.picture,
          },
        },
      },
      {
        rmj: 'e',
        alt: '',
        hg: hiragana.e,
        kk: katakana.e,
        examples: {
          hg: {
            jap: examples.hiragana.e.jap,
            rmj: examples.hiragana.e.rmj,
            picture: examples.hiragana.e.picture,
          },
          kk: {
            jap: examples.katakana.e.jap,
            rmj: examples.katakana.e.rmj,
            picture: examples.katakana.e.picture,
          },
        },
      },
      {
        rmj: 'o',
        alt: '',
        hg: hiragana.o,
        kk: katakana.o,
        examples: {
          hg: {
            jap: examples.hiragana.o.jap,
            rmj: examples.hiragana.o.rmj,
            picture: examples.hiragana.o.picture,
          },
          kk: {
            jap: examples.katakana.o.jap,
            rmj: examples.katakana.o.rmj,
            picture: examples.katakana.o.picture,
          },
        },
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
        examples: {
          hg: {
            jap: examples.hiragana.ka.jap,
            rmj: examples.hiragana.ka.rmj,
            picture: examples.hiragana.ka.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ki',
        alt: '',
        hg: hiragana.ki,
        kk: katakana.ki,
        examples: {
          hg: {
            jap: examples.hiragana.ki.jap,
            rmj: examples.hiragana.ki.rmj,
            picture: examples.hiragana.ki.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ku',
        alt: '',
        hg: hiragana.ku,
        kk: katakana.ku,
        examples: {
          hg: {
            jap: examples.hiragana.ku.jap,
            rmj: examples.hiragana.ku.rmj,
            picture: examples.hiragana.ku.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ke',
        alt: '',
        hg: hiragana.ke,
        kk: katakana.ke,
        examples: {
          hg: {
            jap: examples.hiragana.ke.jap,
            rmj: examples.hiragana.ke.rmj,
            picture: examples.hiragana.ke.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ko',
        alt: '',
        hg: hiragana.ko,
        kk: katakana.ko,
        examples: {
          hg: {
            jap: examples.hiragana.ko.jap,
            rmj: examples.hiragana.ko.rmj,
            picture: examples.hiragana.ko.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: examples.hiragana.sa.jap,
            rmj: examples.hiragana.sa.rmj,
            picture: examples.hiragana.sa.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'si',
        alt: 'shi',
        hg: hiragana.si,
        kk: katakana.si,
        examples: {
          hg: {
            jap: examples.hiragana.si.jap,
            rmj: examples.hiragana.si.rmj,
            picture: examples.hiragana.si.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'su',
        alt: '',
        hg: hiragana.su,
        kk: katakana.su,
        examples: {
          hg: {
            jap: examples.hiragana.su.jap,
            rmj: examples.hiragana.su.rmj,
            picture: examples.hiragana.su.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'se',
        alt: '',
        hg: hiragana.se,
        kk: katakana.se,
        examples: {
          hg: {
            jap: examples.hiragana.se.jap,
            rmj: examples.hiragana.se.rmj,
            picture: examples.hiragana.se.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'so',
        alt: '',
        hg: hiragana.so,
        kk: katakana.so,
        examples: {
          hg: {
            jap: examples.hiragana.so.jap,
            rmj: examples.hiragana.so.rmj,
            picture: examples.hiragana.so.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: examples.hiragana.ta.jap,
            rmj: examples.hiragana.ta.rmj,
            picture: examples.hiragana.ta.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ti',
        alt: 'chi',
        hg: hiragana.ti,
        kk: katakana.ti,
        examples: {
          hg: {
            jap: examples.hiragana.ti.jap,
            rmj: examples.hiragana.ti.rmj,
            picture: examples.hiragana.ti.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'tu',
        alt: 'tsu',
        hg: hiragana.tu,
        kk: katakana.tu,
        examples: {
          hg: {
            jap: examples.hiragana.tu.jap,
            rmj: examples.hiragana.tu.rmj,
            picture: examples.hiragana.tu.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'te',
        alt: '',
        hg: hiragana.te,
        kk: katakana.te,
        examples: {
          hg: {
            jap: examples.hiragana.te.jap,
            rmj: examples.hiragana.te.rmj,
            picture: examples.hiragana.te.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'to',
        alt: '',
        hg: hiragana.to,
        kk: katakana.to,
        examples: {
          hg: {
            jap: examples.hiragana.to.jap,
            rmj: examples.hiragana.to.rmj,
            picture: examples.hiragana.to.picture,
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ni',
        alt: '',
        hg: hiragana.ni,
        kk: katakana.ni,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'nu',
        alt: '',
        hg: hiragana.nu,
        kk: katakana.nu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ne',
        alt: '',
        hg: hiragana.ne,
        kk: katakana.ne,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'no',
        alt: '',
        hg: hiragana.no,
        kk: katakana.no,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'hi',
        alt: '',
        hg: hiragana.hi,
        kk: katakana.hi,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'hu',
        alt: 'fu',
        hg: hiragana.hu,
        kk: katakana.hu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'he',
        alt: '',
        hg: hiragana.he,
        kk: katakana.he,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ho',
        alt: '',
        hg: hiragana.ho,
        kk: katakana.ho,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'mi',
        alt: '',
        hg: hiragana.mi,
        kk: katakana.mi,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'mu',
        alt: '',
        hg: hiragana.mu,
        kk: katakana.mu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'me',
        alt: '',
        hg: hiragana.me,
        kk: katakana.me,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'mo',
        alt: '',
        hg: hiragana.mo,
        kk: katakana.mo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      null,
      {
        rmj: 'yu',
        alt: '',
        hg: hiragana.yu,
        kk: katakana.yu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      null,
      {
        rmj: 'yo',
        alt: '',
        hg: hiragana.yo,
        kk: katakana.yo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ri',
        alt: '',
        hg: hiragana.ri,
        kk: katakana.ri,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ru',
        alt: '',
        hg: hiragana.ru,
        kk: katakana.ru,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 're',
        alt: '',
        hg: hiragana.re,
        kk: katakana.re,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ro',
        alt: '',
        hg: hiragana.ro,
        kk: katakana.ro,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      null,
      {
        rmj: 'wo',
        alt: '',
        hg: hiragana.wo,
        kk: katakana.wo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'gi',
        alt: '',
        hg: hiragana.gi,
        kk: katakana.gi,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'gu',
        alt: '',
        hg: hiragana.gu,
        kk: katakana.gu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ge',
        alt: '',
        hg: hiragana.ge,
        kk: katakana.ge,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'go',
        alt: '',
        hg: hiragana.go,
        kk: katakana.go,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'zi',
        alt: 'ji',
        hg: hiragana.zi,
        kk: katakana.zi,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'zu',
        alt: '',
        hg: hiragana.zu,
        kk: katakana.zu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ze',
        alt: '',
        hg: hiragana.ze,
        kk: katakana.ze,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'zo',
        alt: '',
        hg: hiragana.zo,
        kk: katakana.zo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'di',
        alt: '',
        hg: hiragana.di,
        kk: katakana.di,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'du',
        alt: '',
        hg: hiragana.du,
        kk: katakana.du,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'de',
        alt: '',
        hg: hiragana.de,
        kk: katakana.de,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'do',
        alt: '',
        hg: hiragana.do,
        kk: katakana.do,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'bi',
        alt: '',
        hg: hiragana.bi,
        kk: katakana.bi,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'bu',
        alt: '',
        hg: hiragana.bu,
        kk: katakana.bu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'be',
        alt: '',
        hg: hiragana.be,
        kk: katakana.be,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'bo',
        alt: '',
        hg: hiragana.bo,
        kk: katakana.bo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'pi',
        alt: '',
        hg: hiragana.pi,
        kk: katakana.pi,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'pu',
        alt: '',
        hg: hiragana.pu,
        kk: katakana.pu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'pe',
        alt: '',
        hg: hiragana.pe,
        kk: katakana.pe,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'po',
        alt: '',
        hg: hiragana.po,
        kk: katakana.po,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'kyu',
        alt: '',
        hg: hiragana.kyu,
        kk: katakana.kyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'kyo',
        alt: '',
        hg: hiragana.kyo,
        kk: katakana.kyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'syu',
        alt: '',
        hg: hiragana.syu,
        kk: katakana.syu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'syo',
        alt: '',
        hg: hiragana.syo,
        kk: katakana.syo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'tyu',
        alt: '',
        hg: hiragana.tyu,
        kk: katakana.tyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'tyo',
        alt: '',
        hg: hiragana.tyo,
        kk: katakana.tyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'nyu',
        alt: '',
        hg: hiragana.nyu,
        kk: katakana.nyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'nyo',
        alt: '',
        hg: hiragana.nyo,
        kk: katakana.nyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'hyu',
        alt: '',
        hg: hiragana.hyu,
        kk: katakana.hyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'hyo',
        alt: '',
        hg: hiragana.hyo,
        kk: katakana.hyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'myu',
        alt: '',
        hg: hiragana.myu,
        kk: katakana.myu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'myo',
        alt: '',
        hg: hiragana.myo,
        kk: katakana.myo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ryu',
        alt: '',
        hg: hiragana.ryu,
        kk: katakana.ryu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'ryo',
        alt: '',
        hg: hiragana.ryo,
        kk: katakana.ryo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'gyu',
        alt: '',
        hg: hiragana.gyu,
        kk: katakana.gyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'gyo',
        alt: '',
        hg: hiragana.gyo,
        kk: katakana.gyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'zyu',
        alt: '',
        hg: hiragana.zyu,
        kk: katakana.zyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'zyo',
        alt: '',
        hg: hiragana.zyo,
        kk: katakana.zyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'dyu',
        alt: '',
        hg: hiragana.dyu,
        kk: katakana.dyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'dyo',
        alt: '',
        hg: hiragana.dyo,
        kk: katakana.dyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'byu',
        alt: '',
        hg: hiragana.byu,
        kk: katakana.byu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'byo',
        alt: '',
        hg: hiragana.byo,
        kk: katakana.byo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'pyu',
        alt: '',
        hg: hiragana.pyu,
        kk: katakana.pyu,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
      },
      {
        rmj: 'pyo',
        alt: '',
        hg: hiragana.pyo,
        kk: katakana.pyo,
        examples: {
          hg: {
            jap: '',
            rmj: '',
            picture: '',
          },
          kk: {
            jap: '',
            rmj: '',
            picture: '',
          },
        },
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
