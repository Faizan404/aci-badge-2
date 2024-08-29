// CREATE
// READ
// DELETE

// let todoList = [];
function createTodo() {
  const formCreate = document.querySelector(".form-create");
  const listGroup = document.getElementById("list-group");

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
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    listGroup.insertAdjacentHTML("afterbegin", html);
    // readTodo(inputData);
    todoInput.value = "";
  });
}
// function readTodo(todo) {
//   todoList.push(todo);
  
// }
// function deleteTodo() {}

(function init() {
  createTodo();
})();
