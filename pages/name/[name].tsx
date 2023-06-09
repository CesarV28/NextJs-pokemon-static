import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { ParsedUrlQuery } from 'querystring';

import confetti from 'canvas-confetti';

import { pokeAPI } from '@/api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces/pokemon-full';

import { getPokemonInfo, localStorageFavorites } from '../../utils';
import { PokemonListResponse } from '../../interfaces/pokemon-list';

interface Props {
  pokemon: Pokemon;
}
 
interface Params extends ParsedUrlQuery{
  name: string;
}
 
const PokemonByName: NextPage<Props> = ({ pokemon }) => {

  const [ isInFavorites, setIsInFavorites ] = useState( false );
  
  const onToggleFavorite = () => {
    localStorageFavorites.toggleFavorites( pokemon.id );
    setIsInFavorites( !isInFavorites );

    if( isInFavorites ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    });

  }

  useEffect(() => {
    setIsInFavorites(localStorageFavorites.existInFavotites( pokemon.id ))
  }, [pokemon.id]) 


  return (
    <Layout title={`${ pokemon.name }`}>
     
     <Grid.Container css={{ marginTop: '5px'}} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px'}}>
            <Card.Body>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-img.png'} 
                alt={ pokemon.name }
                width="100%"
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1>{ pokemon.name }</Text>
              <Button 
                onClick={ onToggleFavorite }
                color={ 'gradient' }
                ghost={ !isInFavorites }
              >
                { (isInFavorites) ? 'En favoritos' : 'Guardar en favoritos' }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={ 30 }>Sprites: </Text>
              <Container display='flex' direction='row' gap={ 0 }>
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ `${ pokemon.name }-front-default`}
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ `${ pokemon.name }-back-default`}
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ `${ pokemon.name }-front-shiny`}
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ `${ pokemon.name }-back-shiny`}
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>

          </Card>
        </Grid>

     </Grid.Container>

    </Layout>
  );
};
 
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  
  const { data } = await pokeAPI.get<PokemonListResponse>('/pokemon?limit=151')
 
  const pokemonNames: string[] = data.results.map( pokemon => pokemon.name );

  return {
    paths: pokemonNames.map( name => ({
        params: { name }
    })),
    fallback: 'blocking',
  };
};
 
export const getStaticProps: GetStaticProps = async ({ params }) => {
 
  const { name } = params as { name: string };

  const pokemonInfo = await getPokemonInfo( name );

  if( !pokemonInfo ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
 
  return {
    props: {
        pokemon: pokemonInfo
    },
    revalidate: 86400,
  };
};
 
export default PokemonByName;