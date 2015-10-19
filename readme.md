# upprepa
> Before you wonder too much, it's [Swedish](https://en.wiktionary.org/wiki/upprepa); uncreatively, it just means 'repeat'. But no, I'm not one bit Swedish. :smirk:


## Install

```
$ npm install --save upprepa
```

## Usage
Repeat a string to your heart's content!

```js
var upprepa = require('upprepa');
upprepa("naked babies", 5);
//=> naked babies naked babies naked babies naked babies naked babies
```
> ([Wait, wtf?](https://www.youtube.com/watch?v=cT8wCVk5WFM))

Repeat a string, and pass in a delimiter to appear between each repetition!

```js
var upprepa = require('upprepa');
upprepa("Hello", 5, "! ");
//=> Hello! Hello! Hello! Hello! Hello!
```

Repeat a string, pass a delimiter, but also another one for the last instance!

```js
var upprepa = require('upprepa');
upprepa("love", 5, [", ", ", and even more "]);
//=> love, love, love, love, and even more love
```

Repeat a string, pass a delimiter, a final delimiter, but also another one for the first instance!

```js
var upprepa = require('upprepa');
upprepa("boys", 5, [", you know? ", ", ", " &mdash never enough "]);
//=> boys, you know? boys, boys, boys &mdash never enough boys
```

Repeat a string, and pass a delimiters object to delimit how you want, when you want. But remember, with great power comes great responsibility.

```js
var upprepa = require('upprepa');
upprepa("dogs", 5, {
  def: ", ", //sets the default delimiter
  pre: "Yeah, ", //goes before the first repetition
  1: ", okay, ",
  4: " &mdash; I love ",
  pst: ". Seriously!" //goes after the last repetition
});
//=> dogs, okay, dogs, dogs, dogs &mdash; I love dogs
```

Oh, and you can also pass an array instead of a string, to perform an `Array.prototype.join()` with the delimiter control that `upprepa` offers.

```js
var upprepa = require('upprepa');
var phrase = ["I", "love", "swimming"];
upprepa(phrase, 1, {
  def: ", um... ",
  pst: "...?"  
});
//=> I, um... love, um... swimming...?
```

## License

MIT © Mitchell Gates
