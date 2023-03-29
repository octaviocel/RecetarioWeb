import React, { useState } from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import {
  PasswordRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const InputPassword = ({
  formik,
  sm = 12,
  required = true,
  withIcon = false,
  label = "Contraseña",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Grid item xs={12} sm={sm}>
      <TextField
        fullWidth
        id="password"
        name="password"
        label={label}
        required={required}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        type={visible ? "text" : "password"}
        InputProps={{
          startAdornment: withIcon ? (
            <InputAdornment position="start">
              <PasswordRounded />
            </InputAdornment>
          ) : (
            <></>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setVisible(!visible)} edge="end">
                {visible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default InputPassword;
