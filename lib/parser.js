function parser(str, b, d, p) {
  var s = [], i = 0, j = 0, k = 0;
  while (i < str.length) {
    if (str.substr(i).indexOf(b) === 0) { // (
      s.splice(j + k + 1, 0, s[j + k]);
      i += b.length;
    }
    else if (str.substr(i).indexOf(d) === 0) { // |
      k++;
      s.splice(j + k + 1, 0, s[j + k]);
      i += d.length;
    }
    else if (str.substr(i).indexOf(p) === 0) { // )
      s.splice(j + k + 1, 1);
      j += k;
      k = 0;
      i += p.length;
    }
    else {
      s[j + k] = (s[j + k]||'').concat(str.charAt(i));
      i++;
    }
  }
  return s;
}

module.exports = parser;
