import React from "react";
import { tokens } from "../theme";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { mockDataTeam } from "../data/mockData";
import Box from "@mui/material/Box";


const NeverBorrowedBooks: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef[] = [
      { field: "bookid", headerName: "Book Id", flex:1 },
        {
          field: "bookTitle",
          headerName: "Book Title",
          flex:1
        },
        { field: "publisheddate", headerName: "Published Date", flex:1, },
        {
          field: "genre",
          headerName: "Genre",
          flex:1,
      },
      {
        field: "author",
        headerName: "Author",
        flex:1,
    },
      ];

      return (
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
          rows={mockDataTeam}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 9 }}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          
        />
      </Box>
      );
};

export default NeverBorrowedBooks;