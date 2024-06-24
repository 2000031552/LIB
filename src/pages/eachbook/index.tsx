import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { mockDataContacts } from '../../data/mockData';
import { tokens } from "../../theme";
const EachBookDetails: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const { id } = useParams<{ id: string }>();
  const book = mockDataContacts.find((book) => book.id === parseInt(id, 10));

  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  return (
    <Box m="25px">
      <Paper elevation={5 } sx={{
          padding: '16px',
          backgroundColor: colors.greenAccent[500], // Change this to any color you prefer
        }}>
        <Typography variant="h2" sx={{ color: colors.greenAccent[800], fontWeight: 'bold' ,fontStyle: 'italic' }}>{book.name}</Typography><br/>
        <Typography variant="body1" sx={{ color: colors.blueAccent[600] }}><span style={{textTransform: 'uppercase'}}>Author:</span>  <span style={{ marginLeft: '8px' }}>{book.author}</span></Typography>
        <Typography variant="body1" sx={{ color: colors.blueAccent[600]  }}><span style={{textTransform: 'uppercase'}}>Published Date:</span> <span style={{ marginLeft: '8px' }}>{book.publisheddate}</span></Typography>
        <Typography variant="body1" sx={{ color: colors.blueAccent[600]  }}><span style={{textTransform: 'uppercase'}}>Total Copies:</span> <span style={{ marginLeft: '8px' }}>{book.total}</span>  </Typography><br/>
        <Typography variant="body1" sx={{ color: colors.blueAccent[600]  }}><span style={{textTransform: 'uppercase'}}>Description:</span> <span style={{ marginLeft: '8px' }}>{book.description}</span>  </Typography>
      </Paper>
    </Box>
  );
};

export default EachBookDetails;
