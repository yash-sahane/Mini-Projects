class Todo {
    text: string;
    date: Date;
    id: number;

    constructor(text: string) {
        this.text = text;
        this.date = new Date();
        this.id = Math.random() * 10;
    }
}

export default Todo;