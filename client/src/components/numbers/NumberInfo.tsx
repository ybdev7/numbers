import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader } from "@mui/material";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { INumberInfo, NumbersWorker } from "../../utils/NumbersWorker";
import LoadingBox from "../errors/LoadingBox";

interface INumberInfoProps {
  num: number;
}

const NumberInfo = ({ num }: INumberInfoProps) => {
  const [info, setInfo] = useState<INumberInfo>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    new NumbersWorker().geNumberInfo(num).then((response) => {
      setInfo(response);
      setLoading(false);
    });
  }, [num]);

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        marginTop={10}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {loading && (
          <>
            <LoadingBox message="Processing..." />
          </>
        )}
        {!loading && info && (
          <Card sx={{ minWidth: 300, maxWidth: 800 }}>
            <CardHeader
              avatar={<Avatar aria-label="facts">{num}</Avatar>}
              title={`${num} Number Facts`}
            />
            <CardContent>
              <Typography>Prime: {info.isPrime ? "Yes" : "No"}</Typography>
              <Typography>Even: {info.isEven ? "Yes" : "No"}</Typography>
              <Typography>Divisors: {info.divisors?.join(",")}</Typography>
              {info.funFacts?.map((fact) => (
                <Typography>{fact}</Typography>
              ))}
            </CardContent>
          </Card>
        )}
      </Stack>
    </>
  );
};

export default NumberInfo;
