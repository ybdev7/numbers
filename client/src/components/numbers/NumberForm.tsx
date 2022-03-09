import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Stack } from "@mui/material";

interface INumberFormProps {
  updateNumber: (num: number) => void;
}

const NumberForm = ({ updateNumber }: INumberFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleGo = () => {
    updateNumber(parseInt(input));
  };
  return (
    <>
      <Stack direction={{ xs: "row" }} m={2} spacing={{ xs: 1, sm: 2, md: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={handleInputChange}
        ></TextField>
        <Button onClick={handleGo}>Go</Button>
      </Stack>
    </>
  );
};

export default NumberForm;
