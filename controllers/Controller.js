class Controller {
    constructor(model) {
        this.model = model
    }

    changeModel(titleValue, dateValue) {
        this.model.title = titleValue
        this.model.date = dateValue
        return this.model
    }
}