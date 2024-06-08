import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
} from "@mui/material";

export default function Formulario() {
  const [registro, setRegistro] = useState('');

  const handleRadioChange = (event) => {
    setRegistro(event.target.value);
  };

  const handleRadioClick = (event) => {
    if (registro === event.target.value) {
      setRegistro('');
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#222",
        p: 0,
        m: 0,
      }}
    >
      <Grid
        container
        component={Paper}
        elevation={10}
        sx={{ width: "70%", p: 3 }}
      >
        <Box
          sx={{
            my: 2,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "100%", mb: 3, justifyContent: "center" }}>
            <img src={"https://www.cipcusco.org.pe/media/dcmpl4rf/logo-web.png"} alt="Consejo Departamental de Cusco" style={{ width: 230, height: 'auto', marginRight: 20 }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                CONSEJO DEPARTAMENTAL DE CUSCO
              </Typography>
              <Typography component="h2" variant="h6">
                CONTROL DE REGISTRO DE COLEGIADOS
              </Typography>
            </Box>
          </Box>
          <Box component="form" noValidate sx={{ width: "100%", maxWidth: 400, my: 2,
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="dni"
              label="Documento de Identidad"
              name="dni"
              autoComplete="dni"
              autoFocus
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="names"
              label="Apellidos y Nombres"
              name="names"
              disabled
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="ticket"
              label="Ticket"
              name="ticket"
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="chapter"
              label="Capítulo"
              name="chapter"
              disabled
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="membership"
              label="Tipo de Asociado"
              name="membership"
              disabled
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="date"
              label="Fecha"
              name="date"
              type="date"
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="registered"
              label="Inscrito o no"
              name="registered"
              disabled
              sx={{ width: '750px' }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="branch"
              label="Sede donde se inscribió"
              name="branch"
              disabled
              sx={{ width: '750px' }}
            />
            <FormControl component="fieldset" margin="normal" sx={{ width: '300px' }}>
              <FormLabel component="legend">Tipo de registro</FormLabel>
              <RadioGroup
                row
                aria-label="registro"
                name="registro"
                value={registro}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="entrada"
                  control={<Radio onClick={handleRadioClick} />}
                  label="Entrada"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width: '300px' }}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
