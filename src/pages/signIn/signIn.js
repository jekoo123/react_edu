import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import { useLocation } from "react-router-dom";

export const SignIn = () => {
  const location = useLocation();
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
      <div>{location.state.pokemonName}</div>
    </Container>
  );
};
