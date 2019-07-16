# Creeping into this (Exercise)

Ex. #1:

```js
function outer() {
  const arrow = () => console.log(this);
  arrow();
}

outer();
```

Ex. #2:

```js
function outer() {
  const obj = {
    init: () => console.log(this)
  };

  obj.init();
}

outer();
```

Ex. #3:

```js
const obj = {
  nested: {
    init: () => console.log(this)
  }
};

obj.nested.init();
```

Ex. #4:

```js
const object = {
  init: function() {
    (() => console.log(this))();
  }
};

object.init();
```

Ex. #5:

```js
const object = {
  init: function() {
    setTimeout(function() {
      const arrow = () => console.log(this);
      arrow();
    }, 5000);
  }
};

object.init();
```

Ex. #6:

```js
const object = {
  init: function() {
    setTimeout(function() {
      fetch('https://jsonplaceholder.typicode.com/todos/').then(function() {
        const arrow = () => console.log(this);
        arrow();
      });
    }, 5000);
  }
};

object.init();
```

Ex. #7:

```js
const object = {
  init: function() {
    setTimeout(function() {
      const object = {
        whoIsThis: function() {
          console.log(this);
        }
      };
      object.whoIsThis();
    }, 5000);
  }
};

object.init();
```
