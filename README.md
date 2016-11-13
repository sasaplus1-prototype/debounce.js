# debounce.js

debouncing function

## Installation

```sh
$ npm install sasaplus1-prototype/debounce.js
```

## Usage

via `require()`

```js
var debounce = require('debounce');
```

via `<script>`

```html
<script src="debounce.min.js"></script>
```

### Example

```js
var fn = debounce(function() { /* code */ }, 1000);
```

## Functions

### debounce(fn, timeout)

- `fn`
  - `Function`
- `timeout`
  - `Number`
- `return`
  - `Function`

return debounced function.

## License

The MIT license.
