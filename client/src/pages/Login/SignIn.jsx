import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Info from "../../components/Login/Info";
import FormLogin from "../../components/Login/FormLogin";
import { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";

const defaultTheme = createTheme();

export default function SignIn() {
  const [animate, setAnimate] = useState(false);

  const handleAnimate = () => setAnimate((show) => !show);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: "#ededed",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CssBaseline />

        {/* Sección izquierda */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            position: "relative",
            // zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "absolute",
              top: "10%",
              right: "5%",
              zIndex: 2,
              transition: "transform 2s ease-in-out", // Transición CSS para animar el movimiento
              transform: animate ? "none" : "translateX(-200%)",
            }}
          >
            <img
              src="https://repositorio.uandina.edu.pe/themes/Mirage2/images/logo-uac.png"
              alt="Logo"
              style={{
                width: 260,
                height: 120,
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                textAlign: "center",
                color: "white",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Juntos por el cambio. GAAAAAAA.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                mb: 4,
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
              onClick={handleAnimate} // Llamar a la función al hacer clic en el botón
            >
              Conocenos
            </Button>
          </Box>
          <Box
            sx={{
              p: 15,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative", // Contenedor principal con posición relativa
              zIndex: 1,
              transition: "transform 1s .7s ease-in-out", // Transición CSS para animar el movimiento
              transform: animate ? "translateX(100%)" : "none", // Aplicar transformación
            }}
          >
            <Info
              sx={{
                p: 15,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transition: "all .2s 1s", // Transición CSS para animar la opacidad
                opacity: animate ? 0 : 1, // Controlar la opacidad según el estado de animate
                zIndex: animate ? 0 : 1,
              }}
            />
            <FormLogin
              sx={{
                p: 20,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transition: "all .2s 1s", // Transición CSS para animar la opacidad
                opacity: animate ? 1 : 0, // Controlar la opacidad según el estado de animate
                zIndex: animate ? 1 : 0,
              }}
            />
          </Box>
        </Grid>
        {/* Sección derecha */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            position: "relative",
            // zIndex: 1,
            transition: animate
              ? "all 2s linear(0 0%, 0 99.99%, 1 100%)"
              : "all 2s linear (1 0%, 1 99.99%, 0 100%)",
            zIndex: animate ? 0 : 1,
          }}
        >
          {/* Círculo azul detrás de la columna derecha */}
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              right: "-100%",
              width: "200%",
              height: "200%",
              borderRadius: "50%",
              backgroundColor: "rgba(25,77,132,1)",
              zIndex: 1,
              transition: "transform 1.8s ease-in-out", // Transición CSS para animar el movimiento
              transform: animate ? "translateX(-100%)" : "none", // Aplicar transformación
            }}
          />
          <Box
            sx={{
              width: "100%",
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "absolute",
              top: "10%",
              left: "5%",
              zIndex: 2,
              transition: "transform 2s ease-in-out", // Transición CSS para animar el movimiento
              transform: animate ? "translateX( 200%)" : "none",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                mb: 2,
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Iniciar Sesión
            </Typography>
            <img
              src="https://repositorio.uandina.edu.pe/themes/Mirage2/images/logo-uac.png"
              alt="Logo"
              style={{
                width: 260,
                height: 120,
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                textAlign: "center",
                color: "white",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Ya Soy, Parte de la Familia de la Universidad Andina del Cusco.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                mb: 4,
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
              onClick={handleAnimate} // Llamar a la función al hacer clic en el botón
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Grid>
        {/* Imagen fuera de la columna derecha, encima del círculo azul */}
        <img
          src="https://komprad.com/wp-content/uploads/2023/09/undraw_press_play_trans-1024x823.png"
          alt="Google Logo"
          style={{
            width: 530,
            height: 430,
            position: "absolute",
            top: "78%",
            right: "7%",
            zIndex: 1,
            transition: "transform 1s .7s ease-in-out", // Transición CSS para animar el movimiento
            transform: animate ? "translateX(100%)" : "translateY(-50%)", // Aplicar transformación
          }}
        />
        {/* Imagen fuera de la columna derecha, encima del círculo azul */}
        <img
          src="https://komprad.com/wp-content/uploads/2023/09/undraw_press_play_trans-1024x823.png"
          alt="Google Logo"
          style={{
            width: 530,
            height: 430,
            position: "absolute",
            top: "78%",
            left: "7%",
            zIndex: 1,
            transition: "transform 1s .7s ease-in-out", // Transición CSS para animar el movimiento
            transform: animate ? "translateY(-50%)" : "translateX(-100%)", // Aplicar transformación
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
