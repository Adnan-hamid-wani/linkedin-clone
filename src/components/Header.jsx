import React from "react";
import "../components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />

        <HeaderOptions Icon={GroupRoundedIcon} title="My Network" />

        <HeaderOptions Icon={WorkRoundedIcon} title="Jobs" />

        <HeaderOptions Icon={MessageIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions
          avatar="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
