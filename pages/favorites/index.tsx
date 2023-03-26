import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from "@/components/ui/"
import { localStorageFavorites } from "@/utils";
import { FavoritesPokemon } from '@/components/pokemon';


const FavoritePage = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon( localStorageFavorites.pokemons );
  }, [])
  

  return (
    <Layout title='Pokemon - Favorites'>
        { favoritesPokemon.length === 0
          ? <NoFavorites/>
          : <FavoritesPokemon pokemons={ favoritesPokemon }/>
        }
    </Layout>
  )
}

export default FavoritePage