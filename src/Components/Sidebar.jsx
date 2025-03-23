import React, { useState, useEffect } from "react";
import SidebarButton from "./SidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../Spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      if (response.data.images && response.data.images.length > 0) {
        setImage(response.data.images[0].url);
      } else {
        console.log("No profile image found");
      }
    });
  }, []);

  return (
    <div className="w-[100px] h-full flex flex-col items-center justify-between rounded-2xl bg-orange-400 py-4">
      <img src={image} className="w-12 h-12 rounded-xl mt-5" alt="profile" />
      <div className="flex flex-col space-y-4">
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
