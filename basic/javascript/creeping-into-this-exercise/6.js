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
// window
