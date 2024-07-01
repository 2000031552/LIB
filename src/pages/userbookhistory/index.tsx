import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTheme, Typography } from '@mui/material';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import UserBorrowHistory from '../../components/userbookhistory';
import UserMyBooks from '../../components/usermybooks';


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

const UserBookHistory: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'flex',  }} m="20px">
      <Header title="Book History" subtitle="Borrow and Return" />
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 1 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
            label="My Books" 
            {...a11yProps(0)} 
            sx={{ 
              color: value === 0 ? colors.blueAccent[500] : 'inherit',
              '&.Mui-selected': {
                color: colors.blueAccent[500],
              }
            }} 
          />
          <Tab 
            label="Borrowed History" 
            {...a11yProps(1)} 
            sx={{ 
              color: value === 1 ? colors.blueAccent[500] : 'inherit',
              '&.Mui-selected': {
                color: colors.blueAccent[500],
              }
            }} 
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
         <UserMyBooks />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UserBorrowHistory />
      </CustomTabPanel>
    </Box>
  );
};

export default UserBookHistory;
