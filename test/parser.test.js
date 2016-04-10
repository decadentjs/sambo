var tap = require('tap'),
  parser = require('../lib/parser'),
  FIXTURES = require('./fixtures');

// Incompatible words
tap.same(parser('cane|gatto', '(', '|', ')'), ['cane', 'gatto']);
tap.same(parser('cane|gatto|unicorno', '(', '|', ')'), ['cane', 'gatto', 'unicorno']);

// Common prefixes
tap.same(parser('al(ba|ga)', '(', '|', ')'), ['alba', 'alga']);
tap.same(parser('alb(a|er(go|o|to))', '(', '|', ')'), ['alba', 'albergo', 'albero', 'alberto']);
tap.same(parser('alb(a|er(g(atore|o)|o|to))', '(', '|', ')'), ['alba', 'albergatore', 'albergo', 'albero', 'alberto']);

// Panflute strings ascending
tap.same(parser('certa(|mente)', '(', '|', ')'), ['certa', 'certamente']);

// A more real life scenario
tap.same(parser(FIXTURES.STRINGS.ISIN_1, '(', '|', ')'), FIXTURES.ARRAYS.ISIN_1);
