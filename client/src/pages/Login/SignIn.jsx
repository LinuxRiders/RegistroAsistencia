import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const defaultTheme = createTheme();

export default function SignIn() {
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
          }}
        >
          {/* Círculo azul detrás de la columna derecha */}
          <Box
            sx={{
              position: "absolute",
              top: "-100%",
              right: "-55%",
              width: 1600,
              height: 1600,
              borderRadius: "50%",
              backgroundColor: "rgba(25,77,132,1)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
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
              cualquier desafío y crear soluciones innovadoras que te hagan
              brillar en el mundo virtual. ¡Permítenos ser tus aliados en el
              viaje hacia el éxito en línea!
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
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              mt: -40, // Ajuste del margen superior para mover el contenido hacia arriba
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
              style={{ width: 260, height: 120, marginBottom: "16px" }}
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
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Alert from "@mui/material/Alert";

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../../context/AuthProvider";

// import { accesUserRequest } from "../../api/api";
// import { useEffect } from "react";

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const [usuario, setUsuario] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorResponse, setErrorResponse] = useState("");

//   const { isAuthenticated, saveUser } = useAuth();
//   const goTo = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) goTo("/", { replace: true });
//     // return <Navigate to="/Home" replace />;
//   }, [isAuthenticated]);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const response = await accesUserRequest({
//         usuario,
//         password,
//       });

//       if (response.ok) {
//         console.log("Acceso Exitoso");
//         setErrorResponse("");
//         const json = await response.json();

//         if (json.accessToken && json.refreshToken) {
//           console.log(json);
//           saveUser(json);
//         }
//       } else {
//         console.log("Algo Ocurrio");
//         const json = await response.json();
//         setErrorResponse(json.error);
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: "100vh", p: 0, m: 0 }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             height: "100",
//             backgroundImage:
//               "url(https://mentor.pe/wp-content/uploads/2023/09/UAC-frontis.jpg)",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               backdropFilter: "blur(3px)",
//             }}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={8}
//           md={5}
//           component={Paper}
//           elevation={10}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center", // Centra el contenido verticalmente
//           }}
//         >
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar
//               src="https://upload.wikimedia.org/wikipedia/commons/e/e4/CRSL_01.png"
//               sx={{ m: 1, width: 120, height: 120 }}
//             />
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             {!!errorResponse && (
//               <Alert severity="error" sx={{ width: "90%", my: 2 }}>
//                 {errorResponse}
//               </Alert>
//             )}
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="usuario"
//                 label="Usuario"
//                 name="usuario"
//                 autoComplete="usuario"
//                 autoFocus
//                 value={usuario}
//                 onChange={(e) => setUsuario(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link to={"/register"}>
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
