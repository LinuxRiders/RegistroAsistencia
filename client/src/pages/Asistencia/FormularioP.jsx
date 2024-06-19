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

export default function FormularioP() {
  const [nroDoc, setnroDoc] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [denom, setDenom] = useState("");
  const [grado, setGrado] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoUni, setTipoUni] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [presentacion, setPresentacion] = useState("");

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
        setnroDoc("");
      }

      const response = await searchUserRequest({
        table: "ponentes",
        nroDoc,
        nombres,
      });

      const json = await response.json();

      console.log(json);

      setErrorResponse(json.error);

      if (json.error) {
        setConsult(false);

        setNombres("");
        setApellidos("");
        setDenom("");
        setGrado("");
        setTelefono("");
        setTipoUni("");
        setUniversidad("");
        setPresentacion("");
      }

      if (json.user) {
        setNombres(json.user.nombres);
        setApellidos(json.user.apellidos);
        setDenom(json.user.denom);
        setGrado(json.user.grado);
        setTelefono(json.user.telefono);
        setTipoUni(json.user.tipoUni);
        setUniversidad(json.user.universidad);
        setPresentacion(json.user.presentacion);
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
        setMessageResponse(json.message);
        if (json.message) {
          setConsult(false);
          setNombres("");
          setTicket("");
          setCapitulo("");
          setAsociacion("");
          setInscrito("");
          setSede("");
        }
        goTo("/", { replace: true });
      }
    } catch (error) {}
  }

  return (
    <Grid container spacing={3}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          mb: 3,
          justifyContent: "center",
        }}
      ></Box>

      {!!errorResponse && (
        <FormGrid item xs={12}>
          <Alert severity="error" sx={{ width: "90%", my: 2, mx: "auto" }}>
            {errorResponse}
          </Alert>
        </FormGrid>
      )}

      <FormGrid item xs={12} md={9}>
        <TextField
          required
          fullWidth
          label="Documento Identidad"
          autoFocus
          value={nroDoc}
          onChange={(e) => setnroDoc(e.target.value)}
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
            animation: "slideInRight 1s forwards",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={12} md={3}>
        <TextField
          required
          fullWidth
          label="Denominacion"
          autoFocus
          value={denom}
          onChange={(e) => setDenom(e.target.value)}
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
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
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
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
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
            animation: "fadeInUp 2s ease-in-out",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={3}>
        <TextField
          required
          fullWidth
          label="Grado"
          autoFocus
          value={grado}
          onChange={(e) => setGrado(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
            animation: "fadeInUp 2s ease-in-out",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={12} md={9}>
        <TextField
          required
          fullWidth
          label="Celular"
          type="number"
          autoFocus
          value={telefono}
          InputLabelProps={{
            style: { color: "white" },
          }}
          onChange={(e) => setTelefono(e.target.value)}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
            animation: "slideInRight 1s forwards",
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
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
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
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
            animation: "slideInRight 2s ease-in-out",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={12}>
        <TextField
          required
          fullWidth
          multiline
          rows={2} // Número de líneas visibles inicialmente
          variant="outlined"
          label="Nombre de Presentación"
          autoFocus
          value={presentacion}
          onChange={(e) => setPresentacion(e.target.value)}
          InputLabelProps={{
            style: { color: "white", minHeight: "120px" },
          }}
          sx={{
            border: "0.5px solid white",
            borderRadius: "8px", //Here
            animation: "fadeInUp 2s ease-in-out",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
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
