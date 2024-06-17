import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const defaultTheme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", backgroundColor: "#ededed", overflow: "hidden", position: "relative" }}>
        <CssBaseline />
        {/* Círculo azul detrás de la columna derecha */}
        <Box
          sx={{
            position: 'absolute',
            top: '-100%',
            right: '-55%',
            width: 1600,
            height: 1600,
            borderRadius: '50%',
            backgroundColor: 'rgba(25,77,132,1)',
            zIndex: 0,
          }}
        />
        {/* Sección izquierda */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
          <Box
            sx={{
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography component="h4" variant="h4" sx={{ mb: 2, fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}>
              V Encuentro de la Red de Calidad de La Universidad Peruana
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins, sans-serif", fontWeight: "bold"  }}>
              Bienvenidos
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', fontFamily: "Poppins, sans-serif"  }}>
              Con nuestra experiencia y dedicación, estamos listos para resolver cualquier desafío y crear soluciones innovadoras que te hagan brillar en el mundo virtual. ¡Permítenos ser tus aliados en el viaje hacia el éxito en línea!
            </Typography>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/CRSL_01.png"
              alt="Logo"
              style={{ width: 200, height: 200, marginBottom: '16px' }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: 'rgba(25,77,132,1)', color: 'white', mb: 4, fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
              href="https://www.uandina.edu.pe/" // Link de ejemplo
            >
              UAC
            </Button>
            <Typography variant="body1" sx={{ mb: 2, fontFamily: "Poppins, sans-serif"  }}>
              Conócenos en nuestras redes sociales
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link to="https://www.facebook.com/UniversidadAndinaCusco/?locale=es_LA">
                <FacebookIcon fontSize="large" sx={{ color: 'blue' }} />
              </Link>
              <Link to="https://www.instagram.com/universidadandinacusco/">
                <InstagramIcon fontSize="large" sx={{ color: 'purple' }} />
              </Link>
            </Box>
          </Box>
        </Grid>
        {/* Sección derecha */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              mt: -40, // Ajuste del margen superior para mover el contenido hacia arriba
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2, color: 'white', fontFamily: "Poppins, sans-serif", fontWeight: "bold"  }}>
              Iniciar Sesión
            </Typography>
            <img
              src="https://repositorio.uandina.edu.pe/themes/Mirage2/images/logo-uac.png"
              alt="Logo"
              style={{ width: 260, height: 120, marginBottom: '16px' }}
            />
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'white', fontFamily: "Poppins, sans-serif"  }}>
              Ya Soy, Parte de la Familia de la Universidad Andina del Cusco.
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderColor: 'white', color: 'white', mb: 4, fontFamily: "Poppins, sans-serif", fontWeight: "bold"  }}
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
            position: 'absolute',
            top: '78%',
            right: '7%',
            transform: 'translateY(-50%)',
            zIndex: 1
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
