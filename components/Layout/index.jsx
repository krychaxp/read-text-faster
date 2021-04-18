import { useState } from "react";
import { TextForm } from "./TextForm";
import { Board } from "./Board";
import styled from "styled-components";

export const Box = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  height:100vh;
`;

export const Layout = () => {
  const [textArray, setTextArray] = useState([]);
  return (
    <Box>
      <Board textArray={textArray} />
      <TextForm setTextArray={setTextArray} />
    </Box>
  );
};
