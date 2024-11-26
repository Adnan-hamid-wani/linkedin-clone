import React from "react";
import "../components/Post.css";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from "./InputOption";
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';


function Post({ name, description, message, photoUrl , timestamp}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{timestamp}</p> 

        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={InsertCommentRoundedIcon } title="Comment" color="gray" />
        <InputOption Icon={RepeatRoundedIcon} title="Repost" color="gray" />
        <InputOption Icon={SendRoundedIcon} title="Send" color="gray" />

      </div>
    </div>
  );
}

export default Post;
