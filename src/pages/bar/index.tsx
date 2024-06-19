import React from 'react';
import BarChart from '../../components/BarChart';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const Bar: React.FC = () => {
  return (
    <Box m="20px" height="75vh">
      <Header title="BAR CHART" subtitle="simple bar chart" />
      <BarChart />
    </Box>
  );
};

export default Bar;
