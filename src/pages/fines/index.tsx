import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef , GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Fines: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id" }, 
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1},
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "finedue",
      headerName: "Fine Due",
      flex: 1,
      renderCell: (params) => {
        return <Typography color={colors.greenAccent[400]}>₹{params.row.cost}</Typography>;
      },
    },
    { field: "date", headerName: "Expected Returndate", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Fine Due" subtitle="Total Fine Data" />
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
       <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} slots={{ toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default Fines;
