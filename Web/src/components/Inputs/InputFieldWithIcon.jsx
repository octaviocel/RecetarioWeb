import { Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";

const InputFieldWithIcon = ({
  formik,
  label,
  field,
  type,
  inputProps,
  sm = 12,
  required = true,
  autoFocus = false,
}) => {
  return (
    <Grid item xs={12} sm={sm}>
      <TextField
        fullWidth
        id={field}
        name={field}
        type={type}
        label={label}
        required={required}
        autoFocus={autoFocus}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[field]}
        error={formik.touched[field] && Boolean(formik.errors[field])}
        helperText={formik.touched[field] && formik.errors[field]}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{inputProps}</InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default InputFieldWithIcon;
