import { dbPromise } from "./db";

export const getPokemonDB = async (nome) => {
    const db = await dbPromise;
    return db.get("pokemons", nome);
};

export const savePokemonDB = async (pokemon) => {
    const db = await dbPromise;
    return db.put("pokemons", pokemon);
};