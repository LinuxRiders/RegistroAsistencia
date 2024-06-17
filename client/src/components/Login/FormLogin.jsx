import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SchoolIcon from "@mui/icons-material/School";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Alert, Grid, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { accesUserRequest } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useEffect } from "react";

export default function FormLogin({ sx = {} }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const { isAuthenticated, saveUser } = useAuth();
  const goTo = useNavigate();

  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await accesUserRequest({
        usuario,
        password,
      });

      if (response.ok) {
        console.log("Acceso Exitoso");
        setErrorResponse("");
        const json = await response.json();

        if (json.accessToken && json.refreshToken) {
          console.log(json);
          saveUser(json);
        }
      } else {
        console.log("Algo Ocurrio");
        const json = await response.json();
        setErrorResponse(json.error);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isAuthenticated) goTo("/", { replace: true });
    // return <Navigate to="/Home" replace />;
  }, [isAuthenticated]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        ...sx, // Aplicar estilos adicionales desde las props
      }}
    >
      <Typography variant="h4" style={{ fontFamily: "Poppins, sans-serif" }}>
        Universidad Andina del Cusco
      </Typography>
      <Avatar
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/CRSL_01.png"
        sx={{ m: 1, width: 220, height: 220 }}
      />
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {!!errorResponse && (
          <Grid item xs={12}>
            <Alert severity="error" sx={{ width: "90%", my: 2, mx: "auto" }}>
              {errorResponse}
            </Alert>
          </Grid>
        )}

        <Grid item xs={12} md={12}>
          <TextField
            required
            fullWidth
            autoFocus
            label="Usuario"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="top">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            fullWidth
            autoFocus
            type={showPassword ? "password" : ""}
            label="Contraseña"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="top">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "rgba(25,77,132,1)",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
        }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
}
