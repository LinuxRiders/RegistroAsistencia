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
    const [ticket, setTicket] = useState("");
    const [capitulo, setCapitulo] = useState("");
    const [asociacion, setAsociacion] = useState("");
    const [inscrito, setInscrito] = useState("");
    const [sede, setSede] = useState("");

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
            setNombres("");
            setTicket("");
            setCapitulo("");
            setAsociacion("");
            setInscrito("");
            setSede("");
        }

        if (json.user) {
            setNombres(json.user.Nombres);
            setTicket(json.user.Ticket);
            setCapitulo(json.user.Capitulo);
            setAsociacion(json.user.Asociacion);
            setInscrito(json.user.Inscrito);
            setSede(json.user.Sede);
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
        >
            <img
            src="https://i.ibb.co/h7gY1V0/1a.png"
            alt="Consejo Departamental de Cusco"
            style={{
                width: 210,
                height: "auto",
                marginRight: 20,
                marginBottom: 10,
            }}
            />
            <Box sx={{ textAlign: "center" }}>
            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold", color: "black" }}>
                UNIVERSIDAD ANDINA DEL CUSCO
            </Typography>
            <Typography component="h2" variant="h6" sx={{ color: "black" }}>
                CONTROL DE REGISTRO DE PONENTE
            </Typography>
            </Box>
        </Box>

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

        {inscrito === "" && consult && (
            <FormGrid item xs={12}>
            <Alert severity="error" sx={{ width: "90%", my: 2, mx: "auto" }}>
                El ponente no está Inscrito
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
            onChange={(e) => setnroDoc(e.target.value)}
            InputProps={{
                style: { color: 'black' }
            }}
            InputLabelProps={{
                style: { color: 'black' }
            }}
            />
        </FormGrid>

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Ticket"
            type="number"
            autoFocus
            value={ticket}
            InputLabelProps={{
                shrink: Boolean(nombres),
                style: { color: 'black' }
            }}
            onChange={(e) => setTicket(e.target.value)}
            />
        </FormGrid>

        <FormGrid item xs={12}>
            <TextField
            required
            fullWidth
            label="Apellidos y Nombre"
            autoFocus
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            InputLabelProps={{
                shrink: Boolean(nombres),
                style: { color: 'black' }
            }}
            />
        </FormGrid>

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Capitulo"
            autoFocus
            value={capitulo}
            InputLabelProps={{
                shrink: Boolean(nombres),
                style: { color: 'black' }
            }}
            />
        </FormGrid>

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Tipo Asociacion"
            autoFocus
            value={asociacion}
            InputLabelProps={{
                shrink: Boolean(nombres),
                style: { color: 'black' }
            }}
            />
        </FormGrid>

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Inscrito"
            autoFocus
            value={inscrito}
            InputLabelProps={{
                shrink: Boolean(nombres),
                style: { color: 'black' }
            }}
            />
        </FormGrid>

        <FormGrid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            label="Sede"
            autoFocus
            value={sede}
            InputLabelProps={{
                shrink: Boolean(nombres),
                style: { color: 'black' }
            }}
            />
        </FormGrid>

        <FormGrid item xs={6}>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleConsult}
            sx={{ mt: 3, mb: 2, width: "50%", mx: "auto" }}
            >
            Consultar
            </Button>
        </FormGrid>

        <FormGrid item xs={6}>
            <Button
            disabled={inscrito === "" || ticket === 0}
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2, width: "50%", mx: "auto" }}
            >
            Registrar
            </Button>
        </FormGrid>
        </Grid>
    );
    }
