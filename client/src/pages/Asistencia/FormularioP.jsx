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
  const [nroDoc, setNroDoc] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [grado, setGrado] = useState("");
  const [tipoUni, setTipoUni] = useState("");
  const [denom, setDenom] = useState("");
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
      let response;

      const searchParams = [
        { key: "nroDoc", value: nroDoc },
        { key: "nombres", value: nombres },
        { key: "apellidos", value: apellidos },
        // Añade aquí más campos si es necesario
      ];

      for (const param of searchParams) {
        if (param.value && param.value !== user[param.key]) {
          response = await searchUserRequest({
            table: "ponentes",
            [param.key]: param.value,
          });
          break;
        }
      }

      if (!response) {
        console.error("Respuesta Vacía");
        return;
      }

      const json = await response.json();

      console.log(json);

      setErrorResponse(json.error);

      if (json.error) {
        setConsult(false);

        setNroDoc("");
        setNombres("");
        setApellidos("");
        setTelefono("");
        setPresentacion("");
        setGrado("");
        setTipoUni("");
        setDenom("");
        setUniversidad("");
      }

      if (json.user) {
        setNroDoc(json.user.nroDoc ?? "");
        setTelefono(json.user.telefono ?? "");
        setNombres(json.user.nombres ?? "");
        setApellidos(json.user.apellidos ?? "");
        setPresentacion(json.user.presentacion ?? "");
        setGrado(json.user.grado ?? "");
        setTipoUni(json.user.tipoUni ?? "");
        setDenom(json.user.denom ?? "");
        setUniversidad(json.user.universidad ?? "");
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
          setCelular("");
          setNombres("");
          setApellidos("");
          setPresent("");
          setGrado("");
          setTipoUni("");
          setDenominacion("");
          setUniversidad("");
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
          label="Celular"
          type="number"
          autoFocus
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
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
          onChange={(e) => setNombres(e.target.value.toUpperCase())}
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
          onChange={(e) => setApellidos(e.target.value.toUpperCase())}
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
          label="Grado"
          autoFocus
          value={grado}
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
          onChange={(e) => setGrado(e.target.value)}
          sx={{
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
          label="Tipo Universidad"
          autoFocus
          value={tipoUni}
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
          onChange={(e) => setTipoUni(e.target.value)}
          sx={{
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
          label="Denominación"
          autoFocus
          value={denom}
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
          onChange={(e) => setDenom(e.target.value)}
          sx={{
            animation: "slideInRight 1s forwards",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        />
      </FormGrid>

      <FormGrid item xs={12} md={9}>
        <TextField
          required
          fullWidth
          label="Universidad"
          autoFocus
          value={universidad}
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
          onChange={(e) => setUniversidad(e.target.value)} //Question Here
          sx={{
            animation: "slideInRight 1s forwards",
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
          rows={2}
          label="Nombre de Presentación"
          autoFocus
          value={presentacion}
          onChange={(e) => setPresentacion(e.target.value)}
          InputLabelProps={{
            style: { color: "white" },
            sx: {
              minHeight: "120px",
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
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
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
        >
          Registrar
        </Button>
      </FormGrid>
    </Grid>
  );
}
