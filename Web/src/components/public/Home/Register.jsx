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

import { register } from "../../../services/AuthService";

const Register = ({ open, handleClose, handleOpenLogin }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        first_name: "Harim",
        last_name: "Castellanos Altamirano",
        birth_date: "10/08/1982",
        username: "harim",
        email: "harim@gmail.com",
        password: "123456789",
        role: "USUARIO",
        verified: false,
      }}
      onSubmit={(values) => {
        dispatch(register(values));
      }}
    >
      {(props) => (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
          <form onSubmit={props.handleSubmit}>
            <DialogTitle>
              Registrarse
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
                  field={"first_name"}
                  label="Nombre(s)"
                  type="text"
                />
                <InputField
                  formik={props}
                  field={"last_name"}
                  label="Apellido(s)"
                  type="text"
                />
                <InputField
                  formik={props}
                  field={"birth_date"}
                  label="Fecha de nacimiento"
                  type="date"
                />
                <InputField
                  formik={props}
                  field={"username"}
                  label="Nombre de usuario"
                  type="text"
                />
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
                      handleOpenLogin();
                    }}
                  >
                    Ya tengo cuenta
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="warning" type="submit">
                Registrarse
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </Formik>
  );
};

export default Register;
