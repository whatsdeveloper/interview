const object = {
  init: function() {
    (() => console.log(this))();
  }
};

object.init();
// object
