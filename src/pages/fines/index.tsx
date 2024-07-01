import React, { useState } from "react";
import { Box, Typography, useTheme, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Fines: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [rows, setRows] = useState(mockDataInvoices);
  const [paymentType, setPaymentType] = useState('');
  const [amountCollected, setAmountCollected] = useState('');

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
    setPaymentType('');
    setAmountCollected('');
  };

  const handleSubmit = () => {
    if (paymentType && amountCollected) {
      // Remove the selected row from the rows array
      setRows(rows.filter((row) => row.id !== selectedRow.id));
      handleClose();
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "finedue",
      headerName: "Fine Due",
      flex: 1,
      renderCell: (params) => {
        return <Typography color={colors.greenAccent[400]}>₹{params.row.cost}</Typography>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <Button variant="contained" color="secondary" onClick={() => handleClickOpen(params.row)}>
            Pay
          </Button>
        );
      },
    },
  ];

  return (
    <Box m="20px" overflow="auto" >
      <Header title="Fine Due" subtitle="Total Fine Data" />
      <Box
        mt="18px"
        p="20px"
        height="75vh"
        bgcolor={colors.primary[400]}
        borderRadius="8px"
        display="flex"
        overflow="auto"
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
        <DataGrid checkboxSelection rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="paymentType"
            label="Type of Payment"
            type="text"
            fullWidth
            required
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          />
          <TextField
            margin="dense"
            id="amountCollected"
            label="Amount Collected"
            type="number"
            fullWidth
            required
            value={amountCollected}
            onChange={(e) => setAmountCollected(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Fines;
