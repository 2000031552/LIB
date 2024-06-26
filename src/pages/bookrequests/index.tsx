import React from 'react';
import { Box, useTheme,  Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

interface Request {
  requestId: number;
  userId: number;
  bookTitle: string;
  author: string;
}

const sampleData: Request[] = [
  { requestId: 1, userId: 101, bookTitle: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { requestId: 2, userId: 102, bookTitle: '1984', author: 'George Orwell' },
  { requestId: 3, userId: 103, bookTitle: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { requestId: 4, userId: 104, bookTitle: 'Pride and Prejudice', author: 'Jane Austen' },
  { requestId: 5, userId: 105, bookTitle: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { requestId: 6, userId: 106, bookTitle: 'Moby-Dick', author: 'Herman Melville' },
  { requestId: 7, userId: 107, bookTitle: 'War and Peace', author: 'Leo Tolstoy' },
  { requestId: 8, userId: 108, bookTitle: 'The Odyssey', author: 'Homer' },
  { requestId: 9, userId: 109, bookTitle: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  { requestId: 10, userId: 110, bookTitle: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
];

const BookRequests: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleApprove = (requestId: number) => {
    // Handle the approve action here
    console.log(`Request ${requestId} approved`);
  };

  return (
    <Box m="20px">
      <Header title="Requests" subtitle="Total " />
      <Box mt="18px" p="20px" bgcolor={colors.primary[400]} borderRadius="8px">
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: colors.blueAccent[700] }}>
              <TableCell style={{ color: colors.grey[100] }}>Request ID</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>User ID</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Book Title</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Author</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((request) => (
              <TableRow key={request.requestId} style={{ borderRadius: '8px' }}>
                <TableCell>{request.requestId}</TableCell>
                <TableCell>{request.userId}</TableCell>
                <TableCell>{request.bookTitle}</TableCell>
                <TableCell>{request.author}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleApprove(request.requestId)}
                  >
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default BookRequests;
