#!/usr/bin/env node

var parser = require('../lib/parser'),
  args = require('../lib/args')();

if (!args.string) {
  usage();
  process.exit(1);
}

process.stdout.write(parser(args.string, args.preamble, args.delimiter, args.terminator) + '\n');
