import { FunctionComponent } from "react";
import { Card } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";
import { CardFooter, CardHeader, CardBody } from "./components";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };
  const { name, id, img } = pokemon;
  return (
    <Card
      isHoverable
      isPressable
      css={{ w: "100%", h: "400px" }}
      onClick={handleClick}
    >
      <CardHeader text="New" />
      <CardBody id={id} img={img} name={name} />
      <CardFooter id={id} name={name} />
    </Card>
  );
};
