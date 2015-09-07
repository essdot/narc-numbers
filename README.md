# narcissistic numbers

This module exports a function that will test whether the given number matches the definition of a *narcissistic number*: each of its digits raised to the power of the number of digits, added together, equals the number. Some narcissistic numbers are 1, 153, and 1634.

```javascript
testNarcNumber(n) -> bool
```

This module also exports a generator that you can use to search for narcissistic numbers.

```javascript
testNarcNumber.searchGenerator() -> Generator
```

By default the generator will start searching at 0, but you can call the generator's `next` method with a number to re-start the search from that number.

```javascript

let gen = testNarcNumber.searchGenerator()

gen.next()
// {value: 0, done: false}
gen.next()
// {value: 1, done: false}
gen.next(150)
// {value: 153, done: false}
```