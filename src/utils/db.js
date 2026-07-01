import { openDB } from "idb";

export const dbPromise = openDB("pokemon-db", 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains("pokemons")) {
            db.createObjectStore("pokemons", { keyPath: "name" });
        }
    },
});