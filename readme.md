# upprepa
It means 'to repeat' in [Swedish](https://en.wiktionary.org/wiki/upprepa); it's not a very creative name, I know.

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
> ([wtf?](https://www.youtube.com/watch?v=cT8wCVk5WFM))

Repeat a string, and pass in a delimiter to appear between each repetition!

```js
var upprepa = require('upprepa');
upprepa("Hello", 5, "! ");
//=> Hello! Hello! Hello! Hello! Hello
```

Repeat a string, and pass a delimiters object to delimit how you want, when you want.

```js
var upprepa = require('upprepa');
upprepa("dogs", 5, {
  def: ", ", //sets the default delimiter
  pre: "Yeah, ", //goes before the first repetition
  1: ", okay, ",
  4: " &mdash; I love ",
  post: ". Seriously!" //goes after the last repetition
});
//=> Yeah, dogs, okay, dogs, dogs, dogs &mdash; I love dogs. Seriously!
```

Oh, and you can also pass an array instead of a string, to perform an `Array.prototype.join()` with the delimiter control that `upprepa` offers.

```js
var upprepa = require('upprepa');
var phrase = ["I", "love", "swimming"];
upprepa(phrase, 1, {
  def: ", um... ",
  post: "...?"  
});
//=> I, um... love, um... swimming...?
```

## License

MIT © Mitchell Gates
