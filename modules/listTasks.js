import { showMessage } from "./modal.js";

const addTaskInput = document.querySelector("#add-task");
const list = document.querySelector("#list");
let currentId = 0;

const createListItem = (taskText) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.classList.add("position-relative");
  listItem.innerHTML = `<input
            class="form-check-input"
            type="checkbox"
            id="checkbox${currentId}"
            value=""
          />
          <label class="form-check-label" for="thirdCheckbox"
            ><font class="list-task-box" style="vertical-align: inherit"
              ><font class="list-task-text">${taskText}</font></font
            ></label
          >
          <button
            type="button"
            class="btn-close position-absolute top-50 end-0 translate-middle"
            aria-label="Close"
            id="close${currentId}"
          ></button>`;
  return listItem;
};

const addListennersToListItem = (listItem) => {
  const checkbox = listItem.children[0];
  const button = listItem.children[2];

  const toggleTask = () => {
    listItem.children[1].classList.toggle("list-task-complite");
    if (listItem.hasAttribute("data-task-complite")) {
      listItem.removeAttribute("data-task-complite");
    } else {
      listItem.setAttribute("data-task-complite", "true");
    }
  };

  checkbox.addEventListener("click", toggleTask);

  button.addEventListener("click", function removeItem() {
    listItem.removeEventListener("click", removeItem);
    listItem.removeEventListener("click", toggleTask);
    listItem.remove();
  });
};

const addTaskInDOM = (taskText) => {
  const listItem = createListItem(taskText);
  list.append(listItem);
  addListennersToListItem(listItem);
};

const addTask = (event) => {
  const keyCondition = event.code === "Enter";
  const clickCondition = event.type === "click";
  const valueCondition = addTaskInput.value !== "";
  if ((keyCondition && valueCondition) || (clickCondition && valueCondition)) {
    addTaskInDOM(addTaskInput.value);
    addTaskInput.value = "";
    currentId++;
  } else if (keyCondition || clickCondition) {
    showMessage("Ошибка", "Сначала добавьте описание задачи");
  }
};

document.addEventListener("keypress", addTask);
document.querySelector("#click-after").addEventListener("click", addTask);

document.querySelector("#delete-all-tasks").addEventListener("click", () => {
  const listItems = document.querySelectorAll("li[data-task-complite='true']");
  if (listItems.length !== 0) {
    const eventCloseButton = new Event("click");
    for (const item of listItems) {
      item.children[2].dispatchEvent(eventCloseButton);
    }
  } else {
    showMessage("Ошибка", "Нет выполненых задач");
  }
});
