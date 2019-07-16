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
// object

// This example can be simplified to
// (function() {
//   const object = {
//     whoIsThis: function() {
//       console.log(this);
//     }
//   };
//   object.whoIsThis();
// })();
