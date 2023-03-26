

const toggleFavorites = ( id: number ) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('pokeFavorites') || `[]` );

    if( favorites.includes( id ) ){
        favorites = favorites.filter( pokeId => pokeId !== id );
    }else {
        favorites.push( id );
    }

    localStorage.setItem('pokeFavorites', JSON.stringify( favorites ) );
}

const existInFavotites = ( id: number ): boolean => {

    if( typeof window === 'undefined' ) return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('pokeFavorites') || `[]` );

    return favorites.includes( id );

}

const pokemons = (): number[] => {

    return JSON.parse( localStorage.getItem('pokeFavorites') || '[]');

}

export default {
    toggleFavorites,
    existInFavotites,

    pokemons
}