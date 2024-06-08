import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../data/gridData';

const  Tablas=()=> {
  return (
    <>
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 3 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 25, 50]}
      disableColumnResize
      style={{ backgroundColor: 'white', color: 'black' }}
    />
    </>
  );
}

export default Tablas;