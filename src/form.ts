export class Form {
    private suffix_: string;
    private destinationUrl_: string;

    constructor() {
        this.suffix_ = "";
        this.destinationUrl_ = "";
    }

    get suffix(): string {
        return this.suffix_;
    }

    set suffix(suffix: string) {
        this.suffix_ = suffix;
    }

    get destinationUrl(): string {
        return this.destinationUrl_;
    }

    set destinationUrl(destinationUrl: string) {
        this.destinationUrl_ = destinationUrl;
    }

}