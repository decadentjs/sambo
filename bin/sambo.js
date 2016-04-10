#!/usr/bin/env node

var sambo = require('..'),
  args = require('../lib/args')(),
  usage = require('../lib/usage');

if (!args.string) {
  usage();
  process.exit(1);
}

process.stdout.write(sambo(args.string.split(args.separator).sort(), args.preamble, args.delimiter, args.terminator) + '\n');
