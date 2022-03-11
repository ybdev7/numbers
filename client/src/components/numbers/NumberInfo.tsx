import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { INumberInfo, NumbersWorker } from "../../utils/NumbersWorker";
import LoadingBox from "../errors/LoadingBox";
import { AxiosError } from "axios";
import ErrorBox from "../errors/ErrorBox";
import CalculateIcon from "@mui/icons-material/Calculate";
import { blue } from "@mui/material/colors";
import { ThemeContext } from "@emotion/react";

interface INumberInfoProps {
  num: number;
}

const NumberInfo = ({ num }: INumberInfoProps) => {
  const [info, setInfo] = useState<INumberInfo>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);
    setIsError(false);
    setError(null);

    new NumbersWorker()
      .geNumberInfo(num)
      .then((response) => {
        setInfo(response);
        setLoading(false);
      })
      .catch((err: Error | AxiosError) => {
        setLoading(false);
        setIsError(true);
        setError(err);
      });
  }, [num]);

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        marginTop={10}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {isError && error && (
          <>
            <ErrorBox
              message={"Ooops...Numbers App has encountered an error:"}
              isShowError
              error={error}
            />
          </>
        )}
        {loading && (
          <>
            <LoadingBox message="Processing..." />
          </>
        )}
        {!loading && !isError && info && (
          <Card sx={{ margin: 2, width: "90%" }}>
            <CardHeader
              sx={{
                bgcolor: theme.palette.primary.light,
              }}
              avatar={
                <Avatar
                  variant="square"
                  aria-label="facts"
                  sx={{ bgcolor: theme.palette.primary.main }}
                >
                  <CalculateIcon />
                </Avatar>
              }
              title={`Number Facts for ${num} `}
            />
            <CardContent>
              <Typography>Prime: {info.isPrime ? "Yes" : "No"}</Typography>
              <Typography>Even: {info.isEven ? "Yes" : "No"}</Typography>
              <Typography>Divisors: {info.divisors?.join(", ")}</Typography>
              {info.funFacts?.map((fact, index) => (
                <Typography key={"funFact" + index}>{fact}</Typography>
              ))}
            </CardContent>
          </Card>
        )}
      </Stack>
    </>
  );
};

export default NumberInfo;
