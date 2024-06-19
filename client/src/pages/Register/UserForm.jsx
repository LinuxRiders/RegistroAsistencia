import * as React from "react";

import Grid from "@mui/material/Grid";

import { styled } from "@mui/system";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserRequest } from "../../api/api";
import { useAuth } from "../../context/AuthProvider";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function UserForm() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("registrador");

  const [errorResponse, setErrorResponse] = useState("");
  const [messageResponse, setMessageResponse] = useState("");

  const { getaccessToken } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await createUserRequest(getaccessToken(), {
        usuario,
        email,
        password,
        role,
      });

      const json = await response.json();

      if (!response.ok) {
        console.log("Hubo un error al registrar Usuario");

        setErrorResponse(json.error);
        return;
      }

      console.log("Usuario Registado");

      setMessageResponse(json.message);

      if (json.message) {
        setConsult(false);

        setUsuario("");
        setEmail("");
        setPassword("");
        setRole("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Diseño SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 10,
        m: 0,
        backgroundColor: "#222222", //Here
      }}
    >
      <Box
        component={Paper}
        elevation={10}
        sx={{
          width: "50%",
          mxl: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#174275", //Here
          p: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: 3,
            justifyContent: "center",
            animation: "fadeIn 2s ease-in-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <img
            src="https://i.ibb.co/h7gY1V0/1a.png"
            alt="V Encuentro de Calidad Universitaria del Perú"
            style={{
              width: 210,
              height: "auto",
              marginRight: 20,
              marginBottom: 10,
              animation: "zoomIn 2s ease-in-out",
              "@keyframes zoomIn": {
                "0%": { transform: "scale(0.8)", opacity: 0 },
                "100%": { transform: "scale(1)", opacity: 1 },
              },
            }}
          ></img>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "white",
                animation: "slideInDown 2s ease-in-out",
                fontSize: "1.5rem",
              }}
            >
              UNIVERSIDAD ANDINA DEL CUSCO
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              sx={{
                color: "white",
                animation: "slideInUp 2s ease-in-out",
                fontSize: "1rem",
              }}
            >
              CONTROL DE REGISTRO DE PARTICIPANTE
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {!!errorResponse && (
            <FormGrid item xs={12}>
              <Alert severity="error" sx={{ width: "90%", my: 2, mx: "auto" }}>
                {errorResponse}
              </Alert>
            </FormGrid>
          )}
          {!!messageResponse && (
            <FormGrid item xs={12}>
              <Alert
                severity="success"
                sx={{ width: "90%", my: 2, mx: "auto" }}
              >
                {messageResponse}
              </Alert>
            </FormGrid>
          )}

          <FormGrid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Usuario"
              autoFocus
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              InputLabelProps={{
                style: { color: "white" },
                sx: {
                  backgroundColor: "transparent",
                  padding: "0 4px",
                  transform: "translate(14px, 12px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.75)",
                    backgroundColor: "transparent",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                animation: "fadeInUp 2s ease-in-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: "white" },
                sx: {
                  backgroundColor: "transparent",
                  padding: "0 4px",
                  transform: "translate(14px, 12px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.75)",
                    backgroundColor: "transparent",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                animation: "fadeInUp 2s ease-in-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            />
          </FormGrid>
          <FormGrid item xs={12} md={8}>
            <TextField
              required
              fullWidth
              label="Contraseña"
              autoFocus
              type={showPassword ? "password" : ""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                style: { color: "white" },
                sx: {
                  backgroundColor: "transparent",
                  padding: "0 4px",
                  transform: "translate(14px, 12px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.75)",
                    backgroundColor: "transparent",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="top">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: "#fff" }}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                animation: "fadeInUp 2s ease-in-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel
                id="role-label"
                htmlFor="role-select"
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  padding: "0 4px",
                  transform: "translate(14px, 12px) scale(1)",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(14px, -6px) scale(0.75)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Rol de Usuario
              </InputLabel>
              <Select
                labelId="role-label"
                id="role-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Rol de Usuario"
                autoFocus
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              >
                <MenuItem value="registrador">Registrador</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
              <FormHelperText
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                Seleccione un rol de usuario
              </FormHelperText>
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button
              // disabled={inscrito === "" || ticket === 0}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: "50%",
                mx: "auto",
                backgroundColor: "#183D68",
                transition:
                  "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#2B4E77",
                  transform: "scale(1.05)",
                },
                animation: "fadeInUp 2s ease-in-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
              onClick={handleSubmit}
            >
              Crear usuario
            </Button>
          </FormGrid>
        </Grid>
      </Box>
    </Box>
  );
}
