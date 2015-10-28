'use strict';
var isFinite = require('is-finite');

function upprepa($input, $count, $delimiter) {
  var i, Input, Return = '';

  if ($count <= 0 || !isFinite($count)) {
    throw new Error('Try passing a finite positive number for the count parameter!');
  }

  if (typeof $delimiter === 'object') {

    $delimiter.def = $delimiter.def || ' ';

    if ($input.constructor === String) {
      Input = [];
      for(i = $count; i > 0; i--) {
        Input.push($input);
      }
    } else {
      Input = $input;
    }

    for(i = 0; i < $count; i++) {
      Return += i === 0
        ? ($delimiter.pre||'') + String(Input[i]) + ($delimiter[i+1]||$delimiter.def)
        : (i === $count-1)
          ? String(Input[i]) + ($delimiter.post || '')
          : String(Input[i]) + ($delimiter[i+1] || $delimiter.def);
    }

  } else {

    $delimiter = $delimiter || ' ';

    if ($input.constructor === String) {
      for(i = 0; i < $count; i++) {
        Return += i === $count - 1
          ? $input
          : $input + $delimiter;
      }
    } else if ($input.constructor === Array) {
      Return = $input.join($delimiter);
    }

  }
  return Return;
}

module.exports = upprepa;
