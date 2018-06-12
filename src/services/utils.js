var cache = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
]

export default {
  leftPad (str, len, ch) {
    // convert `str` to a `string`
    str = str + ''
    // `len` is the `pad`'s length now
    len = len - str.length
    // doesn't need to pad
    if (len <= 0) return str
    // `ch` defaults to `' '`
    if (!ch && ch !== 0) ch = ' '
    // convert `ch` to a `string` cuz it could be a number
    ch = ch + ''
    // cache common use cases
    if (ch === ' ' && len < 10) return cache[len] + str
    // `pad` starts with an empty string
    var pad = ''
    // loop
    while (true) {
      // add `ch` to `pad` if `len` is odd
      if (len & 1) pad += ch
      // divide `len` by 2, ditch the remainder
      len >>= 1
      // "double" the `ch` so this operation count grows logarithmically on `len`
      // each time `ch` is "doubled", the `len` would need to be "doubled" too
      // similar to finding a value in binary search tree, hence O(log(n))
      if (len) ch += ch
      // `len` is 0, exit the loop
      else break
    }
    // pad `str`!
    return pad + str
  },

  hex2rgb (hex, opacity) {
    hex = (hex + '').trim()

    let rgb = null
    let match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/)

    if (!match) {
      return null
    }

    rgb = {}

    hex = match[1]

    if (hex.length === 6) {
      rgb.r = parseInt(hex.substring(0, 2), 16)
      rgb.g = parseInt(hex.substring(2, 4), 16)
      rgb.b = parseInt(hex.substring(4, 6), 16)
    } else if (hex.length === 3) {
      rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16)
      rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)
      rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)
    }

    rgb.css = 'rgb' + (opacity ? 'a' : '') + '('
    rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b
    rgb.css += (opacity ? ',' + opacity : '') + ')'

    return rgb
  },

  findInNestedByName (array, name) {
    if (typeof array !== 'undefined') {
      for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) return [{...array[i]}]
        let a = this.findInNestedByName(array[i].children, name)
        if (a != null) {
          a.unshift({...array[i]})
          return [...a]
        }
      }
    }
    return null
  }
}
