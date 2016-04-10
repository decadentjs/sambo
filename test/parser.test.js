var tap = require('tap'),
  parser = require('../lib/parser');

tap.same(parser('al(ba|ga)', '(', '|', ')'), ['alba', 'alga']);
tap.same(parser('alb(a|er(go|o|to))', '(', '|', ')'), ['alba', 'albergo', 'albero', 'alberto']);
