import * as React from "react";

import Grid from "@mui/material/Grid";

import { styled } from "@mui/system";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { searchUserRequest, registerUserRequest } from "../../api/api";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Formulario() {
  const [nroDoc, setNroDoc] = useState("");

  const [email, setEmail] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipoDoc, setTipoDoc] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoUni, setTipoUni] = useState("");
  const [universidad, setUniversidad] = useState("");

  const [user, setUser] = useState({});

  const [errorResponse, setErrorResponse] = useState("");
  const [messageResponse, setMessageResponse] = useState("");
  const [consult, setConsult] = useState(false);

  const goTo = useNavigate();

  async function handleConsult(e) {
    e.preventDefault();
    setConsult(true);
    setMessageResponse("");

    try {
      if (nroDoc != user.nroDoc) {
        setNombres("");
      }
      if (nombres != user.nombres) {
        setNroDoc("");
      }

      const response = await searchUserRequest({
        table: "participantes",
        nroDoc,
        nombres,
      });

      const json = await response.json();

      console.log(json);

      setErrorResponse(json.error);

      if (json.error) {
        setConsult(false);

        setEmail("");
        setNombres("");
        setApellidos("");
        setTipoDoc("");
        setTelefono("");
        setTipoUni("");
        setUniversidad("");
      }

      if (json.user) {
        setEmail(json.user.email);
        setNombres(json.user.nombres);
        setApellidos(json.user.apellidos);
        setTipoDoc(json.user.tipoDoc);
        setTelefono(json.user.telefono);
        setTipoUni(json.user.tipoUni);
        setUniversidad(json.user.universidad);
        setUser(json.user);
      }
    } catch (error) {}
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await registerUserRequest({ ticket, nroDoc });

      const json = await response.json();

      if (response.ok) {
        console.log("Usuario Registado");

        setMessageResponse(json.message);

        if (json.message) {
          setConsult(false);

          setNombres("");
          setTicket("");
          setCapitulo("");
          setAsociacion("");
          setSede("");
        }

        goTo("/", { replace: true });
      }
    } catch (error) {}
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

      <FormGrid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Documento Identidad"
          autoFocus
          value={nroDoc}
          onChange={(e) => setNroDoc(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          sx={{
            borderRadius: "8px",
            animation: "slideInRight 1s forwards",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Tipo Documento Identidad"
          autoFocus
          value={tipoDoc}
          onChange={(e) => setTipoDoc(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          sx={{
            borderRadius: "8px",
            animation: "slideInRight 1s forwards",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={6}>
        <TextField
          required
          fullWidth
          label="Nombres"
          autoFocus
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
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

      <FormGrid item xs={6}>
        <TextField
          required
          fullWidth
          label="Apellidos"
          autoFocus
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
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

      <FormGrid item xs={12}>
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
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
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

      <FormGrid item xs={12} md={12}>
        <TextField
          required
          fullWidth
          label="Telefono"
          type="number"
          autoFocus
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          sx={{
            borderRadius: "8px",
            animation: "slideInRight 2s ease-in-out",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>


      <FormGrid item xs={12} md={8}>
        <TextField
          required
          fullWidth
          label="Universidad"
          autoFocus
          value={universidad}
          onChange={(e) => setUniversidad(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          sx={{
            borderRadius: "8px",
            animation: "slideInLeft 2s ease-in-out",
            "@keyframes slideInLeft": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={12} md={4}>
        <TextField
          required
          fullWidth
          label="Tipo Universidad"
          autoFocus
          value={tipoUni}
          onChange={(e) => setTipoUni(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              backgroundColor: 'transparent',
              padding: '0 4px',
              transform: 'translate(14px, 12px) scale(1)',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -6px) scale(0.75)',
                backgroundColor: 'transparent',
              }
            },
          }}
          InputProps={{
            sx: {
              color: "white",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
          sx={{
            borderRadius: "8px",
            animation: "slideInRight 2s ease-in-out",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={6}>
        <Button
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
          onClick={handleConsult}
        >
          Consultar
        </Button>
      </FormGrid>

      <FormGrid item xs={6}>
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
          Registrar
        </Button>
      </FormGrid>
    </Grid>
  );
}
