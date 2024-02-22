const todoItemEl = document.getElementsByClassName("todo-el");
const inputEl = document.querySelector("#inputTodo");
const ulEl = document.querySelector("#todoListEl");

let todosArr = ["milk", "eggs", "butter"];

function deleteItem(e) {
  if (e.target.style.textDecoration == "line-through") {
    e.target.style.textDecoration = "none";
  } else {
    e.target.style.textDecoration = "line-through";
  }
}

function removeItem(e) {
  e.target.parentElement.remove();
}

function showTodos() {
  if (todosArr.length != 0) {
    todosArr.map(item) {
        addTodo(item)
    }
  }
}

function addTodo(newTodo) {
  if (newTodo === "") {
    return alert("Field cannot be empty");
  }

  let li = document.createElement("li");
  li.innerText = newTodo;
  ulEl.appendChild(li);
  inputEl.value = "";
}
