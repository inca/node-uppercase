#!/usr/bin/env node

var fs = require('fs')
  , nomnom = require('nomnom');

var opts = require("nomnom")
  .option('input', {
    abbr: 'i',
    help: 'Input file'
  })
  .parse();

var stream = opts.input ?
  fs.createReadStream(opts.input) :
  process.stdin;

stream.setEncoding('utf-8');

stream.on('data', function(data) {
  process.stdout.write(data.toUpperCase());
});

stream.on('end', function() {
  process.exit(0);
});
