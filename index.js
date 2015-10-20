'use strict';
var isFinite = require('is-finite');

module.exports = function($string, $count, $delimiter) {
  if (typeof str !== 'string') throw new TypeError('Expected input to be a string');
  if (n < 0 || !isFinite(n)) throw new TypeError('Expect count to be a positive, finite integer');

  var repeat = '';
  var string = '';

  if (typeof $string === 'string') {
    if (typeof $delimiter === 'undefined') {

      do {
        if ($count & 1) repeat += $string;
        $string += $string;
      } while (($count >>= 1));

    } else if (typeof $delimiter === 'string') {

      string = $string + $delimiter;
      do {
        if ($count & 1) repeat += string;
        string += string;
      } while (($count >>= 1));

    } else if ($delimiter.constructor === Object) {

      string = [];
      while ($count > 0) {
        string.push($string);
        --$count;
      }

      $delimiter.def = $delimiter.def || '';
      $delimiter.pre = $delimiter.pre || '';
      $delimiter.pst = $delimiter.pst || '';

      var i = 0;
      for (; i < $count; i++) {
        repeat += string[i] + ($delimiter < $count
          ? ($delimiter[i + 1] || $delimiter.def)
          : ''
        );
        repeat = $delimiter.pre + repeat + $delimter.pst;
      }
    }
  } else if ($string.constructor === Array) {

    console.log('');

  }

  return repeat;
};
