import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Formulario from "./Formulario";
import FormularioP from "./FormularioP";

export default function Asistencia() {
  const [table, setTable] = useState(false);
  const [showFormP, setShowFormP] = useState(false);

  return (
    <>
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
        <Button
          component={Link}
          to={"register"}
          replace
          variant="contained"
          startIcon={<GroupAddIcon />}
        >
          Create User
        </Button>
        <Button
            onClick={() => setShowFormP(!showFormP)}           //Here
            variant="contained"
            sx={{ mb: 3 , backgroundColor: "#2B4E77"}}
          >
            {showFormP ? "➤ Cambiar a Participante" : "➤ Cambiar a Ponente"}
          </Button> 
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
          
          

          {showFormP ? <FormularioP /> : <Formulario />}
          
        </Box>
        <Button
          component={Link}
          to={table ? "/" : "table"}
          replace
          onClick={() => setTable(!table)}
          variant="contained"
          fullWidth
          sx={{ p: 2, width: "auto", my: 2 }}
        >
          <ExpandMoreIcon />
        </Button>

        <Outlet />
      </Box>
    </>
  );
}
