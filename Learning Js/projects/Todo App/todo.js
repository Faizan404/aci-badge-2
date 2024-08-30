let todoList = [];
const listGroup = document.getElementById("list-group");
let index = 1;
function createTodo() {
  const formCreate = document.querySelector(".form-create");

  formCreate.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoInput = e.target[0];
    const inputData = todoInput.value;
    // guard clause
    if (!inputData) return alert("Please fill that field");
    const html = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
    <span>${inputData}</span>
    <ion-icon data-index=${index} name="close-outline" class="delete-icon"></ion-icon>
    </li>
    `;
    listGroup.insertAdjacentHTML("afterbegin", html);
    todoList.push(inputData);
    localStorage.setItem("todo", JSON.stringify(todoList));
    todoInput.value = "";
    index++;
  });
}
function readTodo() {
  let todoTemplate = "";
  const todoItems = localStorage.getItem("todo");
  if (!todoItems) return;
  const todoArray = JSON.parse(todoItems);
  todoList = todoArray;
  todoTemplate = todoArray.map((todo, i) => {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
    <span>${todo}</span>
    <ion-icon data-index=${
      i + 1
    } name="close-outline" class="delete-icon"></ion-icon>
    </li>
    `;
  });
  listGroup.insertAdjacentHTML("afterbegin", todoTemplate.join(""));
}
function deleteTodo() {
  listGroup.addEventListener("click", function (e) {
    const deleteBtn = e.target.closest(".delete-icon");
    if (!deleteBtn) return;
    const todoIndex = deleteBtn.dataset.index;
    todoList.splice(todoIndex - 1, 1);
    localStorage.setItem("todo", JSON.stringify(todoList));
    listGroup.innerHTML = "";
    readTodo();
  });
}

(function init() {
  createTodo();
  readTodo();
  deleteTodo();
})();
