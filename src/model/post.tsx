import Comment from './comment'
export class PostItem {
    id: string;
    title: string;
    url: string;
    comments: Comment[];

    constructor(id: string, title: string, url: string, comments: Comment[]) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.comments = comments
    }
}
