import {
  Text,
  Heading,
  Box,
  Blockquote,
  Container,
  Image,
  Input,
} from "@yamada-ui/react";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" maxW="100vw" alignItems="center">
      <Box gap="sm" display="flex" flexDirection="column">
        {" "}
        <Heading
          marginLeft="lg"
          marginTop="lg"
          bgClip="text"
          bgGradient="linear(to-r, #D6D6D6, #888888)"
        >
          Ui example page
        </Heading>
        <Text marginLeft="lg">Ray Zhao</Text>
        <Blockquote marginLeft="lg">
          This is a section to show how blockquote component works
        </Blockquote>{" "}
        <Image
          src="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
          maxW="xs"
          marginLeft="md"
          alt="Dragon Ball"
        />
        <Container
          borderBlockColor="gray.100"
          borderWidth="2px"
          rounded="md"
          marginLeft="lg"
          maxW="lg"
        >
          {" "}
          <Heading size="xl"> Dragon Ball (DRAGON BALL) </Heading>
          <Text>
            Dragon Ball (DRAGON BALL) is a Japanese manga work by Akira
            Toriyama. It was serialized in Weekly Shonen Jump (Shueisha) from
            the 51st issue of 1984 to the 25th issue of 1995. It is a long manga
            that depicts adventure, dream, battle, friendship, etc., centered on
            the protagonist, Son Goku, and the treasure, Dragon Ball, which can
            grant any wish if all seven scattered balls are collected.
          </Text>
        </Container>
        <Input
          marginLeft="lg"
          invalid
          errorBorderColor="orange.500"
          placeholder="custom border color"
        />{" "}
      </Box>
    </Box>
  );
}
