import React, { useEffect, useState } from 'react';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
interface Book {
  id: number;
  ISBN: string;
  name: string;
  author: string;
  genre: string;
  borrowedcount: number;  
  overduecount: number;
}
const Bookstatus: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();    
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetch('/api/books') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);
  
  const handleCellClick = (params: { field: string; id: string | number }) => {
    if (params.field === 'name') {
      navigate(`/bookdetails/${params.id}`);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", },
    { field: "ISBN", headerName: "ISBN", flex: 1, },
    { field: "name", headerName: "BookTitle", cellClassName: "name-column--cell", flex: 2, },
    { field: "author", headerName: "Author", flex: 1, },
    { field: "genre", headerName: "Genre", flex: 1, },
    { field: "borrowedcount", headerName: "Borrowedcount", flex: 1, },
    { field: "overduecount", headerName: "Overduecount", flex: 1, }
  ];

  return (
     <Box m="20px">
      <Header title="Status" subtitle="Book Status" />
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
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          onCellClick={handleCellClick}
        />
      </Box>
    </Box>
  );
};


export default Bookstatus;
