import { Card, Row, Text,Grid } from '@nextui-org/react';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const { id, img, name } = pokemon;

  const router = useRouter();

  const onPokeClick = () => {
    router.push(`/name/${ pokemon.name }`)
  }

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
        <Card 
            isHoverable 
            isPressable
            onClick={ onPokeClick }
        >
            <Card.Body css={{ p: 1 }}>
                <Card.Image 
                src={ img }
                width="100%"
                height="140px"
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{ name }</Text>
                <Text>#{ id }</Text>
                </Row>
            </Card.Footer>
        </Card> 
    </Grid>
  )
}
