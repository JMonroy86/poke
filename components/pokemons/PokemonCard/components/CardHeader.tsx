import { Card, Col, Text } from "@nextui-org/react";
import React, { FunctionComponent } from "react";

interface Props {
  text: string;
}
export const CardHeader: FunctionComponent<Props> = ({ text }) => {
  return (
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          {text}
        </Text>
      </Col>
    </Card.Header>
  );
};
