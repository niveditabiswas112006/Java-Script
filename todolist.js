const inputText = document.querySelector("#task-input");
const addButton = document.querySelector("#add-task-button");
let taskName = ""

inputText.addEventListener("keypress", (event) => {
    taskName = event.target.value;
});

addButton.addEventListener("click", () => {
    const taskItem = document.createElement("div");

    const deleteButton = document.createElement("div");
    deleteButton.innerHTML = "❌";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });

    taskItem.classList.add("task-item");
    taskItem.innerHTML = taskName;
    taskItem.append(deleteButton);
    taskContainer.append(taskItem);
    taskName = "";
    inputText.value = "";
});



