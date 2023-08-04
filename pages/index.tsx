import { NextPage, GetStaticProps } from "next";
import { Grid, Card, Col, Text, Row, Button } from "@nextui-org/react";

import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemons/PokemonCard/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="test">
      <Grid.Container gap={2} justify="center">
        {pokemons.map((pokemon) => {
          return (
            // <li key={id}>{`#${id} - ${name}`}</li>
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151"); // your fetch function here

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
