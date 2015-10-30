module.exports = function($input, $flag) {
  var input, flag;
  flag = Boolean($flag) ? $flag : 'g';
  if ($input.constructor === String) {
    input = $input.replace(/[!@#$%^&*()+=\-[\]\\';,./{}|":<>?~_]/g, "\\$&");
    return new RegExp(input, flag);
  } else if ($input.constructor === Array) {
    input = '';
    for(var i = 0; i < $input.length; i++) {
      input += (i === $input.length - 1)
        ? $input[i]
        : $input[i] + '|';
    }
    return new RegExp(input, flag);
  }
}
