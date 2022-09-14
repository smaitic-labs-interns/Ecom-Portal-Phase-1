import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl ,InputLabel, Select, MenuItem } from "@material-ui/core";

import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Order() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleEvent = (event) => {
    let newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    validate();
    console.log(values, "Values");
    if (Object.keys(errors).length === 0) {
     ;

    //   await axios
    //     .post("http://localhost:4000/order", values)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    }
  };
  const validate = () => {
    let new_errors = {};
    if (test(values?.paymentType)) {
      new_errors["paymentType"] = "Invalid Payment Type";
    }
    setErrors(new_errors);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Order
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
              <Select
                labelId="paymentType"
                id="paymentType"
                label="Payment Type"
              >
                <MenuItem value = 'card' >Card</MenuItem>
                <MenuItem value = 'cash'>Cash</MenuItem>
                <MenuItem value ='paypal'>Paypal</MenuItem>
              </Select>
            </FormControl>

            <TextField
              margin="quantity"
              required
              fullWidth
              id="quantity"
              label="Quantity"
              name="quantity"
              onChange={handleEvent}
              autoComplete="quantity"
              autoFocus
            />
            {errors.quantity && (
              <p
                style={{
                  color: "quantity",
                }}
              >
                {errors.quantity}
              </p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              order
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
