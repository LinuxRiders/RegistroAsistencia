import * as React from "react";

import Grid from "@mui/material/Grid";

import { styled } from "@mui/system";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
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

  return (
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
          <Alert severity="success" sx={{ width: "90%", my: 2, mx: "auto" }}>
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
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Email"
          type="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={8}>
        <TextField
          required
          fullWidth
          label="Contraseña"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={4}>
        <FormControl fullWidth required variant="outlined">
          <InputLabel id="role-label">Rol de Usuario</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Rol de Usuario"
            autoFocus
          >
            <MenuItem value="registrador">Registrador</MenuItem>
            <MenuItem value="editor">Editor</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          <FormHelperText>Seleccione un rol de usuario</FormHelperText>
        </FormControl>
      </FormGrid>
      <FormGrid item xs={12}>
        <Button
          //   disabled={inscrito === "" || ticket === 0 ? true : false}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "20%", mx: "auto" }}
          onClick={handleSubmit}
        >
          Crear usuario
        </Button>
      </FormGrid>
    </Grid>
  );
}
