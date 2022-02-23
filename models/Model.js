class Model {
    constructor(title = "", date = "") {
        this.title = title;
        this.date = date;

        this.id = Math.floor(Math.random() * 10000);
    }

}