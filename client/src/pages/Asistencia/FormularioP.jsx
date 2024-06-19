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
    const [celular, setCelular] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [present, setPresent] = useState("");
    const [grado, setGrado] = useState("");
    const [tipoUni, setTipoUni] = useState("");
    const [denominacion, setDenominacion] = useState("");
    const [universidad, setUniversidad] = useState("");
        
    const [errorResponse, setErrorResponse] = useState("");
    const [messageResponse, setMessageResponse] = useState("");
    const [consult, setConsult] = useState(false);

    const goTo = useNavigate();

    async function handleConsult(e) {
        e.preventDefault();
        setConsult(true);
        setMessageResponse("");

        try {
        const response = await searchUserRequest({ nroDoc });
        const json = await response.json();

        setErrorResponse(json.error);

        if (json.error) {
            setConsult(false);
            setCelular("");
            setNombres("");
            setApellidos("");
            setPresent("");
            setGrado("");
            setTipoUni("");
            setDenominacion("");
            setUniversidad("");
        }

        if (json.user) {
            setCelular(json.user.Celular);
            setNombres(json.user.Nombres);
            setApellidos(json.user.Apellidos);
            setPresent(json.user.Present);
            setGrado(json.userGrado);
            setTipoUni(jsonTipoUni.TipoUni);
            setDenominacion(json.user.Denominacion);
            setUniversidad(json.user.Universidad);
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
        >
        </Box>

        

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Documento Identidad"
            autoFocus
            value={nroDoc}
            onChange={(e) => setnroDoc(e.target.value)}
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
            label="Celular"
            type="number"
            autoFocus
            value={celular}
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
            onChange={(e) => setCelular(e.target.value)}
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
            label="Nombre de Presentación"
            autoFocus
            value={present}
            onChange={(e) => setPresent(e.target.value)}
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

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Denominación"
            autoFocus
            value={denominacion}
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
            onChange={(e) => setDenominacion(e.target.value)}
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
            label="Universidad"
            autoFocus
            value={universidad}
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

        <FormGrid item xs={6}>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleConsult}
            sx={{
                mt: 3,
                mb: 2,
                width: "50%",
                mx: "auto",
                backgroundColor: "#183D68",
                transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
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
                transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
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
