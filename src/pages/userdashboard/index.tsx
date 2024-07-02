import React from "react";
import {
  Box as MuiBox,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { tokens } from "../../theme";
 
import BookIcon from '@mui/icons-material/Book';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
 
import Header from "../../components/Header";
import RecentlyAddedBooks from "../../components/RecentlyAddedBooks";
import StatBox from "../../components/StatBox";
import { useNavigate } from "react-router-dom";

// Alias for Box with explicit props type
const Box: React.FC<React.ComponentProps<typeof MuiBox>> = MuiBox;

const UserDashboard: React.FC = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleBooksClick = () => {
    navigate("/userbooks");
  };
  const handleBorrowsClick = () => {
    navigate("/userbookhistory");
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
      </Box>

      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={4}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            onClick={handleBorrowsClick}
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
        <Grid item xs={12} sm={6} md={4}>
          <Box
            bgcolor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            sx={{ width: "100%", height: "100%" }}
            onClick={handleBorrowsClick}
          >
            <StatBox
              title="1,134"
              subtitle="Amount to be paid"
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
      </Grid>
    </Box>
  );
};

export default UserDashboard;
