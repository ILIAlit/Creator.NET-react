import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme, Box, Typography, Grid, TextField, Button, Link } from "@mui/material";
import { useState } from "react";

const defaultTheme = createTheme();

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

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
        email: data.get('email'),
        password: data.get('password'),
        confirmpassword: data.get('confirmPassword')
      })
    };
    const respons = await fetch(`/api/accounts/register`, options)
    console.log(respons.json());
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const validatePasswordRepeat = () => {
    if (password !== passwordRepeat) {
      return 'Пароли не совпадают';
    }
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
          <Typography component="h3" variant="h6">Регистрация</Typography>
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
                  id="email"
                  label="Почта"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Повторите пароль"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  value={passwordRepeat}
                  onChange={handlePasswordRepeatChange}
                  error={Boolean(validatePasswordRepeat())}
                  helperText={validatePasswordRepeat()}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
              Создать
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;