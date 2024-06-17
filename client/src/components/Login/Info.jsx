import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Info({ sx = {} }) {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        ...sx, // Aplicar estilos adicionales desde las props
      }}
    >
      <Typography
        component="h4"
        variant="h4"
        sx={{
          mb: 2,
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
        }}
      >
        V Encuentro de la Red de Calidad de La Universidad Peruana
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
        }}
      >
        Bienvenidos
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Con nuestra experiencia y dedicación, estamos listos para resolver
        cualquier desafío y crear soluciones innovadoras que te hagan brillar en
        el mundo virtual. ¡Permítenos ser tus aliados en el viaje hacia el éxito
        en línea!
      </Typography>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/CRSL_01.png"
        alt="Logo"
        style={{ width: 200, height: 200, marginBottom: "16px" }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "rgba(25,77,132,1)",
          color: "white",
          mb: 4,
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
        }}
        href="https://www.uandina.edu.pe/" // Link de ejemplo
      >
        UAC
      </Button>
      <Typography
        variant="body1"
        sx={{ mb: 2, fontFamily: "Poppins, sans-serif" }}
      >
        Conócenos en nuestras redes sociales
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link to="https://www.facebook.com/UniversidadAndinaCusco/?locale=es_LA">
          <FacebookIcon fontSize="large" sx={{ color: "blue" }} />
        </Link>
        <Link to="https://www.instagram.com/universidadandinacusco/">
          <InstagramIcon fontSize="large" sx={{ color: "purple" }} />
        </Link>
      </Box>
    </Box>
  );
}
