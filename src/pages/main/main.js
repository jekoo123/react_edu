import React, { useState, useEffect } from "react";
import { Container, StyledButton } from "./styled";
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
  const [number, setNumber] = useState(0);

  let valueNumber = 0;

  useEffect(() => {
    console.log("hihiiih");
  }, [number]);

  const plusState = () => {
    setNumber((prev) => prev + 1);
  };

  const apirequest = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    } 
  };

  return (
    <>
      <Container>
        <div onClick={apirequest}>api button</div>
        {exampleStudent.map((e, i) => {
          const temp = e.name + "love";

          return <Card key={i} props={temp} />;
        })}
      </Container>
    </>
  );
};
