import { BookmarkAdd, BookmarkAdded, ChatBubble, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const Publication = (props) => {
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  console.log(isLike);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="div"
        sx={{
          pt: '56.25%',
        }}
        image= {props.img}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Открыть</Button>
        <IconButton aria-label="Нравится" onClick = {() => setIsLike(!isLike)}>
          {isLike && (
            <Favorite color="primary"></Favorite>
          )}
          {!isLike && (
            <FavoriteBorder></FavoriteBorder>
          )}
        </IconButton>
        <IconButton aria-label="Комментарии">
            <ChatBubble></ChatBubble>
        </IconButton>
        <IconButton aria-label="Добавить в избранное" onClick={() => setIsSave(!isSave)}>
          {isSave && (
            <BookmarkAdded></BookmarkAdded>
          )}
          {!isSave && (
            <BookmarkAdd></BookmarkAdd>
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Publication;