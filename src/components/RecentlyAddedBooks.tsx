import React from 'react';
import { Grid, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';

interface Book {
  id: number;
  title: string;
  author: string;
}

interface RecentlyAddedBooksProps {
  isDashboard?: boolean;
}

const sampleData: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
];

const RecentlyAddedBooks: React.FC<RecentlyAddedBooksProps> = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (      
    <Grid item xs={12}>
      <Box bgcolor={colors.primary[400]} borderRadius="12px" overflow="hidden" padding="16px" > 
        <Box
          mt="8px"
          //p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography  
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Recently added books
          </Typography>
        </Box>
        <Box height="450px" m="-20px 0 0 0" overflow="auto" mt="20px">
          <Table sx={{ borderCollapse: 'separate', borderSpacing: '1px', border: `1px solid ${colors.grey[300]}`, borderRadius: '8px' }}>
            <TableHead>
              <TableRow style={{ backgroundColor: colors.blueAccent[700] }}>
                <TableCell sx={{ borderTopLeftRadius: '8px' }}>Book ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell sx={{ borderTopRightRadius: '8px' }}>Author</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Grid>
  );
};

export default RecentlyAddedBooks;
