import React, { useState } from 'react';
import { Box, useTheme, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { tokens } from '../theme'; // Import the tokens from the theme

interface BorrowedBook {
  borrowedId: number;
  bookId: number;
  bookTitle: string;
  borrowedDate: Date;
  returnDate: Date;
  fine: number;
  status: string; // Added status field
}

const sampleData: BorrowedBook[] = [
  {
    borrowedId: 1,
    bookId: 101,
    bookTitle: 'The Great Gatsby',
    borrowedDate: new Date('2022-01-01'),
    returnDate: new Date('2022-01-15'),
    fine: 20,
    status: 'Borrowed',
  },
  {
    borrowedId: 2,
    bookId: 102,
    bookTitle: '1984',
    borrowedDate: new Date('2022-02-01'),
    returnDate: new Date('2022-02-15'),
    fine: 30,
    status: 'Borrowed',
  },
  {
    borrowedId: 3,
    bookId: 103,
    bookTitle: 'To Kill a Mockingbird',
    borrowedDate: new Date('2022-03-01'),
    returnDate: new Date('2022-03-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 4,
    bookId: 104,
    bookTitle: 'Pride and Prejudice',
    borrowedDate: new Date('2022-04-01'),
    returnDate: new Date('2022-04-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 5,
    bookId: 105,
    bookTitle: 'The Catcher in the Rye',
    borrowedDate: new Date('2022-05-01'),
    returnDate: new Date('2022-05-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 6,
    bookId: 106,
    bookTitle: 'Moby-Dick',
    borrowedDate: new Date('2022-06-01'),
    returnDate: new Date('2022-06-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 7,
    bookId: 107,
    bookTitle: 'War and Peace',
    borrowedDate: new Date('2022-07-01'),
    returnDate: new Date('2022-07-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 8,
    bookId: 108,
    bookTitle: 'The Odyssey',
    borrowedDate: new Date('2022-08-01'),
    returnDate: new Date('2022-08-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 9,
    bookId: 109,
    bookTitle: 'Crime and Punishment',
    borrowedDate: new Date('2022-09-01'),
    returnDate: new Date('2022-09-15'),
    fine: 0,
    status: 'Borrowed',
  },
  {
    borrowedId: 10,
    bookId: 110,
    bookTitle: 'The Brothers Karamazov',
    borrowedDate: new Date('2022-10-01'),
    returnDate: new Date('2022-10-15'),
    fine: 0,
    status: 'Borrowed',
  },
];

const UserMyBooks: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>(sampleData);

  const handleReturn = (borrowedId: number) => {
    const confirmApprove = window.confirm(
      `Are you sure you want to return the book ${borrowedId}?`
    );
    setBorrowedBooks(prevBooks => prevBooks.filter(book => book.borrowedId !== borrowedId));
    if (confirmApprove) {
      setBorrowedBooks(prevBooks => prevBooks.filter(book => book.borrowedId !== borrowedId));
      console.log(`Book ${borrowedId} returned`);
    }
  };

  return (
    <Box m="1px" overflow="auto">
      <Box mt="18px" p="20px" bgcolor={colors.primary[400]} borderRadius="8px" overflow="auto">
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: colors.blueAccent[700] }}>
              <TableCell style={{ color: colors.grey[100] }}>Borrowed ID</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Book ID</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Book Title</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Borrowed Date</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Return Date</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Fine</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrowedBooks.map((borrowedBook) => (
              <TableRow key={borrowedBook.borrowedId} style={{ borderRadius: '8px' }}>
                <TableCell>{borrowedBook.borrowedId}</TableCell>
                <TableCell>{borrowedBook.bookId}</TableCell>
                <TableCell>{borrowedBook.bookTitle}</TableCell>
                <TableCell>{borrowedBook.borrowedDate.toDateString()}</TableCell>
                <TableCell>{borrowedBook.returnDate.toDateString()}</TableCell>
                <TableCell>₹{borrowedBook.fine}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleReturn(borrowedBook.borrowedId)}
                  >
                    Return
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

export default UserMyBooks;
