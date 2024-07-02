import React from 'react';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataBookdetails, mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';
import { useNavigate, useParams } from 'react-router-dom';

const EachCopyDetails: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams<{ id: string }>();
  const book = mockDataContacts.find((book) => book.id === parseInt(id, 10));
  const navigate = useNavigate();
  
  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    { 
      field: 'bookcode', 
      headerName: 'Book Code', 
      flex: 0.3,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <Typography
          sx={{ cursor: 'pointer' ,   justifyContent: 'center'}}
          onClick={() => navigate(`/eachcopyhistory/${params.row.bookcode}`)}
        >
          {params.value}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="15px" mt="5px">
      <Box m="25px">
        <Header title="Book Details" subtitle={''} />
        <Paper elevation={5} sx={{
          padding: '16px',
          backgroundColor: colors.greenAccent[500], // Change this to any color you prefer
        }}>
          <Typography variant="h2" sx={{ color: colors.greenAccent[800], fontWeight: 'bold', fontStyle: 'italic' }}>{book.name}</Typography><br/>
          <Typography variant="body1" sx={{ color: colors.blueAccent[600] }}><span style={{textTransform: 'uppercase'}}>Author:</span> <span style={{ marginLeft: '8px' }}>{book.author}</span></Typography>
          <Typography variant="body1" sx={{ color: colors.blueAccent[600] }}><span style={{textTransform: 'uppercase'}}>Published Date:</span> <span style={{ marginLeft: '8px' }}>{book.publisheddate}</span></Typography>
          <Typography variant="body1" sx={{ color: colors.blueAccent[600] }}><span style={{textTransform: 'uppercase'}}>Total Copies:</span> <span style={{ marginLeft: '8px' }}>{book.total}</span>  </Typography><br/>
          {/* <Typography variant="body1" sx={{ color: colors.blueAccent[600] }}><span style={{textTransform: 'uppercase'}}>Description:</span> <span style={{ marginLeft: '8px' }}>{book.description}</span>  </Typography> */}
        </Paper>
      </Box>
      <br/>
      <Header title="Each Copy History" subtitle="" />
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
      <br/>
      <Box>
        <Button type="button" color="secondary" variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default EachCopyDetails;
