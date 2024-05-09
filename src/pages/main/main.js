import React, { useState, useEffect } from "react";
import { Container, StyledButton } from "./styled";

import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "../../components/card/card";
import axios from "axios";

const exampleStudent = [
  {
    name: "love",
    number: 1,
  },
  {
    name: "junyoung",
    number: 2,
  },
  {
    name: "hojin",
    number: 3,
  },
  {
    name: "namyong",
    number: 4,
  },
  {
    name: "jaegu",
    number: 5,
  },
];

export const Main = () => {
  const [number, setNumber] = useState(1);
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const navigate = useNavigate();

  let valueNumber = 0;

  useEffect(() => {
    console.log("hihiiih");
  }, [number]);

  const plusState = () => {
    setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    getPokemonImg();
  }, [pokemonName]);

  const getPokemonImg = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-form/${number}`
      );
      setPokemonImg(response.data.sprites.front_default);
    } catch (e) {
      console.log(e);
    }
  };

  const apirequest = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      localStorage.setItem("pokemonName", response.data.forms[0].name);

      setPokemonName(response.data.forms[0].name);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <div onClick={apirequest}>api button</div>
        <img src={pokemonImg} alt="" />
        {exampleStudent.map((e, i) => {
          const temp = e.name + "love";
          return <Card key={i} props={temp} />;
        })}
        <div 
          style={{backgroundColor: "#c9c9c9"}}
        onClick={() => navigate("/sign-in", { state: { pokemonName } })}>routing move</div>
      </Container>
    </>
  );
};
