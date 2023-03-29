import React from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

import { Formik } from "formik";

import InputField from "../../Inputs/InputField";
import InputPassword from "../../Inputs/InputPassword";

import { login } from "../../../services/AuthService";

const Login = ({ open, handleClose, handleOpenRegister }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "harim@gmail.com",
        password: "123456789",
      }}
      onSubmit={(values) => {
        dispatch(login(values));
      }}
    >
      {(props) => (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
          <form onSubmit={props.handleSubmit}>
            <DialogTitle>
              Iniciar sesi&oacute;n
              {handleClose && (
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                >
                  <CloseOutlined />
                </IconButton>
              )}
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={2}>
                <InputField
                  formik={props}
                  field={"email"}
                  label="Correo electrónico"
                  type="email"
                />
                <InputPassword formik={props} />
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    textAlign="right"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      handleClose();
                      handleOpenRegister();
                    }}
                  >
                    No tengo cuenta
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="warning" type="submit">
                Entrar
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </Formik>
  );
};

export default Login;
