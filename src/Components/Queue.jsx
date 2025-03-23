import React from "react";

export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div className="w-full h-1/3 rounded-3xl rounded-tr-none bg-blue-600 flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="w-4/5 h-5/6 flex flex-col justify-between">
        <p className="text-lg font-bold text-white mb-2">Up Next</p>
        <div className="h-4/5 w-full overflow-y-auto scrollbar-hide">
          {tracks?.map((track, index) => (
            <div
              key={index}
              className="flex justify-between w-full py-1 text-white text-sm font-medium cursor-pointer transition-transform duration-200 hover:scale-95"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="truncate w-3/4">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
