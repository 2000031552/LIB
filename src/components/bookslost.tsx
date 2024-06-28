import React from "react";
import { tokens } from "../theme";
import { DataGrid, GridColDef , GridToolbar} from '@mui/x-data-grid';
import { useTheme, Typography } from '@mui/material';
import { mockDataTeam } from "../data/mockData";
import Box from "@mui/material/Box";


const BooksLost: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef[] = [
        { field: "bookid", headerName: "Book Id", width: 100 },
        { field: "borrowerid", headerName: "Borrower Id", width: 150 },
        {
          field: "name",
          headerName: "Name",
          width: 200,
          cellClassName: "name-column--cell",
        },
        { field: "email", headerName: "Email", width: 300 },
        {
          field: "bookTitle",
          headerName: "Book Title",
          width: 300,
        },
        {
            field: "BorrowedDate",
            headerName: "Borrowed Date",
            width: 300,
        },
        {
            field: "Timeperiod",
            headerName: "Timeperiod",
            width: 300,
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
          slots={{ toolbar: GridToolbar }}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
      );
};

export default BooksLost;