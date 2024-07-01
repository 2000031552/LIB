import React, { useEffect, useState } from 'react';
import { Box, useTheme,  Table, TableHead, TableRow, TableCell, TableBody  } from '@mui/material';
import Header from './Header';
import { DataGrid, GridColDef , GridToolbar} from '@mui/x-data-grid';
import { tokens } from '../theme'; // Import the tokens from the theme

interface BorrowedBook {
  borrowedId: number;
  bookId: number;
  bookTitle: string;
  borrowedDate: Date;
  returnedDate: Date;
  fine: number; 
  status: string; // Added status field
}



const sampleData: BorrowedBook[] = [
  {
    borrowedId: 1,
    bookId: 101,
    bookTitle: 'The Great Gatsby',
    borrowedDate: new Date('2022-01-01'),
    returnedDate: new Date('2022-01-15'),
    fine: 20,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 2,
    bookId: 102,
    bookTitle: '1984',
    borrowedDate: new Date('2022-02-01'),
    returnedDate: new Date('2022-02-15'),
    fine: 30,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 3,
    bookId: 103,
    bookTitle: 'To Kill a Mockingbird',
    borrowedDate: new Date('2022-03-01'),
    returnedDate: new Date('2022-03-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 4,
    bookId: 104,
    bookTitle: 'Pride and Prejudice',
    borrowedDate: new Date('2022-04-01'),
    returnedDate: new Date('2022-04-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 5,
    bookId: 105,
    bookTitle: 'The Catcher in the Rye',
    borrowedDate: new Date('2022-05-01'),
    returnedDate: new Date('2022-05-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 6,
    bookId: 106,
    bookTitle: 'Moby-Dick',
    borrowedDate: new Date('2022-06-01'),
    returnedDate: new Date('2022-06-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 7,
    bookId: 107,
    bookTitle: 'War and Peace',
    borrowedDate: new Date('2022-07-01'),
    returnedDate: new Date('2022-07-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 8,
    bookId: 108,
    bookTitle: 'The Odyssey',
    borrowedDate: new Date('2022-08-01'),
    returnedDate: new Date('2022-08-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 9,
    bookId: 109,
    bookTitle: 'Crime and Punishment',
    borrowedDate: new Date('2022-09-01'),
    returnedDate: new Date('2022-09-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
  {
    borrowedId: 10,
    bookId: 110,
    bookTitle: 'The Brothers Karamazov',
    borrowedDate: new Date('2022-10-01'),
    returnedDate: new Date('2022-10-15'),
    fine: 0,
    status: 'Returned', // Added status value
  },
];

const UserBorrowHistory: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([]);

  useEffect(() => {
    fetch('/api/borrowed-books') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        // Convert date strings to Date objects
        const formattedData = data.map((book: any) => ({
          ...book,
          borrowedDate: new Date(book.borrowedDate),
          returnDate: new Date(book.returnDate),
        }));
        setBorrowedBooks(formattedData);
      })
      .catch(error => {
        console.error('There was an error fetching the borrowed books!', error);
      });
  }, []);


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
              <TableCell style={{ color: colors.grey[100] }}>Returned Date</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Fine Paid</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Status</TableCell> {/* Added Status column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((borrowedBook) => (
              <TableRow key={borrowedBook.borrowedId} style={{ borderRadius: '8px' }}>
                <TableCell>{borrowedBook.borrowedId}</TableCell>
                <TableCell>{borrowedBook.bookId}</TableCell>
                <TableCell>{borrowedBook.bookTitle}</TableCell>
                <TableCell>{borrowedBook.borrowedDate.toDateString()}</TableCell>
                <TableCell>{borrowedBook.returnedDate.toDateString()}</TableCell>
                <TableCell>₹{borrowedBook.fine}</TableCell>
                <TableCell>{borrowedBook.status}</TableCell> {/* Added Status field */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default UserBorrowHistory;
