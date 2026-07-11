// NOTE: The use of 'romaji' here serves two purposes:
//           1. To give an idea of how it sounds.
//           2. To help in typing using an IME.
//
// That's no easy task.  For that reason, I'm going to begin with Hepburn and
// later add the option to select other systems, including IPA.

const hiraganaToRomaji = new Map<string, string>([
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

  // TODO: How to romanise this???
  ['ー', 'ー'],
])

/**
 * Convert a string written in Japanese (hiragana/katakana/kanji) to its romaji form
 * using Hepburn romanization.
 * @param {string} word - Word in hiragana/katakana/kanji to romanise.
 * @returns {string}      Hopefully the romanised version of the same word...
 */
function toRomaji(word: string): string[] {
  // NOTE: We'll only need to romanise words that are written 'all in katakana' or
  // 'all in hiragana'.  For that reason, I've chosen to double the vowels for long
  // vowels, instead of using a macron in case the long vowel belongs to the same
  // morpheme.
  //
  // In loanwords, long vowels are followed by a 'Katakana-Hiragana Prolonged Sound
  // Mark' ('ー') or 'chōonpu'.  Those should be represented by a macron, while
  // adjacent vowels should be written separately.  Nevertheless, I've decided to
  // go without the macron for now.  I'll refine this eventually.

  // TODO: Check for katakana (or use other function and rename this one).
  // TODO: Check for a valid string (i.e. all characters belong the table).
  // NOTE: We won't need to use kanji in this app.

  const romaji: string[] = []
  let previous = ''

  for (const k of word) {
    // Only exception (for now) is 'chōonpu'.
    if (k === 'ー') {
      previous = previous.charAt(previous.length - 1)
    } else {
      previous = hiraganaToRomaji.get(k)!
    }
    romaji.push(previous)
  }

  return romaji
}

export function toRomajiFormmated(word: string): string {
  const romaji: string[] = toRomaji(word)
  // NOTE: We can add a separator (i.e. '·') if we want to make it clear what's the romaji
  // for each kana.
  const romajiWithSeparators = romaji.join('')
  return `/${romajiWithSeparators}/`
}
