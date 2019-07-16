function outer() {
  const arrow = () => console.log(this);
  arrow();
}

outer();
// window
