import React from "react";
import {
  Box as MuiBox,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BookIcon from "@mui/icons-material/Book";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GroupIcon from "@mui/icons-material/Group";
import Header from "../../components/Header";
import RecentlyAddedBooks from "../../components/RecentlyAddedBooks";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import { useNavigate } from "react-router-dom";

// Alias for Box with explicit props type
const Box: React.FC<React.ComponentProps<typeof MuiBox>> = MuiBox;

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleMembersClick = () => {
    navigate("/members");
  };

  const handleBooksClick = () => {
    navigate("/books");
  };

  const handleReportsClick = () => {
    navigate("/reports");
    console.log("Reports clicked");
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
            onClick={handleReportsClick}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            User Reports
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
            sx={{ cursor: "pointer", width: "100%", height: "100%" }}
          >
            <StatBox
              title="12,361"
              subtitle="Members"
              icon={
                <GroupIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              progress={0.5}
              increase={"50%"}
            />
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
            sx={{ cursor: "pointer", width: "100%", height: "100%" }}
          >
            <StatBox
              title="431,225"
              subtitle="Available books"
              icon={
                <BookIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              progress={0.25}
              increase={"25%"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            sx={{ width: "100%", height: "100%" }}
          >
            <StatBox
              title="3,8767"
              subtitle="Books Borrowed"
              icon={
                <LocalLibraryIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              progress={0.4}
              increase={"40%"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            sx={{ width: "100%", height: "100%" }}
          >
            <StatBox
              title="1,325,134"
              subtitle="Amount to be collected"
              icon={
                <RequestQuoteOutlinedIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
              progress={0.6}
              increase={"60%"}
            />
          </Box>
        </Grid>

        {/* Recently Added Books */}
        <Grid item xs={12} sm={12} md={6} lg={7.5}>
          <Box bgcolor={colors.primary[400]} borderRadius="8px" mb={3}>
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            ></Box>

            <Box height="490px" m="-20px 0 0 0">
              <RecentlyAddedBooks isDashboard={true} />
            </Box>
          </Box>
        </Grid>

        {/* Requests */}
        <Grid item xs={12} sm={12} md={6} lg={4.5}>
          <Box
            bgcolor={colors.primary[400]}
            p="30px"
            borderRadius="8px"
            mt={0.6}
          >
            <Typography
              bgcolor={colors.primary[400]}
              variant="h5"
              fontWeight="600"
              sx={{ color: colors.greenAccent[500] }}
            >
              Requests
            </Typography>

            <Box height="670px" mt="-20px">
              {/* Rendering mock transactions */}
              {mockTransactions.map((transaction, i) => (
                <Box
                  key={`${transaction}-${i}`}
                  display="flex"
                  bgcolor={colors.primary[400]}
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.greenAccent[100]}
                    >
                      {transaction.requestId}
                    </Typography>
                  </Box>
                  <Box>
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
                  <Box p="5px 10px" borderRadius="4px">
                    {transaction.userId}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
