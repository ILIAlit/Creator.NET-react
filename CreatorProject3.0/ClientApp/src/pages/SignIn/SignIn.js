import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme, Typography, Grid, TextField, Link, Alert, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountsServices from "../../services/AccountsServices";
import { UserContext } from "../../contexts/Context";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { date } from "yup";
import { validationShema } from "./validation";


const accountsServices = new AccountsServices();
const defaultTheme = createTheme();

const SignIn = () => {

  const [loading, setLoading] = useState(false);
  const [alertOpening, setAlertOpening] = useState(false);
  const navigate = useNavigate();
  const { setUser} = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm({
    resolver: yupResolver(validationShema),
  })

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setLoading(true);
    console.log(data);
    accountsServices.signIn(data)
      .then((response) => {
        if(response.isSucces){
          setUser({
            token: response.accessToken,
            name: response.userName
          });
          sessionStorage.setItem('user', JSON.stringify({
            token: response.accessToken,
            name: response.userName
          }));
          navigate('/');
        } else{
          console.log("Error");
          setAlertOpening(true);
        }
        setLoading(false);
      });
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
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller 
                    name="name"
                    control={control}
                    render={({field}) => (
                      <TextField
                        value={field.value}
                        onChange={(event) => {field.onChange(event)}}
                        helperText = {errors.name?.message}
                        error = {!!errors.name?.message}
                        fullWidth
                        label="Имя"
                        autoFocus/>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                      <TextField
                        value={field.value}
                        onChange={(event) => {field.onChange(event)}}
                        helperText = {errors.password?.message}
                        error = {!!errors.password?.message}
                        fullWidth
                        label="Пароль"
                        type="password"/>
                    )}/>
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 3, fontSize: '16px'  }}
                loading={loading}
                loadingIndicator="Загрузка…">
                Войти
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/register" variant="body2">
                    У тебя нет аккаунта? Пройди регистрацию!
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