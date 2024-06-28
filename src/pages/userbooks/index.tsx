import React, { useEffect, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { mockDataContacts } from '../../data/mockData';

interface Book {
    id: number;
    ISBN: string;
    name: string;
    author: string;
    genre: string;
    publisheddate: string;
    available: number;
}

const UserBooks: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 100 },
        { field: 'ISBN', headerName: 'ISBN', width: 150 },
        {
            field: 'name',
            headerName: 'Book Title',
            cellClassName: 'name-column--cell',
            width: 200,
        },
        { field: 'author', headerName: 'Author', width: 200 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'publisheddate', headerName: 'Published Date', width: 150 },
        { field: 'available', headerName: 'Available copies', width: 150 }
    ];

    const navigate = useNavigate();
    const handleCellClick = (params: { field: string; id: string | number }) => {
        if (params.field === 'name') {
            navigate(`/usereachbook/${params.id}`);
        }
    };

    return (
        <Box m="16px">
            <Header title="Books" subtitle="Total Books Data" />
            <Box
                m="8px 0 0 0"
                width="100%"
                height="80vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                        borderBottom: "none",
                        color: colors.grey[100],
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    onCellClick={handleCellClick}
                />
            </Box>
        </Box>
    );
};

export default UserBooks;
