import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme, Typography, Grid, TextField, Button, Link } from "@mui/material";
import { useState } from "react";

const defaultTheme = createTheme();

const SignIn = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name: data.get('name'),
        password: data.get('password'),
        returnurl: 'false'
      })
    };
    const respons = await fetch(`/api/accounts/login`, options);
    respons.ok ? console.log(respons.json()) : console.log(respons.json());
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography component="h1" variant="h3" sx={{mb: 3}}>Creator.</Typography>
            <Typography component="h3" variant="h6">Вход</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 3}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Имя"
                    autoFocus/>
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
                Войти
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;