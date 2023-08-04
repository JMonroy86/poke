import React, { FunctionComponent } from "react";
import { Card, Row, Col, Button, Text } from "@nextui-org/react";

interface Props {
  id: number;
  name: string;
}

export const CardFooter: FunctionComponent<Props> = ({ id, name }) => {
  return (
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#d1d1d1" size={12}>
            {id}
          </Text>
          <Text color="#d1d1d1" size={12} transform="capitalize">
            {name}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                More Info
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  );
};
