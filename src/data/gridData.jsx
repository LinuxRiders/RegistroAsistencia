import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export const columns = [
    { field: 'id', headerName: 'CodigoCIP', width: 90 },
    { field: 'TipoDoc', headerName: 'TipoDoc', width: 200 },
    { field: 'DocIdentidad', headerName: 'DocIdentidad', width: 130 },
    { field: 'Nombres', headerName: 'Nombres', width: 100 },
    {field: 'Capitulo',headerName: 'Capitulo',width: 130,},
    { field: 'Asociacion', headerName: 'Asociacion', width: 130 },
    { field: 'Inscrito', headerName: 'Inscrito', width: 120 },
    { field: 'Sede', headerName: 'Sede', width: 120 },
    { field: 'Ticket', headerName: 'Ticket', width: 120 },
    { field: 'HoraAsistencia', headerName: 'HoraAsistencia', width: 120 },
  ];

  export const rows = [
    {
      id: {id},
      pageTitle: {TipoDoc},
      eventCount:{ DocIdentidad},
      users: {Nombres},
      viewsPerUser: {Capitulo},
      averageTime: {Asociacion},
      conversions: {Inscrito},
      conversions: {Sede},
      conversions: {Ticket},
      conversions: {HoraAsistencia},
    },
  ];
const renderStatus=(params)=> {
 
  const colors = {
    new: 'info',
    verified: 'success',
    blocked: 'error',
    uncertain: 'default',
  };

  return (
    <Chip
      label={params.value.status}
      color={colors[params.value.status]}
      variant="outlined"

    />
  );
}
export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: 'white',
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}
export default renderStatus;
