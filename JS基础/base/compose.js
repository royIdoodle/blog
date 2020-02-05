const app = { middlewares: [] };
app.use = (fn) => {
  app.middlewares.push(fn);
};
app.compose = function() {
//  Your Code Here
}
app.use(next => {
  console.log(1);
  next();
  console.log(2);
});
app.use(next => {
  console.log(3);
  next();
  console.log(4);
});
app.use(next => {
  console.log(5);
  next();
  console.log(6);
});
app.compose();