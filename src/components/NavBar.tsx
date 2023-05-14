import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/icons8-game-controller-94.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar;