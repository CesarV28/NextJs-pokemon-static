import { pokeAPI } from "@/api";
import { Pokemon } from "@/interfaces";


export const getPokemonInfo = async ( query: string ) => {
    
    const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${ query }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}