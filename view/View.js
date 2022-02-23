class View {
    constructor(controller) {
        this.controller = controller;
        this.taskInput = document.querySelector("#title");
        this.dateInput = document.querySelector("#date");
        this.addButton = document.querySelector(".add");

        this.addButton.addEventListener("click", _ => {
            const newDiv = document.createElement("div");
            this.controller.setModel(this.taskInput.value, this.dateInput.value)

            newDiv.innerHTML = `
                <h1>${this.controller.model.title}</h1>
                <p>${this.controller.model.date}</p>`;

            document.body.append(newDiv)
        })
    }
}