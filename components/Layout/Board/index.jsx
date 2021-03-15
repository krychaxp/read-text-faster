import { useState, useEffect, useMemo } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { FaSquare } from "react-icons/fa";
import { Fab, Tooltip, LinearProgress, Paper, Slider } from "@material-ui/core";
import { ScreenWrapper, ReaderBoard, Buttons, Progress } from "./index.styles";

export const Board = ({ textArray }) => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [speed, setSpeed] = useState(100);

  const handlePlay = () => {
    setIsPlayed((v) => !v);
  };

  const handleStop = () => {
    setIsPlayed(false);
    setCurrentPosition(0);
  };

  useEffect(() => {
    if (isPlayed) {
      const timer = setInterval(() => {
        setCurrentPosition((v) => v + 1);
      }, 60000 / speed);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isPlayed, speed]);

  const progessValue = useMemo(
    () => (currentPosition / (textArray.length || 1)) * 100,
    [textArray, currentPosition]
  );

  useEffect(() => {
    if (progessValue >= 100) {
      setIsPlayed(false);
    }
  }, [progessValue]);
  console.log("rerender");
  const title = useMemo(() => (isPlayed ? "Stop" : "Strart"), [isPlayed]);

  return (
    <ScreenWrapper>
      <Paper elevation={7}>
        <ReaderBoard>{textArray[currentPosition]}</ReaderBoard>
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
      <Progress>
        Progress:
        <LinearProgress variant="determinate" value={progessValue} />
      </Progress>

      <Progress>
        Words per minute:
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
      </Progress>
    </ScreenWrapper>
  );
};