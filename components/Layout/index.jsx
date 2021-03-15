import { useState, useEffect, useMemo } from "react";
import { TextForm } from "./TextForm";
import { Board } from "./Board";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

export const Box = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-size: 20px;
`;

export const Footer = styled.footer`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Layout = () => {
  const [textArray, setTextArray] = useState([]);
  return (
    <Box>
      <Board textArray={textArray} />
      <TextForm setTextArray={setTextArray} />
      <Footer>
        <a
          href="https://github.com/krychaxp/read-text-faster.git"
          target="_blank"
          rel="noopener"
        >
          <AiOutlineGithub size="60" />
        </a>
        <div>
          Made by{" "}
          <a href="https://krychaxp.pl/?ref=rtf" target="_blank" rel="noopener">
            Krychaxp
          </a>
        </div>
      </Footer>
    </Box>
  );
};
