import React from "react";
import { Layout } from "@/components/layouts";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {}
const PokemonPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout title="pokemon nombre">
      <h1>hola</h1>
    </Layout>
  );
};

export default PokemonPage;
