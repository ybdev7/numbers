import { Container, Stack } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import NumberForm from "../components/numbers/NumberForm";
import NumberInfo from "../components/numbers/NumberInfo";

const Home: FC<{}> = (): ReactElement => {
  const [num, setNum] = useState<number | undefined>(undefined);

  const updateNumber = (num: number) => {
    setNum(num);
  };
  return (
    <>
      <Container>
        <Stack
          direction={{ xs: "column" }}
          m={2}
          marginTop={10}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <NumberForm updateNumber={updateNumber} />
          {num && <NumberInfo num={num} />}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
