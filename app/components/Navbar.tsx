import { Box } from "@yamada-ui/react";
import { Button } from "@yamada-ui/react";

const Navbar = () => {
  return (
    <Box
      p="md"
      w="full"
      bg="primary"
      color="white"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
    >
      This is a navbar
      <Box gapX="sm" display="flex">
        <Button colorScheme="amber" w="4.5rem">
          home
        </Button>
        <Button colorScheme="amber" w="4.5rem">
          about
        </Button>
        <Button colorScheme="amber" w="4.5rem">
          faq
        </Button>
        <Button colorScheme="amber" w="4.5rem">
          contact
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
