// EditBook.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

interface Book {
  id: number;
   
  name: string;
  author: string;
  genre: string;
  publisheddate: string;
   
  available: number;
}

const EditBook: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | undefined>(undefined);

  useEffect(() => {
    const foundBook = mockDataContacts.find((book) => book.id === parseInt(id, 10));
    setBook(foundBook);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook((prevBook) => (prevBook ? { ...prevBook, [name]: value } : undefined));
  };

  const handleSave = () => {
    // Add your save logic here (e.g., send updated book data to server)
    const confirmApprove = window.confirm(
      `Are you sure you want to update the book ${id}?`
    );
    if (confirmApprove) {
      navigate("/books");
      console.log(`Book ${id} updated`);
    }
  };

  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  return (
    <Box m="20px">
      <Header title="Edit Book" subtitle="Edit the details of the book" />
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap="16px"
        bgcolor={colors.primary[400]}
        p="24px"
        borderRadius="8px"
      >
        <TextField
          label="Book Title"
          name="name"
          value={book.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Genre"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Published Date"
          name="publisheddate"
          value={book.publisheddate}
          onChange={handleChange}
          fullWidth
        />
         
        <Box display="flex" justifyContent="space-between" mt="16px">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditBook;
