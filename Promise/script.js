let inpuTimeout = document.getElementById("inpuTimeout");
let btnwait = document.getElementById("btnwait");

let wait = function (timeout) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(timeout))) {
      reject(new Error("the timeout has number"));
    }
    setTimeout(resolve, timeout);
  });
};

/*
setTimeout(() => {
  //10 sec
},1000);*/
//document.getElementById("btnwait")

btnwait.onclick = function () {
  wait(inpuTimeout.value)
    .then(() => {
      console.log("waited 10 sec");
    })
    .catch((err) => {
      console.error(err);
    });
};
