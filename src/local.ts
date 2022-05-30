import { SessionStorage } from "./session.ts";

export class LocalStorage extends SessionStorage {
    constructor(protected path: string, protected storage: Record<string, unknown>) {
        super(storage);
    }

    public async load() {
        try {
            this.storage = JSON.parse(await Deno.readTextFile(this.path));
        } catch {
            await this.save();
        }

        return this;
    }

    public async save() {
        await Deno.writeTextFile(this.path, JSON.stringify(this.storage));

        return this;
    }

    public getPath() {
        return this.path;
    }

    public setPath(path: string) {
        this.path = path;

        return this;
    }

    public async destroy() {
        await Deno.remove(this.path);
        return this;
    }
}
