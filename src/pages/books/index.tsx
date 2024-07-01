import React, { useState } from "react";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

interface Book {
  id: number;
  ISBN: string;
  name: string;
  author: string;
  genre: string;  
  publisheddate: string;
  available: number;
}

const Books: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [books, setBooks] = useState<Book[]>(mockDataContacts);

  const handleDelete = (id: number) => {
    const confirmApprove = window.confirm(
      `Are you sure you want to delete the book ${id}?`
    );
    if (confirmApprove) {
      setBooks(books.filter(book => book.id !== id));
      console.log(`Book ${id} deleted`);
    }

  };
  
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/editbook/${id}`);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id",  },
    { field: "ISBN", headerName: "ISBN", flex: 1, },
    {
      field: "name",
      headerName: "BookTitle",
      cellClassName: "name-column--cell",
      flex: 1.5,
    },
    { field: "author", headerName: "Author", flex: 1,},
    { field: "genre", headerName: "Genre", flex: 1, },
    { field: "publisheddate", headerName: "PublishedDate", flex: 1, },
    { field: "available", headerName: "Available copies", flex: 1, },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box> 
        <IconButton onClick={() => handleEdit(params.row.id)}>
            <EditIcon color="secondary" />
          </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
        </Box>
      ),
    },
  ];

   
  const handleCellClick = (params: { field: string; row: any }) => {
    if (params.field === "name") {
      navigate(`/eachbook/${params.row.id}`);
    }
  };

  const handleAddBook = () => {
    navigate("/addbook");
  };

  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Books" subtitle="Total Books Data" />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ borderRadius: "7px" }}
          onClick={handleAddBook}
        >
          Add Book
        </Button>
    </Box>
    <Box
      mt="2px"
      p="20px"
      height="75vh"
      bgcolor={colors.primary[400]}
      borderRadius="8px"
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
          rows={books}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          onCellClick={handleCellClick}
      />
    </Box>
  </Box>
);
};

export default Books;
