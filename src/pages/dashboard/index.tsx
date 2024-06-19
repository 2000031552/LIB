import React from 'react';
import {
  Box as MuiBox,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
//import Grid from "@mui/material/Unstable_Grid2"; // Import Grid from Material-UI
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BookIcon from '@mui/icons-material/Book';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupIcon from '@mui/icons-material/Group';
import Header from "../../components/Header";
import RecentlyAddedBooks from "../../components/RecentlyAddedBooks";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

// Alias for Box with explicit props type
const Box: React.FC<React.ComponentProps<typeof MuiBox>> = MuiBox;

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleMembersClick = () => {
    navigate('/team');
  };

  const handleBooksClick = () => {
    navigate('/contacts');
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            onClick={handleMembersClick}
            sx={{ cursor: 'pointer', width: '100%', height: '100%' }}
          >
            <StatBox
              title="12,361"
              subtitle="Members"
              icon={<GroupIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} progress={0} increase={''}             />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            onClick={handleBooksClick}
            sx={{ cursor: 'pointer', width: '100%', height: '100%' }}
          >
            <StatBox
              title="431,225"
              subtitle="Available books"
              icon={<BookIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} progress={0} increase={''}            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            sx={{ width: '100%', height: '100%' }}
          >
            <StatBox
              title="3,8767"
              subtitle="Books Borrowed"
              icon={<LocalLibraryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} progress={0} increase={''}            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            sx={{ width: '100%', height: '100%' }}
          >
            <StatBox
              title="1,325,134"
              subtitle="Amount to be collected"
              icon={<RequestQuoteOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} progress={0} increase={''}             />
          </Box>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          spacing={1}
        >
          <Grid item xs={12}>
            <Box bgcolor={colors.primary[400]} p="30px" borderRadius="8px">
              <Typography variant="h5" fontWeight="600">
                Campaign
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                <ProgressCircle size={125} />
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  sx={{ mt: "15px" }}
                >
                  $48,352 revenue generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box bgcolor={colors.primary[400]} p="30px" borderRadius="8px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                {/* Replace BarChart component with a placeholder */}
                <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgrey' }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            bgcolor={colors.primary[400]}
            maxHeight="100vh"
            overflow="auto"
            m="25px 0 0 0"
            borderRadius="8px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Requests
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[100]}
                  >
                    {transaction.requestId}
                  </Typography>
                  <Typography color={colors.grey[100]} alignContent="center">
                    {transaction.bookTitle}
                  </Typography>
                </Box>
                <Box
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                  alignContent="left"
                >
                  {transaction.author}
                </Box>
                <Box
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.userId}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
