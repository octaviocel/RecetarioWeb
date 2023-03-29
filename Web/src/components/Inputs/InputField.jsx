import React from "react";
import { Grid, TextField } from "@mui/material";

const InputField = ({
  formik,
  label,
  field,
  type,
  sm = 12,
  required = true,
  autofocus = false,
  hidden = false,
  readOnly = false,
}) => {
  return (
    <Grid item xs={12} sm={sm}>
      <TextField
        fullWidth
        id={field}
        name={field}
        type={type}
        label={label}
        hidden={hidden}
        required={required}
        autoFocus={autofocus}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[field]}
        error={formik.touched[field] && Boolean(formik.errors[field])}
        helperText={formik.touched[field] && formik.errors[field]}
        InputProps={{
          readOnly: readOnly,
        }}
      />
    </Grid>
  );
};

export default InputField;
