var tap = require('tap'),
  sambo = require('..');

// It should return the string unaltered if the array has a single element
tap.equal(sambo(['albero'], '(', '|', ')'), 'albero');

// Strings without a common radix
tap.equal(sambo(['a', 'b', 'c'], '(', '|', ')'), 'a|b|c');
tap.equal(sambo(['albero', 'fiore'], '(', '|', ')'), 'albero|fiore');

// Strings with a common radix
tap.equal(sambo(['albero', 'alba', 'alberto', 'albergo'], '(', '|', ')'), 'alb(a|er(go|o|to))');
tap.equal(sambo(['pesca', 'pescatore', 'peschiera', 'pescheria'], '(', '|', ')'), 'pesc(a(|tore)|h(eria|iera))');
tap.equal(sambo(['mare', 'marina', 'marinaio', 'mario', 'maria'], '(', '|', ')'), 'mar(e|i(a|na(|io)|o))');

// Mixed strings
tap.equal(sambo(['albero', 'alba', 'alberto', 'albergo', 'pesca', 'pescatore', 'peschiera', 'pescheria'], '(', '|', ')'), 'alb(a|er(go|o|to))|pesc(a(|tore)|h(eria|iera))');

// Order of input doesn't matter
tap.equal(sambo(['albero', 'fiore'], '(', '|', ')'),
          sambo(['fiore', 'albero'], '(', '|', ')'));
tap.equal(sambo(['albero', 'alba', 'alberto', 'albergo'], '(', '|', ')'),
          sambo(['alba', 'albergo', 'albero', 'alberto'], '(', '|', ')'), 'alb(a|er(go|o|to))');
