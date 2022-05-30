export class SessionStorage {
    constructor(protected storage: Record<string, unknown>) {}

    public setData(data: Record<string, unknown>) {
        this.storage = data;

        return this;
    }

    public getData() {
        return this.storage;
    }

    public set(key: string, value: unknown): void {
        this.storage[key] = value;
    }

    public get(key: string): unknown {
        return this.storage[key];
    }

    public has(key: string): boolean {
        return key in this.storage;
    }

    public del(key: string): void {
        delete this.storage[key];
    }

    *[Symbol.iterator](): Generator<[string, unknown]> {
        for (const key in this.storage) {
            yield [key, this.storage[key]];
        }
    }
}
