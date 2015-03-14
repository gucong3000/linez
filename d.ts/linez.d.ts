declare function linez(text: string): linez.Document;
declare module linez {
    class Document {
        private bom;
        private static charsets;
        charset: string;
        lines: Line[];
        constructor(lines?: Line[]);
        private detectCharset();
        toString(): string;
    }
    interface Line {
        offset: number;
        number: number;
        text: string;
        ending?: string;
    }
    interface Options {
        newlines?: string[];
    }
    function configure(options: Options): void;
    function resetConfiguration(): void;
}
export = linez;
