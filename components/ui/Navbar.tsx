import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from 'next/link';
import Image from "next/image";


export const Navbar = () => {

  const { theme } = useTheme();  

  return (
    <div style={{
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 30px',
        backgroundColor: theme?.colors.gray100.value
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

        <Spacer css={{ flex: 1 }}/>
     
        <Link href="/favorites" as={ NextLink }>
          <Text color="white" h3>Favoritos</Text>
        </Link>
    </div>
  )
}
