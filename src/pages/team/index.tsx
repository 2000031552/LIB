import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SchoolIcon from '@mui/icons-material/School';
import Header from "../../components/Header";

const Team: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  interface Member {
    id: number;
    name: string;
    email: string;
    access: string;
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "access",
      headerName: "Access Level",
      width: 200,
      renderCell: (params) => {
        const { access } = params.row as Member;
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            bgcolor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
            borderRadius="5px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "student" && <SchoolIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Members" subtitle="Total Members In DataBase" />
      </Box>
      <Box
        m="8px 0 0 0"
        height="80vh"
        display="flex"
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
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
