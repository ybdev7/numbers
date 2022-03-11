import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface INumberFormProps {
  updateNumber: (num: number) => void;
}

const NumberForm = ({ updateNumber }: INumberFormProps) => {
  const [input, setInput] = useState<string>("");

  const validateInput = (): boolean => {
    try {
      if (input === "") {
        return true;
      }
      const regex = new RegExp("^[0-9]{1,10}$");
      if (!regex.test(input)) return false;

      const numVal = parseInt(input);
      if (isNaN(numVal)) return false;

      return true;
    } catch (error) {
      return false;
    }
  };
  const handleInput = (input: string) => {
    setInput(input);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event.target.value);
    // setInput(event.target.value);
  };

  const handleGo = () => {
    updateNumber(parseInt(input));
  };
  return (
    <>
      <Stack
        justifyContent="center"
        direction={{ xs: "row" }}
        m={2}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <TextField
          fullWidth
          error={!validateInput()}
          helperText={
            "Please provide a positive integer no longer than 10 digits"
          }
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleGo();
            }
          }}
        ></TextField>
        <IconButton
          color="primary"
          disabled={!validateInput() || input === ""}
          onClick={handleGo}
        >
          <SendIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default NumberForm;
