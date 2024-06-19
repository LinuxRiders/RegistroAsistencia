import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Paper } from "@mui/material";
import { getUsersRequest } from "../api/api";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function Tabla() {
  const [rows, setRows] = useState([]);
  const [table, setTable] = useState("participantes"); // Estado para almacenar la tabla actual ("ponentes" o "participantes")

  useEffect(() => {
    getItems();
  }, [table]); // Ejecutar getItems cuando cambie el valor de 'table'

  async function getItems() {
    try {
      const response = await getUsersRequest({ table });

      if (response.ok) {
        console.log(`Tabla de ${table} recuperada`);

        const json = await response.json();
        const rowsWithIds = json.rows.map((row, index) => ({
          id: index + 1,
          ...row,
        }));
        setRows(rowsWithIds);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDownload(e) {
    e.preventDefault();

    try {
      const response = await getUsersRequest(table);

      if (response.ok) {
        console.log(`Tabla de ${table} recuperada para descargar`);

        const json = await response.json();

        // Convertir datos a formato de hoja de cálculo
        const ws = XLSX.utils.json_to_sheet(json.rows);

        // Crear un libro de trabajo
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // Guardar el libro de trabajo como archivo Excel
        XLSX.writeFile(wb, `data_${table}.xlsx`);
      }
    } catch (error) {
      console.error("Error al descargar:", error);
    }
  }

  const handleTableChange = () => {
    setTable(table === "ponentes" ? "participantes" : "ponentes");
  };
  return (
    <>
      <Box
        component={Paper}
        elevation={10}
        sx={{
          width: "100%",
          mxl: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3, // Reducido para mejor visualización en ejemplo
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleTableChange}
          sx={{ mb: 2 }}
        >
          {table === "ponentes"
            ? "➤ Cambiar a Participante"
            : "➤ Cambiar a Ponente"}
        </Button>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            checkboxSelection
            rows={rows}
            columns={
              rows.length > 0
                ? Object.keys(rows[0]).map((key) => ({
                    field: key,
                    headerName: key.toUpperCase(),
                    width: 150,
                  }))
                : []
            }
            getRowClassName={(params) =>
              params.index % 2 === 0 ? "even" : "odd"
            }
            pagination
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            disableColumnResize
            style={{ backgroundColor: "white", color: "black" }}
          />
        </div>
        <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleDownload}
        >
          Descargar Tabla de {table}
        </Button>
      </Box>
    </>
  );
}
