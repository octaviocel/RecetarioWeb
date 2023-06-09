import { FormControlLabel, FormGroup, Grid, Switch } from "@mui/material";

const InputSwitch = ({ formik, label, field }) => {
  return (
    <Grid item xs={12}>
      <FormGroup>
        <FormControlLabel
          label={label}
          control={
            <Switch
              name={field}
              checked={formik.values[field]}
              onChange={(event) =>
                formik.setFieldValue(field, event.target.checked)
              }
            />
          }
        />
      </FormGroup>
    </Grid>
  );
};

export default InputSwitch;
