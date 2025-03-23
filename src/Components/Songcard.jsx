import React from "react";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";

export default function Songcard({ album }) {
  return (
    <div className="w-full h-[62%] bg-[#27354d] rounded-3xl rounded-br-none flex flex-col justify-center items-center">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}
