import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance 
      </MenuButton>
      <MenuList>
        <MenuItem>Relavance</MenuItem>
        <MenuItem>name</MenuItem>
        <MenuItem>relese</MenuItem>
        <MenuItem>shit</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
