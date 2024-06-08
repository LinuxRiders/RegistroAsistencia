import { Box, Card, Paper } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        my: 8,
        mx: 4,
      }}
    >
      <Card component={Paper}>CARTA</Card>
    </Box>
  );
}
