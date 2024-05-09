import React, { useState, useEffect } from "react";
import { Container } from "./styled";

export const SignIn = () => {
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    const pokemon = localStorage.getItem("pokemonName");
    if (pokemon) {
      setPokemonName(pokemon);
    } else {
      console.log("error");
    }
  }, []);

  return (
    <Container>
      <div>{pokemonName}</div>
    </Container>
  );
};
