import ButtonComponent from "./components/ButtonComponent";
import { Button } from "@yamada-ui/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>button component:</h1>
      <ButtonComponent />
      <Button variant="outline" colorScheme="orange">
        Outline
      </Button>
    </div>
  );
}
