import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTheme, Typography } from '@mui/material';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Reports: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 100 },
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
  ];

  return (
    <Box sx={{ width: 'flex',  }} m="20px">
      <Header title="Reports" subtitle="Reports and Data" />
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 1 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
            label="Tab One" 
            {...a11yProps(0)} 
            sx={{ 
              color: value === 0 ? colors.blueAccent[500] : 'inherit',
              '&.Mui-selected': {
                color: colors.blueAccent[500],
              }
            }} 
          />
          <Tab 
            label="Tab Two" 
            {...a11yProps(1)} 
            sx={{ 
              color: value === 1 ? colors.blueAccent[500] : 'inherit',
              '&.Mui-selected': {
                color: colors.blueAccent[500],
              }
            }} 
          />
          <Tab 
            label="Tab Three" 
            {...a11yProps(2)} 
            sx={{ 
              color: value === 2 ? colors.blueAccent[500] : 'inherit',
              '&.Mui-selected': {
                color: colors.blueAccent[500],
              }
            }} 
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
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
          }}
        >
          <DataGrid
            rows={mockDataTeam}
            columns={columns}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
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
          }}
        >
          <DataGrid
            rows={mockDataTeam}
            columns={columns}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
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
          }}
        >
          <DataGrid
            rows={mockDataTeam}
            columns={columns}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default Reports;
