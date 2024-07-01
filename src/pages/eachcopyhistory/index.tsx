import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';

interface HistoryDetail {
  userid: number;
  username: string; 
  bookName: string;
  borrowedDate: string;
  returnedDate: string;
   
}

const EachCopyHistory: React.FC = () => {
  const { bookcode } = useParams<{ bookcode: string }>();
  const [historyDetails, setHistoryDetails] = useState<HistoryDetail[]>([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetch(`/api/borrowals/history`) // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setHistoryDetails(data))
      .catch(error => {
        console.error('There was an error fetching the history details!', error);
      });
  }, [bookcode]);

  const columns: GridColDef[] = [
    //{ field: 'ISBN', headerName: 'ISBN', flex: 1 },
    { field: 'userid', headerName: 'UserId', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'bookName', headerName: 'Book Name', flex: 2 },
    { field: 'borrowedDate', headerName: 'Borrowed Date', flex: 1 },
    { field: 'returnedDate', headerName: 'Returned Date', flex: 1 },
    //{ field: 'status', headerName: 'Status', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Typography variant="h4" mb="20px">
        History Details
      </Typography>
      <Box
        mt="18px"
        p="20px"
        height="75vh"
        bgcolor={colors.primary[400]}
        borderRadius="8px"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={historyDetails.map((detail, index) => ({ userid: index, ...detail }))}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 9 }}
           
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default EachCopyHistory;
