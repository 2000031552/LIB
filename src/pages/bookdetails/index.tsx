import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataBookdetails } from '../../data/mockData';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const BookDetails: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: 'userid', headerName: 'User ID', flex: 0.3 },
    { field: 'username', headerName: 'Username', flex: 0.5 },
    //{ field: 'ISBN', headerName: 'ISBN', flex: 0.5},
    { field: 'bookcode', headerName: 'Book Code',flex: 0.5 },
    { field: 'borroweddate', headerName: 'Borrowed Date', flex: 0.5 },
    { field: 'duedate', headerName: 'Due Date',flex: 0.5 },
     
    { field: 'status', headerName: 'Status', flex: 0.5},
  ];
  const navigate = useNavigate();

  return (
    <Box m="20px">
    <Header title="Status" subtitle="" />
     <Box>
        <Button type="button" color="secondary" variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>
    <Box
      mt="18px"
      p="20px"
      height="75vh"
      bgcolor={colors.primary[400]}
      borderRadius="8px"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: `${colors.blueAccent[700]} !important`,
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: `${colors.blueAccent[700]} !important`,
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: `${colors.blueAccent[700]} !important`,
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
     <DataGrid
          rows={mockDataBookdetails}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
    </Box>
  </Box>
);
};

export default BookDetails;
