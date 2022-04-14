export class Quote {
    id!: number;
    publisher!: string;
    author!: string;
    quote!: string;
    upvotes!: number;
    downvotes!: number;
    completeDate!: Date;
    constructor(id: number,publisher: string, author: string, quote: string, upvotes: number, downvotes: number) {
        this.id = id;
        this.publisher = publisher;
        this.author = author;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.completeDate = new Date

    }
}
