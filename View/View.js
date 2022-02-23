class View {
    constructor(controller) {
        this.controller = controller;
        this.taskInput = document.querySelector("#title");
        this.dateInput = document.querySelector("#date");
        this.addButton = document.querySelector(".add");
        this.addButton.addEventListener("click", _ => {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `<h1>${this.controller.changeModel(this.taskInput.value, this.dateInput.value).title}</h1>`;
            document.body.append(newDiv)
        })
    }
}