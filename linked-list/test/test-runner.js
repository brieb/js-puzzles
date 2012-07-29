var isVerbose, jasmine, key, showColors, sys, _i, _len;

jasmine = require('jasmine-node');
sys = require('sys');

for (_i = 0, _len = jasmine.length; _i < _len; _i++) {
  key = jasmine[_i];
  global[key] = jasmine[key];
}

isVerbose = true;
showColors = true;

process.argv.forEach(function(arg) {
  switch (arg) {
    case '--color':
      showColors = true;
    case '--noColor':
      showColors = false;
    case '--verbose':
      isVerbose = true;
  }
});

jasmine.executeSpecsInFolder('./spec', (function(runner, log) {
  if (runner.results().failedCount === 0) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}), isVerbose, showColors);
