import React from "react";

export default function AlbumImage({ url }) {
  return (
    <div className="w-4/5 flex items-center justify-center relative z-10">
      <img src={url} alt="album art" className="rounded-3xl w-full aspect-square" />
      <div className="absolute top-5 w-[90%] blur-md z-[-1]">
        <img src={url} alt="shadow" className="rounded-3xl w-full aspect-square" />
      </div>
    </div>
  );
}
