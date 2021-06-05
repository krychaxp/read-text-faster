import { useState, useEffect, useMemo, useCallback } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { FaSquare } from "react-icons/fa";
import { Fab, Tooltip, LinearProgress, Paper, Slider } from "@material-ui/core";
import {
  ScreenWrapper,
  ReaderBoard,
  Buttons,
  Progress,
  ProgressSlider,
} from "./index.styles";

export const Board = ({ textArray }) => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [speed, setSpeed] = useState(100);

  const handlePlay = () => {
    if (currentPosition >= textArray.length) {
      return;
    }
    setIsPlayed((v) => !v);
  };

  const handleStop = () => {
    setIsPlayed(false);
    setCurrentPosition(0);
  };

  useEffect(() => {
    if (!isPlayed) return;

    const timer = setInterval(() => {
      setCurrentPosition((v) => v + 1);
    }, 60_000 / speed);

    return () => {
      clearInterval(timer);
    };
  }, [isPlayed, speed]);

  const progessValue = useMemo(
    () => (textArray.length ? (currentPosition / textArray.length) * 100 : 0),
    [textArray, currentPosition]
  );

  useEffect(() => {
    if (currentPosition >= textArray.length) {
      setIsPlayed(false);
    }
  }, [currentPosition, textArray]);

  const title = useMemo(() => (isPlayed ? "Stop" : "Strart"), [isPlayed]);

  return (
    <ScreenWrapper>
      <Paper elevation={7}>
        <ReaderBoard>
          {textArray[currentPosition]}
          <Progress>
            <LinearProgress variant="determinate" value={progessValue} />
          </Progress>
        </ReaderBoard>
      </Paper>

      <Buttons>
        <Tooltip
          title={`Click to ${title}`}
          aria-label="open"
          onClick={handlePlay}
        >
          <Fab color="primary">
            {isPlayed ? <MdPause size="25" /> : <MdPlayArrow size="25" />}
          </Fab>
        </Tooltip>
        <Tooltip
          title="Start from the beginning"
          aria-label="open"
          onClick={handleStop}
        >
          <Fab color="primary">
            <FaSquare size="25" />
          </Fab>
        </Tooltip>
      </Buttons>

      <ProgressSlider>
        Words per minute: {speed}
        <Slider
          defaultValue={100}
          valueLabelDisplay="auto"
          step={50}
          marks
          min={100}
          max={600}
          getAriaValueText={(value) => {
            setSpeed(value);
          }}
        />
      </ProgressSlider>
    </ScreenWrapper>
  );
};
