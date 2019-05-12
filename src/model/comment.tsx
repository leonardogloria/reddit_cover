export default class Comment {
    id: string ;
    comment: String ;
    date: Date ;


    constructor(id: string, comment: String) {
        this.id = id;
        this.comment = comment;
        this.date = new Date();
    }
}