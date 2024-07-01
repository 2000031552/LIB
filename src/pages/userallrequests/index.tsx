import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { tokens } from '../../theme';

interface Request {
    id: number;
    userId: number;
    bookTitle: string;
    author: string;
    genre: string; // Corrected typo
    requestedDate: string; // Keep as string if you intend to format it later
}

const generateSampleData = (): Request[] => {
    const sampleData: Request[] = [];
  
    for (let i = 0; i < 10; i++) {
        const randomDays = Math.floor(Math.random() * 30); // Random number of days ago
        const requestDate = new Date();
        requestDate.setDate(requestDate.getDate() - randomDays);

        const request: Request = {
            id: i + 1,
            userId: Math.floor(Math.random() * 100) + 1,
            bookTitle: `Book ${i + 1}`,
            author: `Author ${i + 1}`,
            genre: `Genre ${i + 1}`, // Corrected typo
            requestedDate: requestDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        };
  
        sampleData.push(request);
    }
  
    return sampleData;
};

const UserAllRequests = () => {
    const [requests, setRequests] = useState<Request[]>(generateSampleData()); // Using generated sample data initially
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
                    <Table bgcolor={colors.primary[400]}>
                        <TableHead>
                            <TableRow style={{ backgroundColor: colors.blueAccent[700] }}>
                                <TableCell style={{ color: colors.grey[100] }}>Request ID</TableCell>
                                <TableCell style={{ color: colors.grey[100] }}>Book Title</TableCell>
                                <TableCell style={{ color: colors.grey[100] }}>Author</TableCell>
                                <TableCell style={{ color: colors.grey[100] }}>Genre</TableCell>
                                <TableCell style={{ color: colors.grey[100] }}>Requested Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requests.map((request) => (
                                <TableRow key={request.id}>
                                    <TableCell>{request.id}</TableCell>
                                    <TableCell>{request.bookTitle}</TableCell>
                                    <TableCell>{request.author}</TableCell>
                                    <TableCell>{request.genre}</TableCell>
                                    <TableCell>{request.requestedDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
           
        </Box>
    );
};

export default UserAllRequests;
