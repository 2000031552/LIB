import React, { useState } from "react";
import {
  Box,
  useTheme,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

interface Request {
  noOfRequests: number;
  bookTitle: string;
  author: string;
}

const initialData: Request[] = [
  {
    noOfRequests: 1,
    bookTitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  { noOfRequests: 2, bookTitle: "1984", author: "George Orwell" },
  { noOfRequests: 3, bookTitle: "To Kill a Mockingbird", author: "Harper Lee" },
  { noOfRequests: 4, bookTitle: "Pride and Prejudice", author: "Jane Austen" },
  {
    noOfRequests: 5,
    bookTitle: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  { noOfRequests: 6, bookTitle: "Moby-Dick", author: "Herman Melville" },
  { noOfRequests: 7, bookTitle: "War and Peace", author: "Leo Tolstoy" },
  { noOfRequests: 8, bookTitle: "The Odyssey", author: "Homer" },
  {
    noOfRequests: 9,
    bookTitle: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
  },
  {
    noOfRequests: 10,
    bookTitle: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
  },
];

const BookRequests: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>(initialData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleApprove = (requestId: number) => {
    const confirmApprove = window.confirm(
      `Are you sure you want to approve request ${requestId}?`
    );
    if (confirmApprove) {
      setRequests((prevRequests) =>
        prevRequests.filter((_, index) => index !== requestId - 1)
      );
      console.log(`Request ${requestId} approved`);
    }
  };

  return (
    <Box m="20px">
      <Header title="Requests" subtitle="Total" />
      <Box mt="18px" p="20px" bgcolor={colors.primary[400]} borderRadius="8px">
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: colors.blueAccent[700] }}>
              <TableCell style={{ color: colors.grey[100] }}>
                No. of Requests
              </TableCell>
              <TableCell style={{ color: colors.grey[100] }}>
                Book Title
              </TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Author</TableCell>
              <TableCell style={{ color: colors.grey[100] }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request, index) => (
              <TableRow key={index} style={{ borderRadius: "8px" }}>
                <TableCell>{request.noOfRequests}</TableCell>
                <TableCell>{request.bookTitle}</TableCell>
                <TableCell>{request.author}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleApprove(request.noOfRequests)}
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
