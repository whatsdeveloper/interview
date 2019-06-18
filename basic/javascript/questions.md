# List of (Advanced) JavaScript Questions

## 1. What's the output?

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

[**Answer**](answers.md#1-whats-the-output)

## 2. What's the output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

[**Answer**](answers.md#2-whats-the-output)

## 3. What's the output?

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

[**Answer**](answers.md#3-whats-the-output)

## 4. What's the output?

```js
+true;
!'Lydia';
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

[**Answer**](answers.md#4-whats-the-output)

## 5. Which one is true?

```js
const bird = {
  size: 'small'
};

const mouse = {
  name: 'Mickey',
  small: true
};
```

- A: `mouse.bird.size` is not valid
- B: `mouse[bird.size]` is not valid
- C: `mouse[bird["size"]]` is not valid
- D: All of them are valid

[**Answer**](answers.md#5-which-one-is-true)
