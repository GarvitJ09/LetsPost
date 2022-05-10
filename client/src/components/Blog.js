import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Blog = ({ title, description, image, user, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myblogs"));
  };
  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          "&:hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditIcon></ModeEditIcon>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon></DeleteForeverIcon>
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {user[0]}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <hr></hr>
          <br></br>
          <Typography variant="body2" color="text.secondary">
            <b>{user}</b>
            {" : "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
