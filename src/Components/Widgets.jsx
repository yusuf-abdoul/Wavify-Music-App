import React, { useState, useEffect } from "react";
import apiClient from "../Spotify";
import WidgetCard from "./WidgetCard";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    if (!artistID) return;

    const fetchData = async () => {
      try {
        const [similarRes, featuredRes, newReleaseRes] = await Promise.all([
          apiClient.get(`/artists/${artistID}/related-artists`),
          apiClient.get(`/browse/featured-playlists`),
          apiClient.get(`/browse/new-releases`),
        ]);

        setSimilar(similarRes.data?.artists.slice(0, 3) || []);
        setFeatured(featuredRes.data?.playlists.items.slice(0, 3) || []);
        setNewRelease(newReleaseRes.data?.albums.items.slice(0, 3) || []);
      } catch (err) {
        console.error("Error fetching widget data:", err);
      }
    };

    fetchData();
  }, [artistID]);

  return (
    <div className="w-[95%] h-[50%] mx-auto my-4 flex justify-evenly items-center bg-gradient-to-b from-[#1E2A3E] to-[#364562] backdrop-blur-lg rounded-2xl p-4">
      <WidgetCard title="Similar Artists" data={similar} />
      <WidgetCard title="Made For You" data={featured} />
      <WidgetCard title="New Releases" data={newRelease} />
    </div>
  );
}
