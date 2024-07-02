import React, { useEffect, useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';
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
    const handleBorrow = (bookId: number) => {
        // Handle the borrow logic here, e.g., making an API call
        console.log(`Borrow book with id: ${bookId}`);
        fetch(`/api/borrow/${bookId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(updatedBook => {
                setBooks(prevBooks =>
                    prevBooks.map(book =>
                        book.id === bookId ? { ...book, available: updatedBook.available } : book
                    )
                );
            })
            .catch(error => {
                console.error('There was a problem with the borrow request:', error);
            });
    };
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id',  },
        { field: 'ISBN', headerName: 'ISBN', flex: 1},
        {
            field: 'name',
            headerName: 'Book Title',
            cellClassName: 'name-column--cell',
            flex: 1 ,
        },
        { field: 'author', headerName: 'Author', flex: 1 },
        { field: 'publisheddate', headerName: 'Published Date',  flex: 1},
        { field: 'available', headerName: 'Total copies', flex: 1 },
        {
            field: 'borrow',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleBorrow(params.row.id)}
                    //disabled={params.row.available === 0}
                >
                    Borrow
                </Button>
            ),
        },
    ];

    const navigate = useNavigate();
    const handleCellClick = (params: { field: string; id: string | number }) => {
        if (params.field === 'name') {
            navigate(`/usereachbook/${params.id}`);
        }
    };

    return (
        <Box m="8px">
            <Header title="Books" subtitle="Total Books Data" />
            <Box
                
                p="16px"
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
                    },
                    "& .MuiDataGrid-columnHeader": {
                      backgroundColor: `${colors.blueAccent[700]} !important`,
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                      color: `${colors.grey[100]} !important`,
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: `${colors.blueAccent[700]} !important`,
                    },
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.greenAccent[200]} !important`,
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
