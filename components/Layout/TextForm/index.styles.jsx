import styled from "styled-components";

export const MenuButton = styled.div`
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 20px;
`;

export const TextareaWrapper = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 0 30px rgba(0, 0, 0, 0.5);
  z-index: 5;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: 0.3s;
  opacity: ${({ isVisible }) => +isVisible};
  & > textarea {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
`;
