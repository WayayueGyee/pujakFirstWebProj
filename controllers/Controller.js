class Controller {
    constructor(model) {
        this.model = model
    }

    setModel(titleValue, dateValue) {
        this.model.title = titleValue
        this.model.date = dateValue
    }
}