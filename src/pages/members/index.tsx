import React, { useEffect, useState }  from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef , GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SchoolIcon from "@mui/icons-material/School";
import Header from "../../components/Header";

const Members: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  interface Member {
    id: number;
    name: string;
    email: string;
    access: string;
  }
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch('/api/members') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => {
        console.error('There was an error fetching the members!', error);
      });
  }, []);
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 3 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 2,
      renderCell: (params) => {
        const { access } = params.row as Member;
        return (
          <Box
            maxWidth="60%"
            m="4px auto"
            p="8px"
            display="flex"
            justifyContent="center"
            //alignItems="center"
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
      <Header title="Members" subtitle="Total Members In DataBase" />
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
    </Box>
  );
};

export default Members;
