import React, { FunctionComponent, ReactElement } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: ReactElement;
  title?: string;
}

export const Layout: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jonathan" />
        <meta name="description" content={`Informacion del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
