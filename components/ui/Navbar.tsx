import { useRouter } from 'next/router';
import { Button, Input, Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from 'next/link';
import Image from "next/image";
import { useState } from 'react';



export const Navbar = () => {

  const { theme } = useTheme();  

  const [pokeId, setPokeId] = useState('');

  const router = useRouter();

  const onSearchPokemonById = ( e: any ) => {
    router.push(`/pokemon/${ pokeId }`)
  }

  const onInputChange = ( inputValue: string ) => {

    if( isNaN(Number(inputValue)) ) return;
    
    setPokeId( inputValue )
  }

  return (
    <div style={{
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: '0 30px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <Image
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
            alt="Icono de la App"
            width={70}
            height={70}
          />

          <Link href="/" as={ NextLink }>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>
        </div>

        <div  style={{
          display: "flex",
          gap: "16px"
        }}>
          <input 
            placeholder="Search pokemon by ID" 
            color="primary" 
            name="pokemonId"
            value={ pokeId }
            onChange={ ( e ) => onInputChange( e.target.value ) }
          />
          <Button 
            auto ghost shadow 
            color="gradient"
            onClick={ onSearchPokemonById }
          >
              Buscar
          </Button>
        </div>
     
        <Link href="/favorites" as={ NextLink }>
          <Text color="white" h3>Favoritos</Text>
        </Link>
    </div>
  )
}
