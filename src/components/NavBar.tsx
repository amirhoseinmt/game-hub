import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/icons8-game-controller-94.png'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar