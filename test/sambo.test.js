var tap = require('tap'),
  sambo = require('..'),
  FIXTURES = require('./fixtures');

// It should return the string unaltered if the array has a single element
tap.equal(sambo(['albero'], '(', '|', ')'), 'albero');

// Strings without a common radix
tap.equal(sambo(['a', 'b', 'c'], '(', '|', ')'), 'a|b|c');
tap.equal(sambo(FIXTURES.ARRAYS.ALBERO_FIORE, '(', '|', ')'), 'albero|fiore');

// Strings with a common radix
tap.equal(sambo(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO, '(', '|', ')'), 'alb(a|er(go|o|to))');
tap.equal(sambo(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA, '(', '|', ')'), 'pesc(a(|tore)|h(eria|iera))');
tap.equal(sambo(FIXTURES.ARRAYS.MARE_INA_IO_IA, '(', '|', ')'), 'mar(e|i(a|na(|io)|o))');

// Mixed strings
tap.equal(sambo(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO.concat(FIXTURES.ARRAYS.PESCA_TORE_H_ERIA_IERA), '(', '|', ')'), 'alb(a|er(go|o|to))|pesc(a(|tore)|h(eria|iera))');

// Order of input doesn't matter
tap.equal(sambo(FIXTURES.ARRAYS.ALBERO_FIORE, '(', '|', ')'),
          sambo(Array.from(FIXTURES.ARRAYS.ALBERO_FIORE).reverse(), '(', '|', ')'));
tap.equal(sambo(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO, '(', '|', ')'),
          sambo(Array.from(FIXTURES.ARRAYS.ALB_A_ER_GO_O_TO).reverse(), '(', '|', ')'));

// A real life example
tap.equal(sambo(FIXTURES.ARRAYS.ISIN_1, '(', '|', ')'), FIXTURES.STRINGS.ISIN_1);
