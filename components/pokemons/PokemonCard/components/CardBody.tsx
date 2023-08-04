import { FunctionComponent } from "react";
import { Card } from "@nextui-org/react";

interface Props {
  id: number;
  img: string;
  name: string;
}
export const CardBody: FunctionComponent<Props> = ({ id, img, name }) => {
  return (
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={img}
        width="100%"
        height="100%"
        objectFit="cover"
        alt={`${id}_${name}`}
      />
    </Card.Body>
  );
};
