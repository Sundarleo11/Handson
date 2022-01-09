window.onload = function () {
  let bteninp = document.getElementById("inp");
  let btnwait = document.getElementById("btnwait");
  let btnlist = document.getElementById("list");

  btnwait.onclick = function () {
    let li = document.createElement("li");

    let btnWT = document.createElement("button");

    let taskSpan = document.createElement("span");
    // li.innerText = bteninp.value;
    //added text input
    taskSpan.innerText = bteninp.value;
    btnWT.innerText = "X";
    btnWT.onclick = function (event) {
      event.target.parentElement.remove();
      //console.log(event.target.parentElement);
    };
    li.appendChild(btnWT);
    li.appendChild(taskSpan);
    btnlist.appendChild(li);
  };
};

/*
 let btnbu = document.getElementById("button");
    btnbu.innerText = "Y";
    btnbu.onclick = function (event) {
      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement,
        event.target.parentElement.previousElementSibling
      );
*/
