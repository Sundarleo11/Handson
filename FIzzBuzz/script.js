var num = document.getElementById("num");
var print = document.getElementById("print");
var ulList = document.getElementById("ulList");

print.onclick = function () {
  let start = Date.now();
  ulList.innerHTML = "";

  //logic
  for (let i = 1; i <= num.value; i++) {
    let li = document.createElement("li");
    let print = "";
    if (i % 3 == 0) print += "fizz";
    if (i % 5 == 0) print += "buzz";
    if (print == "") print = i;
    li.textContent = print;

    ulList.appendChild(li);
  }

  console.log("time taken", Date.now() - start);
};

/**
 * complexity of Math
 *  for example a+b,a-b,a*b,
 * if N is Maximum number bits i a,b
 *
 * +   o(n)
 * -   O(n)
 * *   O(n^2)
 * /   O(n^2)
 * %   O(n^2)
 *
 *
 *
 *
 */
