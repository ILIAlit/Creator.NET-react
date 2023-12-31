import { Instagram, PhotoCamera, Telegram } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, IconButton, TextField, ThemeProvider, Tooltip, Typography, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ProfileServices from "../services/ProfileServices";
import { useContext } from "react";
import { UserContext } from "../contexts/Context";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';


const profileServices = new ProfileServices();
const defaultTheme = createTheme();

const Profile = () => {

  const {user} = useContext(UserContext);

  const [avatar, setAvatar] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [telegram, setTelegram] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isProfile, setIsProfile] = useState(null);
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (avatar) {
      const url = URL.createObjectURL(avatar);
      setAvatarUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [avatar]);

  useEffect(() => {
    if(user.name){
      profileServices.getProfile(user.name, user.token)
      .then((response) => {
        console.log(response);
        setIsProfile(response.isProfilee);
        setUserProfile(response.userProfile);
        setAvatarUrl(response.userProfile.cover);
        setInstagram(response.userProfile.instagram);
        setTelegram(response.userProfile.telegram);
      });
    }
  }, [user]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Файл слишком большой. Выберите файл размером не более 5 МБ.");
      } else if (!file.type.startsWith("image/")) {
        alert("Файл не является изображением. Выберите файл изображения.");
      } else {
        setAvatar(file);
      }
    }
  };

  const handleInstagramChange = (event) => {
    const newValue = event.target.value;
    setInstagram(newValue);
  }

  const handleTelegramChange = (event) => {
    const newValue = event.target.value;
    setTelegram(newValue);
  }

  const removeCover = () => {
    setAvatar(null);
    setAvatarUrl(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('cover', avatar);
    formData.append('username', user.name);
    formData.append('instagramurl', instagram);
    formData.append('telegramurl', telegram);
    setLoading(true);
    profileServices.uploadProfile(formData, user.token)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setUserProfile(response.userProfile)

      });
  };

  console.log(userProfile);

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth = "sx">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          component="form"
          onSubmit={handleSubmit}>
          <Typography component="h1" variant="h3" sx={{mb: 3}}>Привет, {user.name}</Typography>
          {isProfile && (
            <>
            <Tooltip title = {!(!!avatarUrl) ? "Выберите изображение" : "Удалить"} >
            <Avatar
                sx={{ width: 120, height: 120 }}
                src={avatarUrl}
                size="large"
                variant="circle"
                onClick = {removeCover}>
              <IconButton
                component="label"
                color="primary">
                  <PhotoCamera />
                  <input 
                    type="file"
                    name="cover"
                    accept="image/*"
                    hidden
                    onChange={handleAvatarChange}
                  />
              </IconButton>
            </Avatar>
          </Tooltip>
          <Box maxWidth="xs">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Instagram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
              <TextField
                fullWidth
                value={instagram}
                name="instagram"
                label="Инстаграм"
                type="text"
                id="instagram"
                variant="standard"
                margin="normal"
                onChange={handleInstagramChange}>
              </TextField>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Telegram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
              <TextField
                fullWidth
                value={telegram}
                name="telegram"
                label="Телеграм"
                type="text"
                id="telegram"
                variant="standard"
                margin="normal"
                onChange={handleTelegramChange}>
              </TextField>
            </Box>
            {userProfile && (
              <Button
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
              Изменить
            </Button>
            )}
            {!userProfile && (
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 3, fontSize: '16px'  }}
                loadingPosition="start"
                startIcon={<SaveIcon/>}
                loading={loading}>
                  Сохранить
              </LoadingButton>
            )}
          </Box>
            </>
          )}

          {!isProfile && (
            <Button
              onClick={() => setIsProfile(true)}
              variant="contained"
              sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
              Создать профиль!
            </Button>
          )}

        </Box>


      </Container>
    </ThemeProvider>
  );
}

export default Profile;