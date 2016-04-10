function parser(str, b, d, p) {
  var s = [], i = 0, j = 0, k = 0;
  while (i < str.length) {
    if (str.substr(i).startsWith(b)) {
      s = s.concat(s[j + k]);
      i += b.length;
    }
    else if (str.substr(i).startsWith(d)) {
      s = s.concat(s[j + k]);
      k++;
      i += d.length;
    }
    else if (str.substr(i).startsWith(p)) {
      s.length--;
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
