import React from "react";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
  return (
    <div className="flex items-center justify-between w-1/2">
      {/* Previous Button */}
      <button
        className="w-12 h-12 flex items-center justify-center rounded-lg transition-transform duration-200 hover:scale-110"
        onClick={handlePrev}
      >
        <IoPlaySkipBack className="text-gray-400 text-3xl" />
      </button>

      {/* Play/Pause Button */}
      <button
        className={`w-16 h-16 flex items-center justify-center rounded-full transition-transform duration-200 ${
          isPlaying
            ? "bg-red-500 shadow-inner shadow-red-700"
            : "bg-red-400 shadow-lg shadow-red-600"
        } hover:scale-110`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <FaPause className="text-white text-3xl" /> : <IoPlay className="text-white text-3xl" />}
      </button>

      {/* Next Button */}
      <button
        className="w-12 h-12 flex items-center justify-center rounded-lg transition-transform duration-200 hover:scale-110"
        onClick={handleNext}
      >
        <IoPlaySkipForward className="text-gray-400 text-3xl" />
      </button>
    </div>
  );
}
