import styled from "styled-components";

export const ScreenWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  padding: 5px;
`;

export const ReaderBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 200px;
  width: 300px;
  position: relative;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin: 20px;
`;

export const Progress = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const ProgressSlider = styled.div`
  width: 100%;
  text-align: center;
`;
