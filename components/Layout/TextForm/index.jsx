import { useState, useEffect } from "react";
import { MenuButton, TextareaWrapper } from "./index.styles";
import { MdAssignment } from "react-icons/md";
import { Fab, Tooltip } from "@material-ui/core";

export const TextForm = ({ setTextArray }) => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const newValue = text
      .replace(/[;.\\\]\/'"!@#$%^&*()_+}{|\[,:><?\n-]/g, " ")
      .split(" ")
      .filter((v) => v);
    setTextArray(newValue);
  }, [text]);
  return (
    <>
      <MenuButton onClick={() => setIsVisible((v) => !v)}>
        <Tooltip title="Open Textarea" aria-label="open">
          <Fab color="primary">
            <MdAssignment size="25" />
          </Fab>
        </Tooltip>
      </MenuButton>
      <TextareaWrapper isVisible={isVisible}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write some text ..."/>
      </TextareaWrapper>
    </>
  );
};
