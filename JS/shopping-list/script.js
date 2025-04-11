const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearBtn = document.querySelector(".clear-btn");

document.addEventListener("DOMContentLoaded", function () {
  loadItems();

  updateState();

  shoppingForm.addEventListener("submit", handleFormSubmit);

  for (let button of filterButtons) {
    button.addEventListener("click", handleFilterSelection);
  }
});

function saveToLocalStorage() {
  const items = shoppingList.querySelectorAll("li");
  const liste = [];
  for (let li of items) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent;
    const completed = li.hasAttribute("item-completed");
    liste.push({ id, name, completed });
  }

  localStorage.setItem("shoppingList", JSON.stringify(liste));
  updateState();
}

function loadItems() {
  const items = JSON.parse(localStorage.getItem("shoppingList")) || [];

  shoppingList.innerHTML = "";

  for (let item of items) {
    const li = createListItems(item);
    shoppingList.appendChild(li);
  }

  clearBtn.addEventListener("click", clear);
}

function clear() {
  shoppingList.innerHTML = "";
  localStorage.removeItem("shoppingList");
  updateState();
}

function updateState() {
  const isEmpty = shoppingList.querySelectorAll("li").length === 0;

  const alert = document.querySelector(".alert");
  const filterBtns = document.querySelector(".filter-buttons");

  alert.classList.toggle("d-none", !isEmpty);
  clearBtn.classList.toggle("d-none", isEmpty);
  filterBtns.classList.toggle("d-none", isEmpty);
}

function addItem(input) {
  const newItem = createListItems({
    id: generateId(),
    name: input.value,
    completed: false,
  });

  shoppingList.prepend(newItem);

  input.value = "";

  updateFilterItems();

  saveToLocalStorage();
}

function generateId() {
  return Date.now().toString();
}

function handleFormSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("input");

  if (input.value.trim().length === 0) {
    alert("Lütfen bir ürün girin.");
    return;
  }

  addItem(input);
}

function toggleCompleted(event) {
  event.target.parentElement.toggleAttribute("item-completed");

  updateFilterItems();

  saveToLocalStorage();
}

function createListItems(item) {
  // checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", toggleCompleted);

  // item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.addEventListener("click", openEditMode);
  div.addEventListener("blur", closeEditMode);
  div.addEventListener("keydown", cancelEnter);

  // delete-icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
  deleteIcon.addEventListener("click", removeItem);

  // li
  const li = document.createElement("li");
  li.classList.add("border", "rounded", "p-2", "mb-1");
  li.toggleAttribute("item-completed", item.completed);
  li.setAttribute("item-id", item.id);

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

function removeItem(event) {
  event.target.parentElement.remove();
  saveToLocalStorage();
}

function openEditMode(event) {
  const li = event.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    event.target.contentEditable = true;
  }
}

function closeEditMode(event) {
  const li = event.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    event.target.contentEditable = false;
  }

  saveToLocalStorage();
}

function cancelEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    closeEditMode(event);
  }
}

function handleFilterSelection(event) {
  const filterBtn = event.target;

  for (let button of filterButtons) {
    button.classList.add("btn-secondary");
    button.classList.remove("btn-primary");
  }

  filterBtn.classList.remove("btn-secondary");
  filterBtn.classList.add("btn-primary");

  filterItems(filterBtn.getAttribute("item-filter"));
}

function filterItems(filterType) {
  const li_items = shoppingList.querySelectorAll("li");

  for (let li of li_items) {
    li.classList.remove("d-block");
    li.classList.remove("d-none");

    const completed = li.hasAttribute("item-completed");

    if (filterType === "completed") {
      // Show only completed items
      li.classList.toggle(completed ? "d-flex" : "d-none");
    } else if (filterType === "incomplete") {
      // Show only incomplete items
      li.classList.toggle(completed ? "d-none" : "d-flex");
    } else {
      // Show all items
      li.classList.toggle("d-flex");
    }
  }
}

function updateFilterItems() {
  const activeFilter = document.querySelector(".btn-primary[item-filter]");
  filterItems(activeFilter.getAttribute("item-filter"));
}
