const obj = {
  nested: {
    init: () => console.log(this)
  }
};

obj.nested.init();
// window
