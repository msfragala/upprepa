'use strict';
var isFinite = require('is-finite');

function upprepa($input, $count, $delimiter) {
  var i, Input, Return = '';
  var def, ante, post;

  if ($count <= 0 || !isFinite($count)) {
    throw new Error('Try passing a finite positive number for the count parameter!');
  }

  if (typeof $delimiter === 'object') {

    def = $delimiter.def || ' ';
    ante = $delimiter.pre || '';
    post = $delimiter.post || '';

    if ($input.constructor === String) {
      Input = [];
      for(i = $count; i > 0; i--) {
        Input.push($input);
      }
    } else {
      Input = $input;
    }

    for(i = 0; i < Input.length; i++) {
      Return += (Input.length === 1)
        ? ante + Input[i] + post
        : (i === 0)
          ? ante + Input[i] + ($delimiter[i+1] || def)
          : (i === Input.length-1)
            ? Input[i] + post
            : Input[i] + ($delimiter[i+1] || def);
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
