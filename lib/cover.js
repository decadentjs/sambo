function cover(s, x0, y, l) {
  // Safe defaults
  x0 = x0 === undefined ? 0 : x0;
  y = y === undefined ? 0 : y;
  l = l === undefined ? s.length : l;

  // Check bad input
  if (x0 >= l) {
    console.error('Error: past assigned slice', x0, l);
    return false;
  }
  if (s[x0] === undefined) {
    console.error('Error: past array length', s, x0);
    return false;
  }

  if (y > s[x0].length - 1) {
    if (x0 === l - 1) {
      // Termination of rightmost string
      return [null];
    }
    // The string at x0 was only as long as y0, so call on the next item
    return [null].concat(cover(s, x0 + 1, y, l));
  }

  // Initialize non-trivial return structure
  var u = {l: s[x0].charAt(y), c: []},
    r = [u];

  // Spread in width until we find either the end, or a different char
  var x = x0, m;
  do {
    m = false;
    if (x < l &&
        s[x0].charAt(y) === s[x].charAt(y)) {
      m = true;
      x++;
    }
  } while (m);

  // If we haven't covered the full length of the assigned slice, launch
  // on the pair (x + 1, y0) with the original length l.
  if (x < l) {
    r = r.concat(cover(s, x, y, l));
  }

  // Launch on the tail of the string at s[x0] from the position y
  u.c = u.c.concat(cover(s, x0, y + 1, x));

  return r;
}

module.exports = cover;
