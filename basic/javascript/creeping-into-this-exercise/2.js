function outer() {
  const obj = {
    init: () => console.log(this)
  };

  obj.init();
}

outer();
// window
