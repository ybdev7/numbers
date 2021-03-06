import { Box, Typography } from "@mui/material";

interface IErrorBoxProps {
  error?: Error;
  message: string;
  isShowError?: boolean;
}
const SimpleError = ({
  error,
  message,
  isShowError = false,
}: IErrorBoxProps) => {
  return (
    <>
      <Box margin={10} sx={{ width: "90%" }}>
        <Typography variant="h5" gutterBottom component="div">
          {message}
          {isShowError && error && <p>Error: {error.message}</p>}
        </Typography>
      </Box>
    </>
  );
};

export default SimpleError;
