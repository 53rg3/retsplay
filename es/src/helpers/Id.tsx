export class Id {
    public static random(): string {
        return Math.random().toString(36).substr(2, 9);
    }

    public static countable = 0;
}
