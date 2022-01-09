window.onclick = function () {
  let num = document.getElementById("num");
  let print = document.getElementById("print");
  let list = document.getElementById("list");

  print.onclick = function () {
    let N = parseInt(num.value);
    //let start = Date.now().getTime();
    let start = new Date().getTime();
    //let Text = "";
    for (let i = 1; i <= N; i++) {
      //list.innertext += "<li>" + i + "</li>";
      // list.innerHTML += "<li>" + i + "</li>"; Too slow performances
      /// Text += "<li>" + i + "</li>";  M.1 method

      //method 2
      let item = document.createElement("li");
      item.innerHTML = i;
      list.appendChild(item);
    }

    //  list.innerHTML = Text;  M.1 method
    console.log(new Date().getTime() - start);
  };
};
