// @ts-nocheck
export default {
  // @DOM操作
  'DOCUMENT': { type: 'const', value: '' }, // @DOCUMENT
  'WINDOW': { type: 'const', value: '' }, // @WINDOW
  'NAVIGATOR': { type: 'const', value: '' }, // @NAVIGATOR
  'DOM要素ID取得': { // @DOMの要素をIDを指定して取得 // @DOMようそIDしゅとく
    type: 'func',
    josi: [['の', 'を']],
    pure: true,
    fn: function (id: any) {
      return document.getElementById(id)
    }
  },
  'DOM要素取得': { // @DOMの要素をクエリqで取得して返す // @DOMようそしゅとく
    type: 'func',
    josi: [['の', 'を']],
    pure: true,
    fn: function (q: any) {
      return document.querySelector(q)
    }
  },
  'DOM要素全取得': { // @DOMの要素をクエリqで全部取得して返す // @DOMようそぜんしゅとく
    type: 'func',
    josi: [['の', 'を']],
    pure: true,
    fn: function (q: any) {
      return Array.from(document.querySelectorAll(q))
    }
  },
  'タグ一覧取得': { // @任意のタグの一覧を取得して返す // @たぐいちらんしゅとく
    type: 'func',
    josi: [['の', 'を']],
    pure: true,
    fn: function (tag: any) {
      return document.getElementsByTagName(tag)
    }
  },
  'DOM子要素取得': { // @DOMの要素PAの子要素をクエリqを指定して結果を一つ取得して返す // @DOMこようそしゅとく
    type: 'func',
    josi: [['の'], ['を']],
    pure: true,
    fn: function (pa: any, q: any) {
      if (typeof pa === 'string') { pa = document.querySelector(pa) }
      if (!pa.querySelector) {
        throw new Error('『DOM子要素取得』で親要素がDOMではありません。')
      }
      return pa.querySelector(q)
    }
  },
  'DOM子要素全取得': { // @DOMの要素PAの子要素をクエリqを指定して結果を複数取得して返す // @DOMこようそぜんしゅとく
    type: 'func',
    josi: [['の'], ['を']],
    pure: true,
    fn: function (pa: any, q: any) {
      if (typeof pa === 'string') { pa = document.querySelector(pa) }
      if (!pa.querySelectorAll) {
        throw new Error('『DOM子要素取得』で親要素がDOMではありません。')
      }
      return pa.querySelectorAll(q)
    }
  },
  'DOMイベント設定': { // @DOMのEVENTになでしこ関数名funcStrのイベントを設定 // @DOMいべんとせってい
    type: 'func',
    josi: [['の'], ['に', 'へ'], ['を']],
    pure: false,
    fn: function (dom: any, event: any, funcStr: any, sys: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }

      dom[event] = sys.__findVar(funcStr, null)
    },
    return_none: true
  },
  'DOMテキスト設定': { // @DOMにテキストを設定 // @DOMてきすとせってい
    type: 'func',
    josi: [['に', 'の', 'へ'], ['を']],
    pure: true,
    fn: function (dom: any, text: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }

      const tag = dom.tagName.toUpperCase()
      if (tag === 'INPUT' || tag === 'TEXTAREA') { dom.value = text } else if (tag === 'SELECT') {
        for (let i = 0; i < dom.options.length; i++) {
          const v = dom.options[i].value
          if (String(v) === text) {
            dom.selectedIndex = i
            break
          }
        }
      } else { dom.innerHTML = text }
    },
    return_none: true
  },
  'DOMテキスト取得': { // @DOMのテキストを取得 // @DOMてきすとしゅとく
    type: 'func',
    josi: [['の', 'から']],
    pure: true,
    fn: function (dom: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }
      if (!dom.tagName) {
        console.log('[DOMテキスト取得]でタグ名が取得できません。', dom)
        return ''
      }
      const tag = dom.tagName.toUpperCase()
      // input or textarea
      if (tag === 'INPUT' || tag === 'TEXTAREA') { return dom.value }
      // select
      if (tag === 'SELECT') {
        const idx = dom.selectedIndex
        if (idx < 0) { return null }
        return dom.options[idx].value
      }
      return dom.innerHTML
    }
  },
  'DOM_HTML設定': { // @DOMにHTML文字列を設定 // @DOM_HTMLせってい
    type: 'func',
    josi: [['に', 'の', 'へ'], ['を']],
    pure: true,
    fn: function (dom: any, text: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }

      dom.innerHTML = text
    },
    return_none: true
  },
  'DOM_HTML取得': { // @DOMのHTML文字列を取得 // @DOM_HTMLしゅとく
    type: 'func',
    josi: [['の', 'から']],
    pure: true,
    fn: function (dom: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }

      return dom.innerHTML
    }
  },
  'テキスト設定': { // @DOMのテキストにVを設定 // @てきすとせってい
    type: 'func',
    josi: [['に', 'の', 'へ'], ['を']],
    pure: false,
    fn: function (dom: any, v: any, sys: any) {
      return sys.__exec('DOMテキスト設定', [dom, v, sys])
    }
  },
  'テキスト取得': { // @DOMのテキストを取得 // @てきすとしゅとく
    type: 'func',
    josi: [['の', 'から']],
    pure: false,
    fn: function (dom: any, sys: any) {
      return sys.__exec('DOMテキスト取得', [dom, sys])
    }
  },
  'HTML設定': { // @DOMのHTMLにVを設定 // @HTMLせってい
    type: 'func',
    josi: [['に', 'の', 'へ'], ['を']],
    pure: false,
    fn: function (dom: any, v: any, sys: any) {
      return sys.__exec('DOM_HTML設定', [dom, v, sys])
    }
  },
  'HTML取得': { // @DOMのテキストを取得 // @HTMLしゅとく
    type: 'func',
    josi: [['の', 'から']],
    pure: false,
    fn: function (dom: any, sys: any) {
      return sys.__exec('DOM_HTML取得', [dom, sys])
    }
  },
  'DOM属性設定': { // @DOMの属性Sに値Vを設定(属性Sには『DOM和属性』も適用される) // @DOMぞくせいせってい
    type: 'func',
    josi: [['の'], ['に', 'へ'], ['を']],
    uses: ['DOM和属性'],
    pure: true,
    fn: function (dom: any, s: any, v: any, sys: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }
      const wa = sys.__v0['DOM和属性']
      if (wa[s]) { s = wa[s] }
      dom.setAttribute(s, v)
    },
    return_none: true
  },
  'DOM属性取得': { // @DOMの属性Sを取得(属性Sには『DOM和属性』も適用される) // @DOMぞくせいしゅとく
    type: 'func',
    josi: [['の', 'から'], ['を']],
    uses: ['DOM和属性'],
    pure: true,
    fn: function (dom: any, s: any, sys: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }
      const wa = sys.__v0['DOM和属性']
      if (wa[s]) { s = wa[s] }
      return dom.getAttribute(s)
    }
  },
  'DOM和属性': { // const // @DOMわぞくせい
    type: 'const',
    value: { // (ref) https://developer.mozilla.org/ja/docs/Web/API/Element
      '幅': 'width',
      '高さ': 'height',
      '高': 'height',
      'タイプ': 'type',
      'データ': 'data',
      '名前': 'name',
      'ID': 'id',
      '読取専用': 'readOnly',
      '読み取り専用': 'readOnly',
      '無効化': 'disabled'
    }
  },
  'DOM和スタイル': { // const // @DOMわすたいる
    type: 'const',
    value: {
      '幅': 'width',
      '高さ': 'height',
      '高': 'height',
      '背景色': 'background-color',
      '色': 'color',
      'マージン': 'margin',
      '余白': 'padding',
      '文字サイズ': 'font-size',
      '行揃え': 'text-align',
      '左': 'left',
      '右': 'right',
      '中央': 'center',
      'ボーダー': 'border',
      'ボックス表示': 'display',
      'なし': 'none',
      'ブロック': 'block',
      '表示位置': 'float',
      '重なり': 'z-index',
      '読取専用': 'readOnly',
      '読み取り専用': 'readOnly',
      'readonly': 'readOnly'
    }
  },
  'DOMスタイル設定': { // @DOMのスタイルAに値Bを設定 // @DOMすたいるせってい
    type: 'func',
    josi: [['の'], ['に', 'へ'], ['を']],
    uses: ['DOM和スタイル'],
    pure: true,
    fn: function (dom: any, s: any, v: any, sys: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }
      const wa = sys.__v0['DOM和スタイル']
      if (wa[s] !== undefined) { s = wa[s] }
      if (wa[v] !== undefined) { v = wa[v] }
      dom.style[s] = v
    },
    return_none: true
  },
  'DOMスタイル一括設定': { // @DOMに(オブジェクト型で)スタイル情報を一括設定 // @DOMすたいるいっかつせってい
    type: 'func',
    josi: [['に', 'へ'], ['を']],
    uses: ['DOM和スタイル'],
    pure: true,
    fn: function (dom: any, values: any, sys: any) {
      if (typeof dom === 'string') { dom = document.querySelectorAll(dom) }
      if (!dom) { return }
      if (dom instanceof window.HTMLElement) { dom = [dom] }
      const wa = sys.__v0['DOM和スタイル']
      // 列挙したDOM一覧を全てスタイル変更する
      for (let i = 0; i < dom.length; i++) {
        const e = dom[i]
        for (const key in values) {
          let s = key
          let v = values[key]
          if (wa[s] !== undefined) { s = wa[s] }
          if (wa[v] !== undefined) { v = wa[v] }
          e.style[s] = v
        }
      }
    },
    return_none: true
  },
  'DOMスタイル取得': { // @DOMのSTYLEの値を取得 // @DOMすたいるしゅとく
    type: 'func',
    josi: [['の'], ['を']],
    uses: ['DOM和スタイル'],
    pure: true,
    fn: function (dom: any, style: any, sys: any) {
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }
      if (!dom) { return '' }
      const wa = sys.__v0['DOM和スタイル']
      if (wa[style]) { style = wa[style] }
      return dom.style[style]
    }
  },
  'DOMスタイル一括取得': { // @DOMのSTYLE(配列で複数指定)の値を取得 // @DOMすたいるいっかつしゅとく
    type: 'func',
    josi: [['の'], ['を']],
    uses: ['DOM和スタイル'],
    pure: true,
    fn: function (dom: any, style: any, sys: any) {
      const res = {}
      if (typeof (dom) === 'string') { dom = document.querySelector(dom) }

      if (!dom) { return res }
      if (style instanceof String) { style = [style] }

      const wa = sys.__v0['DOM和スタイル']
      if (style instanceof Array) {
        style.forEach((key) => {
          if (wa[key]) { key = wa[key] }
          res[key] = dom.style[key]
        })
        return res
      }
      if (style instanceof Object) {
        for (let key in style) {
          if (wa[key]) { key = wa[key] }
          res[key] = dom.style[key]
        }
        return res
      }
      return dom.style[style]
    }
  },
  'DOM要素作成': { // @DOMにTAGの新規要素を作成 // @DOMようそさくせい
    type: 'func',
    josi: [['の', 'を']],
    pure: true,
    fn: function (tag: any) {
      return document.createElement(tag)
    }
  },
  'DOM子要素追加': { // @DOMの要素PAの子へ要素ELを追加してPAを返す // @DOMこようそついか
    type: 'func',
    josi: [['に', 'へ'], ['を']],
    pure: true,
    fn: function (pa: any, el: any) {
      if (typeof el === 'string') { el = document.querySelector(el) }
      if (typeof pa === 'string') { pa = document.querySelector(pa) }
      pa.appendChild(el)
    }
  },
  'DOM子要素削除': { // @DOMの要素PAの子から要素ELを削除してPAを返す // @DOMこようそさくじょ
    type: 'func',
    josi: [['から'], ['を']],
    pure: true,
    fn: function (pa: any, el: any) {
      if (typeof el === 'string') { el = document.querySelector(el) }
      if (typeof pa === 'string') { pa = document.querySelector(pa) }
      pa.removeChild(el)
    }
  },
  '注目': { // @DOMの要素Aにフォーカスする(カーソルを移動する) // @ちゅうもく
    type: 'func',
    josi: [['を', 'へ', 'に']],
    pure: true,
    fn: function (el: any) {
      if (typeof el === 'string') { el = document.querySelector(el) }
      if (el.focus) { el.focus() }
    },
    return_none: true
  }
}

