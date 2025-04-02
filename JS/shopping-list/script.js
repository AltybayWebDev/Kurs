const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");

document.addEventListener("DOMContentLoaded", function () {
  loadItems();
  shoppingForm.addEventListener("submit", handleFormSubmit);
});

function loadItems() {
  const items = [
    { id: 1, name: "Yumurta", completed: false },
    { id: 2, name: "Balık", completed: true },
    { id: 3, name: "Süt", completed: false },
    { id: 4, name: "Ekmek", completed: true },
  ];

  shoppingList.innerHTML = "";

  for (let item of items) {
    const li = createListItems(item);
    shoppingList.appendChild(li);
  }
}

function addItem(input) {
  const newItem = createListItems({
    id: generateId(),
    name: input.value,
    completed: false,
  });

  shoppingList.prepend(newItem);

  input.value = "";
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

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

function removeItem(event) {
  event.target.parentElement.remove();
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
}

function cancelEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    closeEditMode(event);
  }
}
