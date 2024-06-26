import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

interface Request {
    id: number;
    userId: number;
    bookTitle: string;
    author: string;
    gener: string;
    requestedDate: string; // Add the requestedDate field
}

const UserAllRequests = () => {
    const [requests, setRequests] = useState<Request[]>([]);

    useEffect(() => {
        fetch('/api/requests')
            .then(response => response.json())
            .then(data => setRequests(data))
            .catch(error => {
                console.error('There was an error fetching the requests!', error);
            });
    }, []);

    return (
        <Box m="20px">
            <Header title="All Books" subtitle="Requests" />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Request ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Book Title</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Requested Date</TableCell> {/* Add the Requested Date column */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell>{request.id}</TableCell>
                                <TableCell>{request.userId}</TableCell>
                                <TableCell>{request.bookTitle}</TableCell>
                                <TableCell>{request.author}</TableCell>
                                <TableCell>{request.gener}</TableCell>
                                <TableCell>{new Date(request.requestedDate).toLocaleDateString()}</TableCell> {/* Format the date */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default UserAllRequests;
