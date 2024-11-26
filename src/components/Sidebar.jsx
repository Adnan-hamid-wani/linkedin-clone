import React from "react";
import "../components/Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://www.kasradesign.com/wp-content/uploads/2023/06/An-artificial-intelligence-is-creating-video.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar" />

        <h2>Adnan hamid wani</h2>
        <h4>adnanaduuu@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed your profile</p>
          <p className="sidebar_statNumber">54637</p>
        </div>

        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNumber">364</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Web developer")}
        {recentItem("Programming")}
        {recentItem("Software")}
        {recentItem("Networking")}
      </div>
    </div>
  );
}

export default Sidebar;
