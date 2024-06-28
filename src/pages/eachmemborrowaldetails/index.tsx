import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';

interface BorrowalDetail {
  id: number;
  ISBN: string;
  bookCode: string;
  bookName: string;
  borrowedDate: string;
  dueDate: string;
  status: string;
}

const BorrowalDetails: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [borrowalDetails, setBorrowalDetails] = useState<BorrowalDetail[]>([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetch(`/api/members/${memberId}/borrowals`) // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setBorrowalDetails(data))
      .catch(error => {
        console.error('There was an error fetching the borrowal details!', error);
      });
  }, [memberId]);

  const columns: GridColDef[] = [
    { field: 'ISBN', headerName: 'ISBN', flex: 1 },
    { field: 'bookCode', headerName: 'Book Code', flex: 1 },
    { field: 'bookName', headerName: 'Book Name', flex: 2 },
    { field: 'borrowedDate', headerName: 'Borrowed Date', flex: 1 },
    { field: 'dueDate', headerName: 'Due Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Typography variant="h4" mb="20px">
        Borrowal Details
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
          rows={borrowalDetails.map((detail, index) => ({ id: index, ...detail }))}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default BorrowalDetails;
