import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import { Paper, Grid, TextField, Button } from '@mui/material';


export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    Login(details);
  }


  return (

    <Grid item
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}
      
      noValidate autoComplete="off"
      onSubmit={handleSubmit}>
      <div className="form-inner">
        <Paper elevation={10} >
          <h2>SIGN IN</h2>
          {(error !== "") ? (<div className="error">{error}</div>) : ""}
          <div>
            <TextField
              label="name"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
              onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}
            />

          </div>
          <div className="form-group">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              defaultValue="Small"
              size="small"
              onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="success"
            value="Login"
            size="medium"
            sx={{ p: 2 }}
          >Login</Button>
        </Paper>
      </div>

    </Grid>

  )
}
