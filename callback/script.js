function dosomething(done) {
  console.log("1.do something");
  //done();
  setTimeout(done, 0);
}
//async
dosomething(() => {
  console.log("2 do something");
});

var dosomethig = function () {
  console.log("3 do something");
};

console.log("4 final");

//console.log(dosomethig)
