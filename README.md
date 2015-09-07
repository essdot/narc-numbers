# narcissistic numbers

This module exports a function that will test whether the given number matches the definition of a *narcissistic number*: each of its digits cubed, added together equals the number. Some narcissistic numbers are 0, 1, and 153.

```javascript
testNarcNumber(n) -> bool
```

This module also exports a generator that you can use to search for narcissistic numbers

```javascript
testNarcNumber.searchGenerator() -> generator
```

By default the generator will start searching at 2, but you can call the generator's `next` method with a number to re-start the search from that number.

```javascript

let gen = testNarcNumber.searchGenerator()

gen.next()
// {value: 153, done: false}
gen.next()
// {value: 370, done: false}
gen.next(2)
// {value: 153, done: false}
```