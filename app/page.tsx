import ButtonComponent from "./components/ButtonComponent";
import { Button } from "@yamada-ui/react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Navbar />
      <h1>button component:</h1>
      <ButtonComponent />
      <h1>button with customized primary color:</h1>
      <Button variant="solid" colorScheme="primary">
        Button
      </Button>
      <Button variant="outline" colorScheme="orange">
        Outline
      </Button>
    </div>
  );
}
