import React from "react";

export default function AlbumInfo({ album }) {
  const artists = album?.artists?.map((artist) => artist.name).join(", ");

  return (
    <div className="mt-5 w-4/5 text-center">
      {/* Marquee Effect for Album Name */}
      <div className="w-full overflow-hidden text-lg font-bold text-gray-300">
        <div className="whitespace-nowrap inline-block animate-marquee">
          <p>{album?.name} - {artists}</p>
        </div>
      </div>

      {/* Album Description */}
      <div className="text-sm font-medium text-gray-400 mt-2 line-clamp-2">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists} with ${album?.total_tracks} track(s)`}</p>
      </div>

      {/* Release Date */}
      <div className="text-xs font-normal text-gray-500 mt-2">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}
