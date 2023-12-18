import { AddCircle, CloudUpload, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Chip, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, MobileStepper, OutlinedInput, Paper, Select, TextField, ThemeProvider, createTheme, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  'дизайн',
  'моделирование',
  'арт',
  'лендинг',
  'сайт',
  'фотография',
  'спорт',
  'кулинария',
  'веб-дизайн',
  'разработка сайтов',
];



const PublicationCreate = () => {

  // const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [tag, setTag] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Файл не является изображением. Выберите файл изображения.");
    } else {
      setImage(file);
    }
  };

  console.log(activeStep);



  const handleSubmit = (event) => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        sx={{
          py: 8
        }}
        maxWidth="xl">
        <Box
          component="form"
          onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  maxWidth: 500,
                  flexGrow: 1,
                }}>
                  <Box sx={{ aspectRatio: 1, width: '100%', p: 0 }}>
                    <Box
                      component="img"
                      sx={{
                        objectFit: 'cover',
                        display: 'block',
                        maxWidth: 500,
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%',
                      }}
                      src={imageUrl}/>
                  </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={7}
                sx={{
                  mb: 2,
                }}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Заголовок"
                  fullWidth
                  value={title}
                  onChange={handleTitleChange}/>
              </Grid>
              <Grid item xs={7}
                sx={{
                  mb: 2,
                }}>
                  <TextField
                    required
                    id="description"
                    name="description"
                    label="Описание"
                    multiline
                    maxRows={4}
                    fullWidth
                    value={description}
                    onChange={handleDescriptionChange}/>
              </Grid>
              <Grid item xs={7}>
                  <FormControl
                    sx={{
                      mb:5,
                    }}
                    fullWidth>
                    <InputLabel id="multiple-tag-label">Теги</InputLabel>
                    <Select
                      labelId="multiple-tag-label"
                      id="multiple-tag"
                      multiple
                      value={tag}
                      onChange={handleChange}
                      input={<OutlinedInput id="select-multiple-tag" label="Теги" />}
                      renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                      )}
                      MenuProps={MenuProps}>
                        {tags.map((tag) => (
                          <MenuItem
                            key={tag}
                            value={tag}
                          >
                            {tag}
                          </MenuItem>
                        ))}
                      </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={7}>
                <Button
                  sx={{
                    p: 2,
                    mb: 1,
                  }}
                  component="label"
                  fullWidth variant="contained"
                  startIcon={<CloudUpload />}>
                  {!imageUrl && ("Добавить изображение")}
                  {imageUrl && ("Заменить изображение")}
                  <input type="file" name="image" accept="image/*" onChange={handleImageChange} hidden />
                </Button>
                <Button
                  sx={{
                    p: 2,
                  }}
                  type="submit"
                  fullWidth
                  variant="contained">
                  Создать
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PublicationCreate;