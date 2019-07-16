const object = {
  init: function() {
    setTimeout(function() {
      const arrow = () => console.log(this);
      arrow();
    }, 5000);
  }
};

object.init();
// window
