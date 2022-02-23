class View {
    constructor(controller) {
        this.controller = controller;
        this.taskInput = document.querySelector("#title");
        this.dateInput = document.querySelector("#date");
        this.addButton = document.querySelector(".add");
        this.addButton.addEventListener("click", _ => {
            const newDiv = document.createElement("div");
            const model = this.controller.changeModel(this.taskInput.value, this.dateInput.value)
            newDiv.innerHTML = `
                <h1>${model.title}</h1>
                <p>${model.date}</p>`;

            document.body.append(newDiv)
        })
    }
}