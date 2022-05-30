import { LocalStorage } from "./src/mod.ts";

const storage = await new LocalStorage("./database.json", {}).load();

while (true) {
    const entry = prompt("$");

    if (entry) {
        const value = prompt("#");

        if (value) {
            storage.set(entry, value);
            console.clear();
            continue;
        }
    }

    await storage.save();
    break;
}

storage.set("?", () => {
    console.log(storage.get("?"));
});

console.log(
    Deno.inspect(storage.getData(), {
        depth: Infinity,
        compact: false,
        getters: true,
        colors: true,
    })
);
