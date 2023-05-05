import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
// import { MdPhoneIphone } from 'react-dom/md';
// import { SiNintendo } from 'react-dom/si';
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox : FaXbox,
    // nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    // ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
